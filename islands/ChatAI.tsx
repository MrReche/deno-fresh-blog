import { createRef, JSX } from "preact";
import { useState } from "preact/hooks";
import { FaPaperPlane } from "react-icons/fa";
import MessageChat from "../components/MessageChat.tsx";
import { getChatAI } from "../utils/openai.ts";

export default function ChatAI() {
  const [userText, setUserText] = useState("");
  const [aiText, setAiText] = useState("");
  const [conversation, setConversation] = useState([{
    text: "Hola que tal",
    type: "AI",
  }]);

  const handleConversation = (text: string, type: string) => {
    if (text != null && type != null) {
      const newMesage = {
        text: text,
        type: type,
      };
      setConversation([...conversation, newMesage]);
      setUserText("");
      chatContainerRef?.current?.scrollIntoView({ behavior: "smooth" });
      console.log(conversation, "conversation");
    }
  };

  const handleUserText = (e: any) => {
    const text = e.target.value;
    setUserText(text);
  };

  const getAIResponse = () => {
    console.log("holaaa");
    if (userText) {
      handleConversation(userText, "USER");
      /* try {
        const response = await getChatAI(userText);
        setAiText(response);
        setUserText("");
        handleConversation(response, "AI");
      } catch (e) {
        console.log(e, "error");
      } */
    }
  };

  const chatContainerRef = createRef();

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
        style={{
          display: "flex",
          height: "2rem",
        }}
      >
        <input
          placeholder="Tell me something..."
          class="border-4 focus:outline-none focus:bg-purple-50"
          type="text"
          value={userText}
          onInput={handleUserText}
          style={{
            borderRadius: "0.4rem",
            paddingLeft: 5,
            paddingRight: 5,
            borderColor: "purple",
            width: "90%",
            paddingBottom: "1rem",
            paddingTop: "1rem",
          }}
        />
        <button
          onClick={() => getAIResponse()}
          onKeyPress={() => getAIResponse()}
          class="hover:bg-purple-200 focus:outline-none"
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.5rem",
          }}
        >
          <FaPaperPlane color="purple" />
        </button>
      </div>
      <div
        ref={chatContainerRef}
        class="border-1 bg-yellow-50"
        style={{
          flex: 1,
          minHeight: "15rem",
          maxHeight: "30rem",
          height: "auto",
          borderColor: "purple",
          borderRadius: "0.2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          padding: "0.5rem",
          gap: "1rem",
          overflowY: "scroll",
        }}
      >
        {conversation.length > 0
          ? conversation.map((message, index) => (
            <MessageChat
              key={message.type + index}
              text={message.text}
              type={index % 2 != 0 ? message.type : "AI"}
            />
          ))
          : <p>No messages</p>}
      </div>
    </div>
  );
}
