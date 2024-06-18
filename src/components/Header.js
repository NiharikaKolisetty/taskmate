// import "./headerCss.css";
// import Logo from "../assets/logo.png";
// const Header = () => {
//   return (
//     <>
//       <div className="header">
//         <img alt=" " src={Logo}></img>
//         <h1>This is Header section</h1>
//         <div className="links">
//           <a href="/">Link</a>
//           <a href="/">Link</a>
//           <a href="/">Link</a>
//           <a href="/">Link</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

// mutliple components & props 
import Logo from "../assets/logo.png";
import "./headerCss.css";
const Header = () => {
  return (
    <div>
        <div className="header-nav "> 
        <img src={Logo} alt=""/>
        <a href="/">Home</a>
        </div>
     
    </div>
  )
}

export default Header

