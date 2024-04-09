import { data } from "./data.js";
import "./banner.css";

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
  const { logo, name, link } = p;

  return (
    <div className="flex gap-2 align-middle">
      <a
        href={link}
        target="blank"
        style={{ textDecoration: "none" }}
        className="banners align-middle flex"
      >
        <div className="logo">
          <img
            src={logo}
            alt=""
            className="w-7 h-7 flex justify-center align-middle"
          />
        </div>
        <div className="lname flex justify-center align-middle">
          {name}
        </div>
      </a>
    </div>
  );
};
