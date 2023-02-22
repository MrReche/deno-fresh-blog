import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.d.ts";
import { logo } from "../utils/assets.ts";
import { listPosts } from "../utils/posts.ts";
import { Component, h } from "preact";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const handler: Handlers = {
  async GET(req, context) {
    console.log(context.state.data, "-middleware data");
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;

  return (
    <div
      class="p-10 pt-20"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <main>
        <header>
          <h1 class="text-4xl font-bold">Pere Reche</h1>
          <p class="text-xl">@mr.reche</p>

          <h2 class="text-sm font-bold pt-3">
            Hey, I'm Pere. I'm a{" "}
            <strong>software developer at Lovecoding it</strong>
            , specialist in frontend. This blog is made with Deno, Preact and
            Twind.
          </h2>
        </header>
        <div
          class="flex"
          style={{ alignItems: "center", gap: "2rem" }}
        >
          <img
            class="pt-3"
            src={logo}
            width={150}
            style={{ borderRadius: "50%" }}
          />
          <div class="flex-1">
            <a
              target="_blank"
              class="hover:text-purple-700"
              href="https://github.com/mrreche"
            >
              <div
                class="flex pb-2"
                style={{ alignItems: "center", gap: "0.3rem" }}
              >
                <FaGithub color="purple" /> <p>step by step</p>
              </div>
            </a>
            <a
              class="hover:text-pink-700"
              target="_blank"
              href="https://instagram.com/mr.reche/"
            >
              <div
                class="flex pb-2"
                style={{ alignItems: "center", gap: "0.3rem" }}
              >
                <FaInstagram color="red" /> <p>+800 posts</p>
              </div>
            </a>
            <a
              class="hover:text-blue-800"
              target="_blank"
              href="https://www.linkedin.com/in/pere-reche-a66892177/"
            >
              <div class="flex" style={{ alignItems: "center", gap: "0.3rem" }}>
                <FaLinkedin color="#0A66C2" /> <p>whatever</p>
              </div>
            </a>
          </div>
        </div>
        {posts.map((post: Post) => (
          <a href={`/blog/${post.id}`}>
            <article
              class="p-4 mt-4 mb-4 hover:bg-blue-100"
              style={{ border: "0.2rem solid black", borderRadius: "0.5rem" }}
            >
              <h2 class="text-2xl font-bold">
                {post.title}
              </h2>
              <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
            </article>
          </a>
        ))}
      </main>
    </div>
  );
}
