import "../App.css";
import { BsStars } from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import user from "../assets/user-icon.png";
import chatGPTLogo from "../assets/chatgpt.svg";
import addBtn from "../assets/add-30.png";
import { useContext } from "react";
import { Context } from "./MainBody";

const SideBar = () => {
  var data = useContext(Context);
  console.log('Hi this is use context data :-  ',data);
  console.log('Hi this is use context data :-  ',data);
  return (
    <>
      <div class="upperSideBar">
          <div class="upperSideBarTop">
            <img src={chatGPTLogo} alt="Logo" className="logo" />
            <span className="brand">Chat GPT</span>
          </div>
          <button className="midBtn btn btn-hover" onClick={()=>{
            data.setQsAns([]);
          }}>
            <img src={addBtn} alt="Add a button" className="addBtn"/>New Chat
          </button>
          <div className="upperSideBarBody">
            <div className="">Previous 7 Days</div>
            <div className="allQuestionList">
              <button className="query btn-hover" onClick={()=>{
                data.changeInputVal.current.value = 'How are you?';
              }}>
                <span><BiMessageAlt/></span>
                How are you?
              </button>     
            </div>
          </div>
          <div className="upperSideBarFooter">
            <div>
              <BsStars />
              Upgrade
            </div>
            <div className="imgUser">
              <img src={user} width={"50px"} />
              <span>Ayantika Chakraborty</span>
              <button className="btn btn-hover">
                <BsThreeDots />
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default SideBar;