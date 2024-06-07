import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { List } from "./banner.jsx";
import { socials } from "./socials.js";
import { Icon } from "@iconify-icon/react";
import ModalComponent from "./modal.jsx";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#21262d",
    width: "fit-content",
  },
};

function BackGround() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    console.log("open");
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <main className=" bg-darkbg w-full h-screen pb-20">
      <div className=" grid mx-auto w-fit">
        <div className="flex justify-end mt-5 ">
          <button onClick={openModal}>
            <Icon
              icon="iconamoon:share-2"
              className="text-2xl  text-[#d5d5d5] rounded-full p-1 hover:bg-[#d5d5d5] hover:text-darkbg transition duration-200 hover:shadow-slate-600"
            />
          </button>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <ModalComponent shareUrl="https://link-tree-liart.vercel.app/" />
        </Modal>
        <img className="rounded-full w-40 h-40 mx-auto mt-4 border-4 border-white" src="profile-pic.png" />
        {/* <div className="font-mono text-[13px] sm:text-[18px] text-[#404258] dark:text-[#b5b5b5] flex justify-start mt-2 mx-auto">
          Hi there! I'm
        </div> */}
        <div className="name font-staat tracking-wide text-[35px] sm:text-[45px]">SAMI THAKUR</div>
        {/* <img src="https://leetcode-badge-showcase.vercel.app/api?username={your-leetcode-username}" alt="LeetCode Badges"/> */}
        <div className="flex  justify-center mt-5 mb-10 align-middle gap-5">
          {socials.map((social, index) => {
            return (
              <a
                href={social.link}
                className={`  transition duration-300 hover:-translate-y-1 rounded-full p-2  grid  my-auto bg-dhtext shadow-lg hover:shadow-slate-600`}
                target="_blank"
                key={index}
                style={{
                  color: social.color,
                  cursor: "pointer",
                  onMouseEvent: "this.style.color='#000000'",
                }}
              >
                <Icon icon={social.logo} className="text-[20px] sm:text-[25px]" />
                <span class="sr-only">{social.name}</span>
              </a>
            );
          })}
        </div>
        <List />
      </div>
    </main>
  );
}

export default BackGround;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BackGround />);
