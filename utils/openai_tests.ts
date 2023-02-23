import { getChatAI } from "./openai.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("getChatAI() return null is doesn exists", async () => {
  const post = await getChatAI("nofgdfgn-existent");
  assertEquals(post, null);
});

Deno.test("loadPost() return a pot object if post exists", async () => {
  const post = await getChatAI("hello-world");
  assertEquals(post?.id, "hello-world");
  assertEquals(post?.title, "Hello World");
});
