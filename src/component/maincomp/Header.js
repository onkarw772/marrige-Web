
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <section id="header">
        <nav class="navbar navbar-default navbar-fixed-top" style={{ backgroundColor: 'grey' }}>
          <div class="container">
            <a className="navbar-brand heading_tag" href="/">
              Marriage
            </a>
            <div>



            </div>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
              id="bs-example-navbar-collapse-1"
            >
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link class="tag_menu" to="/">HOME</Link>
                    </li>

                <li>
                  <Link class="tag_menu" to="/about">ABOUT</Link> 
                   </li>

                <li>
                  <Link class="tag_menu" to="/blog">BLOG</Link>
                </li>
                <li>
                  <Link class="tag_menu" to="/testimonial">TESTIMONIAL</Link> 
                  </li>

                <li>
                  <Link class="tag_menu" to="/gallery">GALLERY</Link>
                   </li>

                <li>
                  <Link class="tag_menu" to="/service">SERVICES</Link> 
                  </li>

                <li>
                  <Link class="tag_menu" to="/team">TEAM</Link>
                   </li>

                <li>
                  <Link class="tag_menu" to="/contact">CONTACT</Link>
                  </li>

                <li class="dropdown">
                  <a class="tag_menu" href="#" data-toggle="dropdown" role="button" aria-expanded="false">MORE<span class="caret"></span></a>
                  <ul class="dropdown-menu drop_1" role="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blogpost</a></li>
                    <li><a href="detail.html">Detail</a></li>
                  </ul>
                </li>
                {/* Add more menu items here */}
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section id="header_mini">
        <div className="container">
          <div className="row">
            <div className="header_mini clearfix">
              <h1>
                <a className="heading_tag" href="index.html">
                  Marriage
                </a>
              </h1>
            </div>
            <button
              className={`menu-toggle btn btn-warning btn-lg toggle ${isMenuOpen ? 'active' : ''
                }`}
              onClick={toggleMenu}
            >
              <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} /> {/* Update Font Awesome class */}
            </button>
            <div id="navbar-menu" className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp" >
                <div>
                  <li>
                    <a className="tag_menu active_tab" href="index.html">HOME</a>                  </li>
                  <li>
                    <a className="tag_menu" href="about.html">ABOUT</a>                  </li>
                  <li>
                    <a className="tag_menu" href="blog.html">BLOG</a>                  </li>
                  <li>
                    <a className="tag_menu" href="testimonial.html">TESTIMONIAL</a>                  </li>
                  <li>
                    <a className="tag_menu" href="gallery.html">GALLERY</a>                  </li>
                  <li>
                    <a className="tag_menu" href="service.html">SERVICES</a>                  </li>
                  <li>
                    <a className="tag_menu" href="team.html">TEAM</a>                  </li>
                  <li>
                    <a className="tag_menu" href="contact.html">CONTACT</a>                  </li>
                  <li className="dropdown">
                    <a className="tag_menu" href="#" data-toggle="dropdown" role="button" aria-expanded="false">MORE<span className="caret" /></a>
                    <ul className="dropdown-menu drop_1" role="menu">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Blogpost</a></li>
                      <li><a href="detail.html">Detail</a></li>
                    </ul></li></div>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

