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
  const { color, logo, name, link } = p;

  return (
    <a href={link} target="blank" style={{ textDecoration: "none" }}>
      <button className="banners">
        <div className="logo">
          <i className={logo} style={{ color: color, marginTop: 2 }}></i>
        </div>
        <div className="lname">{name}</div>
      </button>
    </a>
  );
};
