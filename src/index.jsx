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
            width: 220,
            height: 220,
            justifySelf: "center",
            marginTop: 10,
          }}
          loop
          autoplay
        ></dotlottie-player>
        <List />
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BackGround />);
