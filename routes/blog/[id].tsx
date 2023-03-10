import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "$gfm/mod.ts";
import Button from "../../islands/Button.tsx";

export const handler: Handlers = {
  async GET(req, context) {
    const { id } = context.params;
    const post = await loadPost(id);
    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};

  return (
    <article class="p-4">
      <header class="pb-4">
        <a class="hover:text-blue-500" href="/">⬅️ Back</a>
        <h1 class="text-2xl font-bold pt-5">{post.title}</h1>
        <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
      </header>
      <Button />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body pt-4"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </article>
  );
}
