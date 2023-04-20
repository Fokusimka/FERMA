import React from 'react';
import logo from './images/icon.svg';
import appStore from './images/appStore.svg'
import inst from './images/inst.svg';
import vk from './images/vk.svg';
import ok from './images/ok.svg';
import fb from './images/fb.svg';
import './App.css';
import Mobile from './components/mobile';

function App() {

  const socialArray = [
    { alt: 'inst', src: inst, href: 'https://www.instagram.com' },
    { alt: 'vk', src: vk, href: 'https://www.vk.com'},
    { alt: 'ok', src: ok, href: 'https://www.ok.ru' },
    { alt: 'fb', src: fb, href: 'https://www.facebook.com' }
  ]

  return (
    <div className="background">
      <div className="container">
        <div className="layout">
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
          </header>
          <body className="content">
            <div className="leftContent">
              <h1>Lorem - <br/>ipsum dolor sit amet, consectetuer <br/>adipiscing elit.</h1>
              <ul>
                <li>Aenean commodo ligula eget dolor</li>
                <li>Aenean massa.</li>
                <li>Donec pede justo, fringilla vel, aliquet</li>
                <li>In enim justo, rhoncus ut, imperdiet <br/>Integer tincidunt.</li>
              </ul>
              <a href='https://www.apple.com/ru/app-store/' className='appStore'>
                <img src={appStore} className="appStoreIcon" alt="appStore" />
              </a>
              <p>Quisque rutrum</p>
            </div>
            <div className="rightContent">
              <Mobile />
            </div>
          </body>
          <footer className="footer">
            <span>Etiam ultricies nisi vel augue</span>
            <div className="social">
              {socialArray.map((social, index) => {
                return (
                  <a href={social.href}>
                    <img src={social.src} className="socialItem" alt={social.alt} />
                  </a>
                )
              })}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
