import { JSX } from "preact";
import { useState } from "preact/hooks";
import { FaPaintBrush } from "react-icons/fa";

export default function InputCardPet() {
  const [petname, setPetname] = useState("");

  return (
    <div
      class="flex"
      style={{
        gap: "0.3rem",
        alignContent: "center",
        justifyContent: "center",
        verticalAlign: "center",
      }}
    >
      <input
        name="petname"
        onInput={(e) => setPetname(e?.target?.value)}
        placeholder={"Your super puppy name..."}
        value={petname}
        class="px-2 py-1 border(blue-400 4) w-full sm:w-auto focus:outline-none focus:bg-blue-50"
        type="text"
        maxLength={30}
        style={{ borderRadius: "0.4rem", minWidth: "30%" }}
      />
      <a
        class="hover:bg-blue-200"
        style={{
          width: "2.5rem",
          height: "2.5rem",
          padding: "0.05rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.5rem",
        }}
        href={petname ? "cardpet/" + petname : ""}
      >
        <FaPaintBrush size={20} color="#60a5fa" />
      </a>
    </div>
  );
}
