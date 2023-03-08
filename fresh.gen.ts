// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_middleware.ts";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/api/joke.ts";
import * as $3 from "./routes/api/random-uuid.ts";
import * as $4 from "./routes/blog/[id].tsx";
import * as $5 from "./routes/cardpet/[petname].tsx";
import * as $6 from "./routes/generatedog.tsx";
import * as $7 from "./routes/greet/[name].tsx";
import * as $8 from "./routes/index.tsx";
import * as $9 from "./routes/search.tsx";
import * as $$0 from "./islands/Button.tsx";
import * as $$1 from "./islands/ButtonDescribe.tsx";
import * as $$2 from "./islands/ButtonPetInput.tsx";
import * as $$3 from "./islands/ChatAI.tsx";
import * as $$4 from "./islands/FormPet.tsx";
import * as $$5 from "./islands/Input.tsx";

const manifest = {
  routes: {
    "./routes/_middleware.ts": $0,
    "./routes/about.tsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/api/random-uuid.ts": $3,
    "./routes/blog/[id].tsx": $4,
    "./routes/cardpet/[petname].tsx": $5,
    "./routes/generatedog.tsx": $6,
    "./routes/greet/[name].tsx": $7,
    "./routes/index.tsx": $8,
    "./routes/search.tsx": $9,
  },
  islands: {
    "./islands/Button.tsx": $$0,
    "./islands/ButtonDescribe.tsx": $$1,
    "./islands/ButtonPetInput.tsx": $$2,
    "./islands/ChatAI.tsx": $$3,
    "./islands/FormPet.tsx": $$4,
    "./islands/Input.tsx": $$5,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
