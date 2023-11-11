import sendImg from "../assets/send.svg";
import userPic from "../assets/user-icon.png";
import chatGPTLogo from "../assets/chatgpt.svg";
import { fetchData } from "./FetchDataFromOpenAPI";
import SideBar from "./SideBar";
import { createContext, useEffect, useRef, useState } from "react";

const Context = createContext();

const MainBody = () => {
  const [question, setQuestion] = useState("");
  const [qsAns, setQsAns] = useState([]);
  const inputElement = useRef(null);
  const changeInputVal = useRef(null);

  function callData(question) {
    if (question !== "") {
      setQsAns([
        ...qsAns,
        {
          question: question,
          answer: fetchData(question),
        },
      ]);
    }
  }
  useEffect(() => {
    inputElement.current.scrollIntoView();
    setQuestion("");
  }, [qsAns]);

  return (
    <>
      <Context.Provider
        value={{qsAns,setQsAns,changeInputVal,callData}}
      >
        <div className="main">
          <span style={{ fontSize: "3rem" }}>Chat GPT</span>
          <div className="chats">
            {qsAns.map((data, index) => (
              <>
                <div className="myQuestion">
                  <div>
                    <img src={userPic} alt="User Picture" />
                    <p> {data.question}</p>
                  </div>
                </div>
                <div className="chatGPTAns">
                  <div>
                    <img src={chatGPTLogo} alt="User Picture" />
                    <p>{data.answer}</p>
                  </div>
                </div>
              </>
            ))}
            <div ref={inputElement} />
          </div>
          <div className="chatsFooter">
            <div className="chatsF">
              <input
                type="text"
                placeholder="Send a Question..."
                id="questionField"
                value={question}
                ref={changeInputVal}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button className="btn-hover" onClick={() => callData(question)}>
                <img src={sendImg} alt="Image" />
              </button>
            </div>
          </div>
          <span style={{ padding: "5px" }}>
            ChatGPT can make mistakes. Consider checking important information.
          </span>
        </div>

        <SideBar />
      </Context.Provider>
    </>
  );
};

export default MainBody;
export {  Context };
