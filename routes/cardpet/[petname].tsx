import { Handlers, PageProps } from "$fresh/server.ts";
import { FaDog } from "react-icons/fa";
import { Head } from "$fresh/runtime.ts";
import { useState } from "https://esm.sh/v106/preact@10.11.0/hooks/src/index";

interface PetProfile {
  petname: string;
  avatar_url: string;
}

export const handler: Handlers<PetProfile | null> = {
  async GET(_, ctx) {
    const { petname } = ctx.params;
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
    const newProfile: PetProfile = {
      avatar_url: avatar.message[0],
      petname: petname,
    };
    return ctx.render(newProfile);
  },
};

export default function Page({ data }: PageProps<PetProfile | null>) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/cardpet.css" />
      </Head>
      <main
        class="p-4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <div
          class="pb-4 pl-5 flex justify-between items-center"
          style={{ width: "22rem" }}
        >
          <a class="hover:text-blue-500" href="/">⬅️ Back</a>
          <a
            href={data.petname ? "/cardpet/" + data.petname : "/"}
            class="border-2 p-1 rounded-md bg-pink-100 hover:bg-pink-200 border-current"
          >
            Generate random
          </a>
        </div>
        <div
          class="pt-10 pb-10 pl-6 pr-6 area"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: `0.6rem solid rgba(${Math.floor(Math.random() * 255)}, ${
              Math.floor(Math.random() * 255)
            }, ${Math.floor(Math.random() * 255)}, 0.8)`,
            borderRadius: "1rem",
            height: "auto",
            maxHeight: "40rem",
            maxWidth: "22rem",
            position: "relative",
            backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
              Math.floor(Math.random() * 255)
            }, ${Math.floor(Math.random() * 255)}, 0.05)`,
            wordBreak: "break-all",
          }}
        >
          <ul class="circles">
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
            <li
              style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.5)`,
              }}
            >
            </li>
          </ul>
          <div style={{ position: "absolute", top: 10, left: 10 }}>
            <FaDog size={30} />
          </div>
          <img
            src={data.avatar_url}
            width={200}
            height={200}
            style={{
              borderRadius: "50%",
              alignSelf: "center",
              border: `0.4rem solid rgba(${Math.floor(Math.random() * 255)}, ${
                Math.floor(Math.random() * 255)
              }, ${Math.floor(Math.random() * 255)}, 0.8)`,
              width: "18rem",
              height: "18rem",
              maxWidth: "20rem",
              zIndex: 1000,
            }}
          />

          <h2
            class="text-3xl pt-2"
            style={{
              fontFamily: "Marker Felt",
              letterSpacing: 2,

              overflow: "",
            }}
          >
            {data.petname ?? "Name"}
          </h2>
          <p class="text-2xl pb-3" style={{ fontFamily: "Trebuchet MS" }}>
            @{data.petname
              ? data.petname.toLowerCase().replace(/\s/g, ".")
              : "Username"}
          </p>
          <div
            style={{
              textOverflow: "ellipsis",
              height: "60%",
              overflow: "hidden",
              border: `0.3rem dotted rgba(${Math.floor(Math.random() * 255)}, ${
                Math.floor(Math.random() * 255)
              }, ${Math.floor(Math.random() * 255)}, 0.8)`,
              borderRadius: "1rem",
              textAlign: "center",
              padding: "0.05rem 0.1rem 0.5rem 0.1rem",
              backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                Math.floor(Math.random() * 255)
              }, ${Math.floor(Math.random() * 255)}, 0.2)`,
              zIndex: 1000,
            }}
          >
            <p style={{ textOverflow: "hidden", fontFamily: "Book Antiqua" }}>
              et, quidem ipsam sed beatae minima eligendi consectetur, facilis
              provident sunt laborum quisquam.et, quidem ipsam sed beatae minima
              eligendi consectetur, facilis provident sunt laborum quisquam.et,
              quidem ipsam sed beatae minima eligendi consectetur, facilis
              provident sunt laborum quisquam.et, quidem ipsam sed beatae minima
              eligendi consectetur, facilis provident sunt laborum quisquam.et,
              quidem ipsam sed beatae minima eligendi consectetur, facilis
              provident sunt laborum quisquam.et, quidem ipsam sed beatae minima
              eligendi consectetur, facilis provident sunt laborum quisquam.
              eligendi consectetur, facilis provident sunt laborum quisquam.et,
              quidem ipsam sed beatae minima eligendi consectetur, facilis
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
