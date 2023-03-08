export default function ButtonDescribe(
  props: { isDisabled: boolean | undefined; generateCard: () => void },
) {
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
      <button
        disabled={props.isDisabled}
        class="hover:bg-pink-500 bg-pink-400 text-white active:outline-none focus:outline-none disabled:opacity-40"
        style={{
          width: "2.5rem",
          height: "2.5rem",
          padding: "0.05rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.5rem",
        }}
        onClick={() => props.generateCard()}
      >
        Go!
      </button>
    </div>
  );
}
