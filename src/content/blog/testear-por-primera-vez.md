---
author: Juan Beresiarte
pubDatetime: 2025-02-28T19:34:20Z
title: Hacer testing por primera vez sin morir en el intento
slug: testing-sin-morir-en-el-intento
featured: false
draft: false
tags:
  - javascript
  - librerias
  - testing
description: 
---

## Introducción: el bicho raro del desarrollo

Cuando empecé a programar, había una palabra que aparecía en todas las ofertas de trabajo, en todos los tutoriales avanzados y en todas las conversaciones de developers más experimentados: **testing**.

Y cada vez que la escuchaba, hacía lo mismo: la ignoraba.

No porque no quisiera aprender, sino porque sonaba complicado, aburrido y, sobre todo, *opcional*. Yo quería construir cosas, ver resultados, hacer que los botones funcionaran. ¿Escribir código para probar mi código? Me parecía una pérdida de tiempo.

El día que tuve que modificar una función que "funcionaba perfectamente" y sin querer rompí otras tres partes de la aplicación, entendí para qué sirve el testing. Y cuando finalmente me senté a aprenderlo, descubrí algo que nadie me había dicho: no es tan difícil como parece.

Este artículo es lo que me hubiera gustado leer ese día.

---

## ¿Qué es un test? La pregunta con respuesta esperada

Un test es, en su forma más simple, una **pregunta con una respuesta esperada**.

Cuando terminamos de cocinar, probamos la comida antes de servirla. Un test en programación hace exactamente eso: verifica que, dado cierto input, el código devuelva el output correcto.

La diferencia con probarlo a mano en el navegador es que el test se puede correr **cientos de veces, en segundos, de forma automática**. Cada vez que cambiamos algo, los tests se ejecutan y nos avisan si rompimos algo sin darnos cuenta.

---

## Los dos tipos de testing que necesitás conocer al principio

### 1. Unit Testing — Probando una pieza a la vez

Probamos **una sola unidad de código** de forma aislada: una función, un componente, una operación concreta. Es el tipo de test más común cuando comenzamos y el más accesible de escribir.

### 2. Integration Testing — Probando que todo encaje junto

Verificamos que **varias piezas funcionen bien en conjunto**. Es un poco más complejo porque involucra más partes del sistema, pero no hace falta preocuparse por esto todavía.

> 💡 **Una guía simple para empezar:** si una función hace una cosa concreta y devuelve un resultado, es candidata a una unit test. Cuando dos o más partes del sistema colaboran, pensemos en una integration test.

---

## Ejemplo práctico: tu primer test de verdad

Suficiente teoría. Vamos al código.

### La función que vamos a testear

```javascript
// math.js
function sumar(a, b) {
  return a + b;
}

export { sumar };
```

Usaremos **Vitest**, un framework moderno muy popular en proyectos con Vite.

### Instalación

```bash
npm install -D vitest
```

En el `package.json`:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

### El test

Por convención, el archivo de test lleva el mismo nombre que el archivo que prueba, con `.test.` en el medio:

```javascript
// math.test.js
import { describe, it, expect } from 'vitest';
import { sumar } from './math.js';

describe('sumar', () => {

  it('debería devolver 5 cuando sumamos 2 y 3', () => {
    const resultado = sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería devolver 0 cuando sumamos números negativos y positivos iguales', () => {
    const resultado = sumar(-5, 5);
    expect(resultado).toBe(0);
  });

  it('debería sumar correctamente dos números negativos', () => {
    const resultado = sumar(-2, -3);
    expect(resultado).toBe(-5);
  });

});
```

### ¿Qué significa cada parte?

**`describe('sumar', () => { ... })`**
Agrupa todos los tests relacionados a una misma unidad. No es obligatorio, pero hace que el código de tests sea más ordenado y fácil de navegar.

**`it('debería devolver 5...', () => { ... })`**
Define una prueba individual. El primer argumento es una descripción en lenguaje natural de qué debería ocurrir. Empezar con *"debería..."* no es solo estilo: hace que cuando un test falle, el mensaje de error sea inmediatamente legible. *"sumar debería devolver 5 cuando sumamos 2 y 3"* nos dice exactamente qué falló sin necesidad de leer el código.

**`expect(resultado).toBe(5)`**
El corazón del test. Si `resultado` es 5, el test pasa. Si es cualquier otra cosa, falla. `.toBe()` es uno de los muchos *matchers* disponibles; con el tiempo vamos a conocer otros como `.toEqual()`, `.toBeTruthy()` o `.toContain()`.

### Resultado

```bash
npm test
```

```
✓ sumar > debería devolver 5 cuando sumamos 2 y 3
✓ sumar > debería devolver 0 cuando sumamos números negativos y positivos iguales
✓ sumar > debería sumar correctamente dos números negativos

Test Files  1 passed (1)
Tests       3 passed (3)
```

---

## Cuando el test falla — y por qué eso es algo bueno

Un test que falla no es un error del sistema. Es el sistema funcionando exactamente como fue diseñado.

Supongamos que alguien modifica la función `sumar` y, sin querer, introduce un bug:

```javascript
// math.js — versión con un bug
function sumar(a, b) {
  return a * b; // ← Multiplicamos en lugar de sumar.
}
```

Al correr los tests:

```
✗ sumar > debería devolver 5 cuando sumamos 2 y 3

  AssertionError: expected 6 to be 5

    - Expected: 5
    + Received: 6

Test Files  1 failed (1)
Tests       1 failed | 2 passed (3)
```

Sabemos qué test falló, cuál era el resultado esperado y cuál fue el recibido. Sin revisar toda la aplicación, sin hacer clic en diez pantallas. El test nos lleva directo al problema.

Ese es el valor real del testing: **no nos avisa solo cuando las cosas funcionan, sino también cuando dejan de funcionar**.

---

## Errores comunes al empezar: los tropiezos de siempre

**Querer testear todo de una sola vez.**
El primer impulso suele ser cubrir todo el proyecto de una vez. El resultado casi siempre es el mismo: bloqueo total y ningún test escrito. Vale más un test real que diez planificados.

**Escribir tests que siempre pasan.**
Un test demasiado permisivo no protege nada. Una buena práctica es verificar que el test también falla cuando el código está mal, no solo que pasa cuando está bien.

**No ejecutar los tests después de cada cambio.**
Los tests son útiles solo si los corremos. Incorporar `npm test` como parte del flujo de trabajo es tan importante como escribirlos.

**Desanimarse cuando un test falla.**
Encontrar el error en la terminal, antes de que llegue a producción, es exactamente la noticia que queremos recibir.

---

## Conclusión: la red de seguridad que no sabías que necesitabas

Hay un cambio que ocurre cuando empezamos a escribir tests y que no es fácil de anticipar: **dejamos de tenerle miedo a modificar nuestro propio código**.

Tocar una función que "ya funcionaba" generaba cierta ansiedad. ¿Y si rompemos algo? Con tests, hacemos el cambio, corremos la suite, y en segundos sabemos si todo sigue en orden.

Los developers que escriben tests no lo hacen porque sean más disciplinados. Lo hacen porque en algún momento sufrieron lo suficiente sin ellos.

Una función, un archivo de test, tres líneas. `expect`, `toBe`, un resultado esperado. Eso es suficiente para empezar.

---

*¿Tenés dudas o querés que profundice en algún tema? Dejame un comentario. Esto recién empieza.*