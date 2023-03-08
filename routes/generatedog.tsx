import { Head } from "$fresh/runtime.ts";
import FormPet from "../islands/FormPet.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface PetProfile {
  avatar_url: string;
  cohere_key: string;
}

export const handler: Handlers<PetProfile | null> = {
  async GET(_, ctx) {
    const headers = new Headers({
      "User-Agent": "request",
      "Content-Type": "application/json",
    });

    const resp = await fetch(`https://dog.ceo/api/breeds/image/random/1`, {
      method: "GET",
      headers: headers,
    });
    if (resp.status === 404) {
      return ctx.render(null);
    }

    const avatar = await resp.json();
    const cohere_key = await Deno.env.get("API_KEY_COHERE");
    console.log(cohere_key, "keys");
    const newProfile: PetProfile = {
      avatar_url: avatar.message[0],
      cohere_key: cohere_key ?? "",
    };

    return ctx.render(newProfile);
  },
};

export default function Page({ data }: PageProps<PetProfile | null>) {
  console.log(data?.cohere_key, "keys");
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/cardpet.css" />
      </Head>
      <div
        class="sm:p-4 pt-4 pb-4 pl-1 pr-1"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <main>
          <header class="pb-4 flex flex-col justify-between items-center gap-4">
            <nav class="flex justify-between items-center w-full pb-10">
              <a class="hover:text-blue-500" href="/">⬅️ Back</a>
              <a
                class="border-2 p-1 rounded-md bg-pink-100 hover:bg-pink-200 border-current"
                href="/generatedog"
              >
                New Generate
              </a>
            </nav>
            <hr class="bg-pink-400 w-full h-1 rounded" />
            <h1 class="text-3xl text-gray-600 ">
              <span class="text-green-500">G</span>enerate{" "}
              <span class="text-red-500">Y</span>our{" "}
              <span class="text-blue-500">D</span>og{" "}
              <span class="text-purple-400">C</span>ard
            </h1>
            <hr class="bg-pink-400 w-full h-1 rounded" />
          </header>
          <FormPet
            avatar_url={data?.avatar_url ?? null}
            cohere_key={data?.cohere_key ?? null}
          />
        </main>
      </div>
    </>
  );
}
