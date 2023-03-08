interface InputProps {
  placeholder?: string;
  entry: string;
  color?: string;
  setEntry: Function;
}

export default function InputCardPet(props: InputProps) {
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
        onInput={(e) => props.setEntry(e)}
        placeholder={props.placeholder ?? "Write something..."}
        value={props.entry}
        class={`px-2 py-1 border(${
          props.color ?? "blue"
        }-400 4) w-full focus:outline-none focus:bg-${
          props.color ?? "blue"
        }-50`}
        type="text"
        maxLength={30}
        style={{ borderRadius: "0.4rem" }}
      />
    </div>
  );
}
