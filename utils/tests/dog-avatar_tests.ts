import { getAvatarDog } from "../cohere.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("getChatAI() retutertertrn null is doesn exists", async () => {
  const post = await getAvatarDog();
  console.log(post);
  assertEquals(post, null);
});
