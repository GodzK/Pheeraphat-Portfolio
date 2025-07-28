'use client';

import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';

export default function AboutPage() {
  return (
    <>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>As the former vice president of SAMO SIT, I have experience working with cross-functional teams and organizing activities for SIT KMUTT students. I recently completed the Google Project Management Career Certificate,</p>
        <p>which covers traditional and Agile project management. My intern roles as a software developer and UX researcher have refined my technical and user-centered design skills. Additionally, participating in Hackathons and Startup Competitions has enhanced my creativity, solution development, and product creation abilities</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">Hi My name is Pheeraphat Dherachaisuphakij ( PHEE )</h3>
        <p className="about-text">I&apos;m Interested in Product Management , Business , UX and Tech 🧑‍💻</p>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Image src="https://i.postimg.cc/4389jZkP/icon-design.png" alt="icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Design</h4>
              <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png" alt="icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">High-quality development of sites at the professional level.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image src="https://i.postimg.cc/xjLdzYxZ/icon-app.png" alt="icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">Professional development of applications for iOS and Android.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image src="https://i.postimg.cc/0NL8zHpx/icon-photo.png" alt="icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">I make high-quality photos of any category at a professional level.</p>
            </div>
          </li>
        </ul>
      </section>

      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <IoCloseOutline size={24} />
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <Image src="https://i.postimg.cc/zGDHfn3G/avatar-1.png" alt="Daniel Lewis" width={80} height={80} data-modal-img />
            </figure>

            <Image src="https://i.postimg.cc/mZ00RwX7/icon-quote.png" alt="quote icon" width={32} height={32} />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>Daniel Lewis</h4>
            <time dateTime="2023-06-14">14 June, 2023</time>

            <div className="modal-text" data-modal-text>
              <p>Richard was hired to create a corporate identity. It&apos;s modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 