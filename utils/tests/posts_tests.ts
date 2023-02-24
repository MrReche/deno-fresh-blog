import { loadPost } from "../posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("loadPost() return null is doesn exists", async () => {
  const post = await loadPost("non-existent");
  assertEquals(post, null);
});

Deno.test("loadPost() return a pot object if post exists", async () => {
  const post = await loadPost("hello-world");
  assertEquals(post?.id, "hello-world");
  assertEquals(post?.title, "Hello World");
});
