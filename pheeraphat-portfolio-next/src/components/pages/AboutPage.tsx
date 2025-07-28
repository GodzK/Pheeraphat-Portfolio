'use client';

import { IoCloseOutline } from 'react-icons/io5';
import { FaProjectDiagram, FaChartLine, FaCheckCircle, FaSearch } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>I&apos;m passionate about Product Management, Business Development, Quality Assurance, and UX Research.</p>
        <p>As the former vice president of SAMO SIT, I have experience working with cross-functional teams and organizing activities for SIT KMUTT students. I recently completed the Google Project Management Career Certificate,</p>
        <p>which covers traditional and Agile project management. My intern roles as a software developer and UX researcher have refined my technical and user-centered design skills. Additionally, participating in Hackathons and Startup Competitions has enhanced my creativity, solution development, and product creation abilities</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I&apos;m Interested In</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <FaProjectDiagram size={40} style={{ color: '#daab2dff' }} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Product Management</h4>
              <p className="service-item-text">Leading cross-functional teams to deliver user-focused products with strategic planning and Agile methodologies.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FaChartLine size={40} style={{ color: '#daab2dff' }} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Business Development</h4>
              <p className="service-item-text">Driving growth through strategic partnerships, market analysis, and innovative solutions.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FaCheckCircle size={40} style={{ color: '#daab2dff' }} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Quality Assurance</h4>
              <p className="service-item-text">Ensuring product excellence through rigorous testing and process optimization.</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FaSearch size={40} style={{ color: '#daab2dff' }} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">UX Research</h4>
              <p className="service-item-text">Conducting user-centered research to design intuitive and impactful user experiences.</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}