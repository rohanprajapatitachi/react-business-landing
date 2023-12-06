import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container">
        <div id="menu">
          <div id="logo">Pay</div>
          <div className="menu-item">HOME</div>
          <div className="menu-item">FEATURES</div>
          <div className="menu-item">DETAILS</div>
          <div className="menu-item">PRICING</div>
          <div className="menu-item">VIDEO</div>
          <div className="menu-item round-btn">LOGIN</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
