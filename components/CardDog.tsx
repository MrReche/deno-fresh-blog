import { FaDog } from "react-icons/fa";

interface PetProfile {
  petname: string;
  avatarUrl: string;
  description: string;
}

export default function CardDog(
  props: PetProfile,
) {
  return (
    <div
      id="petCardDiv"
      class="pt-10 pb-10 pl-6 pr-6 area"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: `0.6rem solid rgba(${Math.floor(Math.random() * 255)}, ${
          Math.floor(Math.random() * 255)
        }, ${Math.floor(Math.random() * 255)}, 0.9)`,
        borderRadius: "1rem",
        height: "auto",
        maxHeight: "40rem",
        maxWidth: "22rem",
        position: "relative",
        backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${
          Math.floor(Math.random() * 255)
        }, ${Math.floor(Math.random() * 255)}, 0.08)`,
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
        src={props.avatarUrl ? props.avatarUrl : "cafe.jpg"}
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
        {props.petname ? props.petname : "Café Reche"}
      </h2>
      <p class="text-2xl pb-3" style={{ fontFamily: "Trebuchet MS" }}>
        @{props.petname
          ? props.petname.toLowerCase().replace(/\s/g, ".")
          : "cafe.reche"}
      </p>
      <div
        style={{
          textOverflow: "ellipsis",
          minHeight: "60%",
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
        <p
          class="text-black"
          style={{
            textOverflow: "hidden",
            fontFamily: "Book Antiqua",
            textShadow: "0.03rem 0.03rem 0.03rem 0.03rem rgba(0,0,0,0.6)",
          }}
        >
          {props.description
            ? props.description.charAt(0).toUpperCase() +
              props.description.slice(1)
            : ""}
        </p>
      </div>
    </div>
  );
}
