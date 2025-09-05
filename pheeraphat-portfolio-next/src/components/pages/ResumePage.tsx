'use client';

import { useState } from 'react';
import Image from 'next/image';
import innovasive from "../../../public/innovasive.png"
import scb1 from "../../../public/scb1.jpg"
import scb2 from "../../../public/scb2.jpg"
import skd1 from "../../../public/skd1.jpg"
import skd2 from "../../../public/sdk2.jpg"
import skd3 from "../../../public/skd3.jpg"
import skd4 from "../../../public/skd4.jpg"
import uxasso from "../../../public/uxasso.jpg"

export default function ResumePage() {
  // Gallery state for each experience
  const [skooldioIdx, setSkooldioIdx] = useState(0);
  const [scbIdx, setScbIdx] = useState(0);
  const skooldioImages = [
    skd1,skd2,skd3,skd4];
  const scbImages = [
    scb1,scb2];

  // สไตล์ที่ใช้ร่วมกันสำหรับ logo container
  const logoContainerStyle = {
    borderRadius: 12,
    border: '2.5px solid #fff',
    boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
    overflow: 'hidden',
    flexShrink: 0,
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px' // เพิ่ม padding เพื่อความสมดุล
  };

  // สไตล์สำหรับโลโก้แนวนอน (Skooldio, SCB)
  const horizontalLogoStyle = {
    width: '5rem', // 80px
    height: '3rem', // 48px
  };

  // สไตล์สำหรับโลโก้สี่เหลี่ยมจัตุรัส (UX, Innovasive)
  const squareLogoStyle = {
    width: '4.5rem', // 72px
    height: '4.5rem', // 72px
  };

  return (
    <>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* PDF Preview Section */}
      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <a href="/resume.pdf" download className="form-btn" style={{ minWidth: 120, textAlign: 'center' }}>Download PDF</a>
        </div>
        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          width="100%"
          height="400px"
          style={{ border: '1px solid #444', borderRadius: 12, maxWidth: 600, margin: 'auto', display: 'block' }}
        ></iframe>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <span role="img" aria-label="book" style={{ fontSize: 24 }}>📚</span>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">King Mongkut&apos;s University of Technology Thonburi</h4>
            <span>2022 - present</span>
            <p className="timeline-text">Bachelor of Science in Information Technology</p>
            <p className="timeline-text">Recipient of Saad-Lueang-RueangRung Creativity and Innovation Scholarship with 100% tuition fee waiver and monthly stipends supported, KMUTT Academic year 2023</p>
            <p className="timeline-text">Recipient of Chiaranaiphet Scholarship, KMUTT Academic year 2023</p>
            <p className="timeline-text">SIT Outstanding Accomplishment Scholarship</p>
            <p className="timeline-text">Former Vice President of SAMO SIT</p>
            <p className="timeline-text">Beta Microsoft Learn student Ambassadors and Google Developer Student Club (Core Team)</p>
            <p className="timeline-text">Member of SIT MUSIC and SIT PHOTO CLUB</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <span role="img" aria-label="briefcase" style={{ fontSize: 24 }}>💼</span>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {/* Skooldio */}
          <li className="timeline-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', padding: '1rem 0' }}>
            {/* LOGO */}
            <div style={{ ...logoContainerStyle, ...horizontalLogoStyle }}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_znZ5Zxs5H0Ujjg3RnuH_P_ZsY3iZ4TjIdA&s"
                alt="Skooldio logo"
                width={80}
                height={48}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            {/* GALLERY */}
            <div style={{ flexShrink: 0, width: '13.75rem', maxWidth: '90vw', marginBottom: 8, position: 'relative' }}>
  <Image
    src={skooldioImages[skooldioIdx]}
    alt={`Skooldio ${skooldioIdx + 1}`}
    width={120}
    height={90}
    style={{ width: '100%', height: '7.5rem', borderRadius: 12, border: '1.5px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', objectFit: 'cover' }}
  />
  <button
    onClick={() => setSkooldioIdx((skooldioIdx - 1 + skooldioImages.length) % skooldioImages.length)}
    style={{
      position: 'absolute',
      top: '50%',
      left: 4,
      transform: 'translateY(-50%)',
      background: '#222b',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: 24,
      height: 24,
      fontSize: 14,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >‹</button>
  <button
    onClick={() => setSkooldioIdx((skooldioIdx + 1) % skooldioImages.length)}
    style={{
      position: 'absolute',
      top: '50%',
      right: 4,
      transform: 'translateY(-50%)',
      background: '#222b',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: 24,
      height: 24,
      fontSize: 14,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >›</button>
  <div style={{ textAlign: 'center', marginTop: 2 }}>
    {skooldioImages.map((_, i) => (
      <span key={i} style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: i === skooldioIdx ? '#ffd700' : '#ccc', margin: '0 1px' }}></span>
    ))}
  </div>
</div>
            {/* CONTENT */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <h4 className="h4 timeline-item-title">Business Development, Skooldio (Internship)</h4>
              <span>มิ.ย. 2025 - ปัจจุบัน · 2 เดือน</span>
              <ul style={{ margin: '8px 0 0 16px', color: 'white' }}>
                <li>📌 Secured 2nd Runner-Up in the Skooldio Internship Hackathon 2025 by presenting a new B2B automation workflow using n8n.</li>
                <li>📌 Led workshop operations for DevOps Transformation and Full Stack Testing.</li>
                <li>📌 Assisted in Product Management Bootcamp #8.</li>
                <li>📌 Helped plan new technology courses for Skooldio.</li>
              </ul>
            </div>
          </li>

          {/* SCB Techhub */}
          <li className="timeline-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', padding: '1rem 0' }}>
            {/* LOGO */}
            <div style={{ ...logoContainerStyle, ...horizontalLogoStyle }}>
              <Image
                src="https://www.infoquest.co.th/dxt-content/uploads/2020/03/20200323_PRG_SCB_FC_AbbreviatedLogo_Horizontal_PurpleBG-scaled.jpg"
                alt="SCB logo"
                width={80}
                height={48}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            {/* GALLERY */}
            <div style={{ flexShrink: 0, width: '13.75rem', maxWidth: '90vw', marginBottom: 8, position: 'relative' }}>
  <Image
    src={scbImages[scbIdx]}
    alt={`SCB Techhub ${scbIdx + 1}`}
    width={120}
    height={90}
    style={{ width: '100%', height: '7.5rem', borderRadius: 12, border: '1.5px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', objectFit: 'cover' }}
  />
  <button
    onClick={() => setScbIdx((scbIdx - 1 + scbImages.length) % scbImages.length)}
    style={{
      position: 'absolute',
      top: '50%',
      left: 4,
      transform: 'translateY(-50%)',
      background: '#222b',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: 24,
      height: 24,
      fontSize: 14,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >‹</button>
  <button
    onClick={() => setScbIdx((scbIdx + 1) % scbImages.length)}
    style={{
      position: 'absolute',
      top: '50%',
      right: 4,
      transform: 'translateY(-50%)',
      background: '#222b',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: 24,
      height: 24,
      fontSize: 14,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >›</button>
  <div style={{ textAlign: 'center', marginTop: 2 }}>
    {scbImages.map((_, i) => (
      <span key={i} style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: i === scbIdx ? '#ffd700' : '#ccc', margin: '0 1px' }}></span>
    ))}
  </div>
</div>
            {/* CONTENT */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <h4 className="h4 timeline-item-title">Quality Assurance, SCB Tech X (Internship)</h4>
              <span>Summer 2024</span>
              <ul style={{ margin: '8px 0 0 16px', color: 'white' }}>
                <li>📌 Contributed to agile ceremonies and sprint planning in product squads.</li>
                <li>📌 Supported user research and requirements gathering for mobile banking features.</li>
              </ul>
            </div>
          </li>

          {/* Innovasive (PDF) */}
          <li className="timeline-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', padding: '1rem 0' }}>
            {/* LOGO */}
            <div style={{ ...logoContainerStyle, ...squareLogoStyle }}>
              <Image
                src={innovasive}
                alt="Innovasive logo"
                width={72}
                height={72}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            {/* PDF PREVIEW */}
            <div style={{ flexShrink: 0, width: '13.75rem', maxWidth: '90vw', marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              
              <a href="/innovasive.pdf" target="_blank" rel="noopener noreferrer" className="form-btn" style={{ marginTop: 2 }}>ดูไฟล์ PDF</a>
            </div>
            {/* CONTENT */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <h4 className="h4 timeline-item-title">Product Owner, Innovasive (Internship)</h4>
              <span>2023 - 2024</span>
              <ul style={{ margin: '8px 0 0 16px', color: 'white' }}>
                <li>📌 Worked closely with the Product Manager in gathering and refining product requirements,
collaborating with stakeholders, and gaining an understanding of the work processes </li>
                <li>📌 Assisted Product Owners in Design Flow , Create User Stories and Sprint Planning for UX/UI Designer, Business Analyst, QA, and Developer Team</li>
                 <li>📌 Participated actively in grooming meetings and sprint planning, collaborating with the team to refine
user stories, prioritize tasks, and set clear sprint goals </li>
              </ul>
            </div>
          </li>

          {/* UX Association (PDF) */}
          <li className="timeline-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', padding: '1rem 0' }}>
            {/* LOGO */}
            <div style={{ ...logoContainerStyle, ...squareLogoStyle }}>
              <Image
                src={uxasso}
                alt="UX Association logo"
                width={72}
                height={72}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            {/* PDF PREVIEW */}
            <div style={{ flexShrink: 0, width: '13.75rem', maxWidth: '90vw', marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          
              <a href="/ux.pdf" target="_blank" rel="noopener noreferrer" className="form-btn" style={{ marginTop: 2 }}>ดูไฟล์ PDF</a>
            </div>
            {/* CONTENT */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <h4 className="h4 timeline-item-title">UX Researcher, UX Association</h4>
              <span>2023</span>
              <ul style={{ margin: '8px 0 0 16px', color: 'white' }}>
                <li>📌 Utilizing Usability Testing through interviews with participants Responsible for UX measurement and analysis </li>
                <li>📌 Conducted user research, designed and implemented user studies, analyzed data, and presented findings.</li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      {/* Media Queries สำหรับ Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .timeline-item > div {
            width: 100%;
            max-width: 100%;
            text-align: center;
          }
          .timeline-item .form-btn {
            width: 100%;
            max-width: 200px;
          }
        }
        @media (max-width: 480px) {
          .timeline-item > div:first-child {
            width: 4rem !important;
            height: 2.5rem !important;
          }
          .timeline-item > div:nth-child(2) {
            width: 100% !important;
            max-width: 100% !important;
          }
          .timeline-item img, .timeline-item embed {
            height: 6rem !important;
          }
        }
      `}</style>
    </>
  );
}