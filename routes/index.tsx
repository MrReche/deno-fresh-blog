import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.d.ts";
import { logo } from "../utils/assets.ts";
import { listPosts } from "../utils/posts.ts";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ChatAI from "../islands/ChatAI.tsx";
import InputCardPet from "../islands/InputCardPet.tsx";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/main.css" />
      </Head>
      <div
        class="sm:p-10 sm:pt-20 p-5"
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
              <strong>
                software developer at{" "}
                <a
                  class="hover:text-red-600"
                  target="_blank"
                  href="https://lovecoding.it"
                >
                  lovecoding it
                </a>
              </strong>
              , specialist in frontend. This blog is made with Deno,Deno fresh,
              Preact and Twind.
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
                <div
                  class="flex"
                  style={{ alignItems: "center", gap: "0.3rem" }}
                >
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
                <h3 class="text-2xl font-bold">
                  {post.title}
                </h3>
                <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
              </article>
            </a>
          ))}
          <div class="py-10">
            <h3 class="text-blue-600 text-2xl font-bold pt-4 pb-3">
              Generate your random doggy card
            </h3>
            <div class="py-5">
              <InputCardPet />
            </div>
          </div>
          <div>
            <h3 class="text-purple-800 text-2xl font-bold pt-4 pb-3">
              Talk to me
            </h3>
            <ChatAI />
          </div>
        </main>
      </div>
    </>
  );
}
