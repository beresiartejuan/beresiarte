import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const onlySlug = url.searchParams.has("onlySlug");
    const onlyContent = url.searchParams.has("onlyContent");

    if (onlySlug && onlyContent) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message:
            "Cannot use both 'onlySlug' and 'onlyContent' query params at the same time.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const posts = await getCollection("blog");
    const sortedPosts = getSortedPosts(posts);
    const lastPost = sortedPosts[0];

    if (onlySlug) {
      return new Response(lastPost.slug, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    if (onlyContent) {
      return new Response(lastPost.body, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    const { body, ...rest } = lastPost;

    return new Response(JSON.stringify(rest), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: (error as any).message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
