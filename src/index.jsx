import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { List } from "./banner.jsx";
import "@dotlottie/player-component";

function BackGround() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: "./img/space.lottie",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <main>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="content">
        <div className="name">SAMI THAKUR</div>
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
        <dotlottie-player
          className="astronaut"
          src="https://lottie.host/b78f2691-ca97-4aaa-92b8-9fc470a9a118/uOJmwqPkDO.json"
          background="transparent"
          speed="1"
          style={{
            width: 250,
            height: 250,
            justifySelf: "center",
            marginTop: 20,
          }}
          loop
          autoplay
        ></dotlottie-player>
        <List />
        <div className="credit">Desing & Developed by &lt;/SAMI&gt;</div>
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BackGround />);
