import React, {useRef, useState, useEffect} from 'react';
import { links } from '../data';
import { social } from '../data';
import logo from '../../src/logo.svg';
import { FaBars} from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks) {
      linksContainer.current.style.height = `${linksHeight}px`
    } else {
      linksContainer.current.style.height = '0px';
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainer}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((soci) => {
            const { id, url, icon } = soci;

            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar