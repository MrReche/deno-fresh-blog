import { Handlers, PageProps } from "$fresh/server.ts";
import { FaSearch } from "react-icons/fa";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <article class="p-4">
      <header class="pb-4">
        <a class="hover:text-blue-500" href="/">⬅️ Back</a>
        <h1 class="text-2xl font-bold pt-5">Search</h1>
      </header>
      <div class="flex flex-col sm:items-start">
        <form class="flex">
          <input
            class="px-2 py-1 border(green-400 4) w-full sm:w-auto focus:outline-none focus:bg-green-50"
            style={{ borderRadius: "0.4rem" }}
            type="text"
            name="q"
            value={query}
          />
          <button
            type="submit"
            class="hover:bg-yellow-200"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              padding: "0.05rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.5rem",
            }}
          >
            <FaSearch size={20} color="#60a5fa" />
          </button>
        </form>
        <div
          class="border(yellow-400 4) p-4 mt-4 w-full sm:w-auto"
          style={{ borderRadius: "0.4rem" }}
        >
          <ul>
            {results.map((name) => <li key={name}>{name}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}
