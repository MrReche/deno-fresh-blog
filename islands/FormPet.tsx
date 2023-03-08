import { useEffect, useState } from "preact/hooks";
import ButtonDescribe from "./ButtonDescribe.tsx";
import ButtonPetInput from "./ButtonPetInput.tsx";
import CardDog from "../components/CardDog.tsx";
import { describePet, getAvatarDog } from "../utils/cohere.ts";
import { Handlers } from "$fresh/server.ts";

interface PetProfile {
  avatar_url: string | null;
  cohere_key: string | null;
}

export default function FormPet(props: PetProfile | null) {
  const [petname, setPetName] = useState("");
  const [ability, setAbility] = useState("");
  const [personality, setPersonality] = useState("");
  const [hobby, setHobby] = useState("");

  const [avatarUrl, setAvatarUrl] = useState(props?.avatar_url ?? "");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [promise, setPromise] = useState(false);

  const [step, setStep] = useState(0);

  const generateCard = async () => {
    if (petname && ability && personality && hobby) {
      setLoading(true);
      try {
        const resDescription = await doGetDescription();

        setLoading(false);
        setPromise(true);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    }
  };

  const doGetDescription = async () => {
    try {
      const responseDescription = await describePet(
        petname,
        ability.toLowerCase(),
        personality.toLowerCase(),
        hobby.toLowerCase(),
        props?.cohere_key,
      );
      setDescription(responseDescription);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log(description, avatarUrl, petname, "avatar");
  }, [description]);

  const handlePetname = (e: any) => {
    const text = e?.target?.value;
    setPetName(text);
  };

  const GenerateInput = (props: { step: number }) => {
    let returnInput = <div>Input</div>;

    if (props.step == 0) {
      returnInput = (
        <>
          <h3 class="text-2xl text-blue-400 pb-2 text-center">
            Your super puppy name
          </h3>
          <input
            name="petname"
            onChange={handlePetname}
            placeholder="Your super puppy name"
            value={petname}
            class={`px-2 py-1 border(blue-400 4) w-full focus:outline-none focus:bg-blue-50`}
            type="text"
            maxLength={30}
            style={{ borderRadius: "0.4rem" }}
          />
        </>
      );
    }

    if (props.step == 1) {
      returnInput = (
        <>
          <h3 class="text-2xl text-green-400 pb-2 text-center">
            What is your greatest ability?
          </h3>
          <input
            name="ability"
            onChange={(e) => setAbility(e?.target?.value)}
            placeholder="What is your greatest ability?"
            value={ability}
            class={`px-2 py-1 border(green-400 4) w-full focus:outline-none focus:bg-green-50`}
            type="text"
            maxLength={10}
            style={{ borderRadius: "0.4rem" }}
          />
        </>
      );
    }

    if (props.step == 2) {
      returnInput = (
        <>
          <h3 class="text-2xl text-yellow-500 pb-2 text-center">
            Your personality in one word
          </h3>
          <input
            name="personality"
            onChange={(e) => setPersonality(e?.target?.value)}
            placeholder="What stands out in your personality?"
            value={personality}
            class={`px-2 py-1 border(yellow-400 4) w-full focus:outline-none focus:bg-yellow-50`}
            type="text"
            maxLength={10}
            style={{ borderRadius: "0.4rem" }}
          />
        </>
      );
    }

    if (props.step == 3) {
      returnInput = (
        <>
          <h3 class="text-2xl text-indigo-400 pb-2 text-center">
            What is your favorite hobby?
          </h3>
          <input
            name="hooby"
            onChange={(e) => setHobby(e?.target?.value)}
            placeholder="What is your favorite hobby"
            value={hobby}
            class={`px-2 py-1 border(indigo-400 4) w-full focus:outline-none focus:bg-indigo-50`}
            type="text"
            maxLength={10}
            style={{ borderRadius: "0.4rem" }}
          />
        </>
      );
    }

    return (
      returnInput
    );
  };

  const GenerateButtons = () => {
    let renderButton = <></>;

    switch (step) {
      case 0:
        renderButton = (
          <>
            <div></div>
            <p class="text-black align-bottom text-lg self-center">
              {step + 1}/4
            </p>
            <ButtonPetInput
              key={petname}
              handleStep={setStep}
              step={step}
              type="next"
              isDisabled={!petname}
            />
          </>
        );
        break;
      case 1:
        renderButton = (
          <>
            <ButtonPetInput
              handleStep={setStep}
              step={step}
              type="previous"
              isDisabled={false}
            />
            <p class="text-black align-bottom text-lg self-center">
              {step + 1}/4
            </p>
            <ButtonPetInput
              handleStep={setStep}
              step={step}
              type="next"
              isDisabled={!ability}
            />
          </>
        );
        break;
      case 2:
        renderButton = (
          <>
            <ButtonPetInput
              handleStep={setStep}
              step={step}
              type="previous"
              isDisabled={false}
            />
            <p class="text-black align-bottom text-lg self-center">
              {step + 1}/4
            </p>
            <ButtonPetInput
              handleStep={setStep}
              step={step}
              type="next"
              isDisabled={!personality}
            />
          </>
        );
        break;
      case 3:
        renderButton = (
          <>
            <ButtonPetInput
              handleStep={setStep}
              step={step}
              type="previous"
              isDisabled={false}
            />

            <p class="text-black align-bottom text-lg self-center">
              {step + 1}/4
            </p>
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
                disabled={!petname && !ability && !personality && !hobby}
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
                onClick={() => generateCard()}
              >
                Go!
              </button>
            </div>
          </>
        );
        break;
    }
    return renderButton;
  };

  return (
    <div class="py-5">
      {!loading && !promise
        ? (
          <div>
            <GenerateInput step={step} />

            <div
              class={`flex justify-between pt-4 align-bottom`}
            >
              <GenerateButtons />
            </div>
          </div>
        )
        : <></>}
      {loading
        ? (
          <div class="flex flex-col gap-10 justify-center items-center h-80">
            <div class="flex justify-center items-center">
              <div
                class="animate-spin"
                style={{ width: "0.1rem", height: "0.1rem" }}
              >
                🐶
              </div>
              <p class="text-2xl text-pink-400">
                C'mon {petname}!{" "}
              </p>
              <div
                class="animate-spin"
                style={{ width: "0.1rem", height: "0.1rem" }}
              >
                🐶
              </div>
            </div>
            <div
              class="animate-spin rounded-full border-tl-4 w-20 h-20"
              style={{
                borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${
                  Math.floor(Math.random() * 255)
                }, ${Math.floor(Math.random() * 255)}, 0.9)`,
              }}
            >
            </div>
          </div>
        )
        : <></>}
      {!loading && promise
        ? (
          <CardDog
            description={description}
            petname={petname}
            avatarUrl={avatarUrl}
          />
        )
        : <></>}
    </div>
  );
}
