import { data } from "./data.js";
import "./banner.css";
import { Icon } from "@iconify-icon/react";

export function List() {
  return (
    <div className="li">
      {data.map((c, i) => {
        const { color, logo, name, link } = c;
        return (
          <Banner
            color={color}
            logo={logo}
            name={name}
            link={link}
            key={i}
          ></Banner>
        );
      })}
    </div>
  );
}
const Banner = (p) => {
  const { color, logo, name, link } = p;

  return (
    <a href={link} target="blank" style={{ textDecoration: "none" }}>
      <button className="banners align-middle flex">
        <div className="logo">
          <Icon
            icon={`${logo}`}
            style={{ color: color }}
            className="logo flex justify-center text-2xl mt-1"
            id="logo"
          />
        </div>
        <div className="lname">{name}</div>
      </button>
    </a>
  );
};
