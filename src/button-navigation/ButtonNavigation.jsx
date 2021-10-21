import "./style/ButtonStyle.css";
import { NavLink } from "react-router-dom";

export const ButtonNavigation = ({ path, children }) => {
  return (
    <div className="nav-wrapper">
      <NavLink to={path}>
        <div className="navigation-block">{children}</div>
      </NavLink>
    </div>
  );
};
