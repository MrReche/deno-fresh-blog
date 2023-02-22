import { JSX } from "preact";
import { useState } from "preact/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { getChatAI } from "../utils/openai.ts";

export default function ChatAI(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const [userText, setUserText] = useState("");
  const [aiText, setAiText] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleConversation = (text: string, type: string) => {
    if (text != null && type != null) {
      setConversation((prev) => [...prev, { text: text, type: type }]);
      console.log(conversation, "conversation");
    }
  };

  const handleUserText = (e: any) => {
    const text = e.target.value;
    setUserText(text);
  };

  const getAIResponse = async () => {
    console.log("holaaa");
    if (userText) {
      handleConversation(userText, "USER");
      try {
        const response = await getChatAI(userText);
        setAiText(response);
        setUserText("");
        handleConversation(response, "AI");
      } catch (e) {
        console.log(e, "error");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{ display: "flex", gap: 6, flexWrap: "wrap", height: "2rem" }}
      >
        <input
          placeholder="Tell me something..."
          class="border-4"
          type="text"
          value={userText}
          onChange={handleUserText}
          style={{ borderRadius: "0.4rem", padding: 5 }}
        />
        <button
          onClick={() => getAIResponse()}
          {...props}
          class="hover:text-purple-300"
        >
          <FaPaperPlane color="purple" />
        </button>
      </div>
      <div class="border-1" style={{ flex: 1, minHeight: "6rem" }}>
        <p>{aiText}</p>
      </div>
    </div>
  );
}
