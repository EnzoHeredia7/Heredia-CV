import React from 'react';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
        <h1 className='footer_title'>Heredia</h1>
        <ul className='footer_list'>
          <li>
            <a href="#about" className='footer_link'>About</a>
          </li>
          <li>
            <a href="#skills" className='footer_link'>Skills</a>
          </li>
          <li>
            <a href="#education" className='footer_link'>Education</a>
          </li>
          <li>
            <a href="#contact" className='footer_link'>Contact</a>
          </li>
        </ul>
        <div className='footer_social'>
          <a href="https://www.instagram.com/enzoheredia7/" className='footer_social-link' target='_blank' rel='noreferrer'>
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/enzo-ariel-heredia-b764b223b/" className='footer_social-link' target='_blank' rel='noreferrer'>
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/EnzoHeredia7" className='footer_social-link' target='_blank' rel='noreferrer'>
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className='footer_copy'>  &copy; {new Date().getFullYear()} EnzoHeredia. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;
