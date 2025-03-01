import { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiList, BiX, BiTwitterX, BiFacebook, BiInstagram, BiLinkedin } from "react-icons/bi";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <header className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Company</h1><span>.</span>
        </Link>
        
        <nav className={`navmenu ${isMobileNavOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li className="dropdown">
              <Link to="/about">
                <span>About</span> <BiChevronDown className="toggle-dropdown" />
              </Link>
              <ul>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Deep Dropdown</span> <BiChevronDown className="toggle-dropdown" />
                  </Link>
                  <ul>
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                    <li><Link to="#">Deep Dropdown 3</Link></li>
                    <li><Link to="#">Deep Dropdown 4</Link></li>
                    <li><Link to="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none" onClick={toggleMobileNav}>
            {isMobileNavOpen ? <BiX /> : <BiList />}
          </i>
        </nav>

        <div className="header-social-links">
          <a href="#" className="twitter"><BiTwitterX /></a>
          <a href="#" className="facebook"><BiFacebook /></a>
          <a href="#" className="instagram"><BiInstagram /></a>
          <a href="#" className="linkedin"><BiLinkedin /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
