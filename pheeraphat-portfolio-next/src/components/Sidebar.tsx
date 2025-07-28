'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`sidebar ${isExpanded ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yfEkQ4mM1xl--BYtofPNwQ.jpeg" alt="avatar" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Pheeraphat Dherachaisuphakij">
            Pheeraphat <br />Dherachaisuphakij
          </h1>
          <p className="title">Project manager</p>
        </div>

        <button className="info-more-btn" onClick={toggleSidebar} data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down" suppressHydrationWarning={true}></ion-icon>
        </button>
      </div>

      <div className="sidebar-info-more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline" suppressHydrationWarning={true}></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:pheeraphat2547@gmail.com" className="contact-link">pheeraphat2547@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline" suppressHydrationWarning={true}></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:0816443069" className="contact-link">081-644-3069</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline" suppressHydrationWarning={true}></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2004-04-28">April 28, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline" suppressHydrationWarning={true}></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Thailand , Bangkok Sathorn 27</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook" suppressHydrationWarning={true}></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter" suppressHydrationWarning={true}></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram" suppressHydrationWarning={true}></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
} 