import { data } from "./data.js";
import "./banner.css";
import { Icon } from "@iconify-icon/react";

export function List() {
  return (
    <div className="li">
      {data.map((c, i) => {
        const { color, logo, name, link } = c;
        return <Banner color={color} logo={logo} name={name} link={link} key={i}></Banner>;
      })}
    </div>
  );
}
const Banner = (p) => {
  const { logo, name, link } = p;

  return (
    <div className=" banners flex align-middle">
      <a href={link} target="blank" style={{ textDecoration: "none" }} className=" align-middle justify-between w-fit flex gap-10">
        <div className="logo">
          <img src={logo} alt="" className="w-7 h-7 flex justify-center align-middle" />
        </div>
        <div className="lname flex justify-center align-middle">{name}</div>
      </a>
      {/* <button>
        <Icon icon="material-symbols:share" className="flex my-auto text-lg px-3 text-gray-400" />
      </button> */}
    </div>
  );
};
