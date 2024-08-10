import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <div>
      <nav className="flex__div">
        <div className="nav__left flex__div">
          <img
            className="menu__icon"
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
            src={menu_icon}
            alt=""
          />
          <Link to={"/"}>
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>

        <div className="nav__middle flex__div">
          <div className="search__box flex__div">
            <input type="text" placeholder="Search" />
            <img src={search_icon} alt="" />
          </div>
        </div>

        <div className="nav__right flex__div">
          <img src={upload_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notification_icon} alt="" />
          <img className="user__icon" src={profile_icon} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
