import Logo from "../assets/logo.png";
import "./headerCss.css";

const Header = () => {
  return (
    <div>
      <div className="header-nav">
        <img src={Logo} alt="Logo" />
        <a href="/">Home</a>
      </div>
    </div>
  );
}

export default Header;
