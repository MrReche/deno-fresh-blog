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
        placeholder={"Your super puppy name..."}
        onChange={(e) => setPetname(e?.target?.value)}
        value={petname}
        class="px-2 py-1 border(pink-400 4)"
        type="text"
        maxLength={30}
        style={{ borderRadius: "0.3rem", minWidth: "30%" }}
      />
      <a
        class="hover:bg-pink-200"
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
        <FaPaintBrush size={20} color="#ff4cc8" />
      </a>
    </div>
  );
}
