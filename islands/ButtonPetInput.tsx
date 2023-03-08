import { useEffect } from "preact/hooks";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  step: number;
  type: string;
  handleStep: (step: number) => void;
  isDisabled: boolean;
}

export default function ButtonPetInput(props: ButtonProps) {
  const changeStep = () => {
    console.log(props);
    props.type === "next"
      ? props.handleStep(props.step + 1)
      : props.handleStep(props.step - 1);
  };

  useEffect(() => {
    console.log(props);
  }, [props.isDisabled]);

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
        class={`${
          props.type == "next"
            ? "bg-red-200 hover:bg-red-300"
            : "bg-purple-200 hover:bg-purple-300"
        } active:outline-none focus:outline-none disabled:opacity-40`}
        style={{
          width: "2.5rem",
          height: "2.5rem",
          padding: "0.05rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.5rem",
        }}
        onClick={() => changeStep()}
      >
        {props.type == "next"
          ? <FaArrowRight size={20} color="#333" />
          : <FaArrowLeft size={20} color="#333" />}
      </button>
    </div>
  );
}
