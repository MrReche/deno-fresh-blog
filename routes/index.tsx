import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.d.ts";
import { logo } from "../utils/assets.ts";
import { listPosts } from "../utils/posts.ts";

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
          <h2 class="text-sm font-bold pt-3">
            Hey, I'm Pere. I'm a{" "}
            <strong>software developer at Lovecoding it</strong>
            , specialist in frontend. This blog is made with Deno, Preact and
            Twind.
          </h2>
          <img
            class="pt-3"
            src={logo}
            width={150}
            style={{ borderRadius: "50%" }}
          />
        </header>
        {posts.map((post: Post) => (
          <a class="hover:text-blue-600" href={`/blog/${post.id}`}>
            <article
              class="p-4 mt-4 mb-4 hover:text-blue-600"
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
