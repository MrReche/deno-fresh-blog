import { JSX } from "preact";

export default function MessageChat(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <div
      class="border-1"
      style={{
        padding: 10,
        backgroundColor: props.type === "AI" ? "#f9f2ff" : "#dfffc1",
        alignSelf: props.type === "USER" ? "flex-start" : "flex-end",
        borderRadius: "0.7rem",
        borderColor: props.type === "AI" ? "#e1c1ff" : "#b6d7a8",
        wordBreak: "break",
        maxWidth: "90%",
      }}
    >
      <p style={{ fontSize: "0.8rem", color: "#999" }}>
        <em>{props.type === "USER" ? "you:" : "Mr.Reche:"}</em>
      </p>
      <p>{props.text}</p>
    </div>
  );
}
