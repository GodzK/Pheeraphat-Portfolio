'use client';

export default function ResumePage() {
  return (
    <>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">King Mongkut's University of Technology Thonburi</h4>
            <span>2022 - present</span>
            <p className="timeline-text">Bachelor of Science in Information Technology</p>
            <p className="timeline-text">Recipient of Saad-Lueang-RueangRung Creativity and Innovation Scholarship with 100% tuition fee waiver and monthly stipends supported, KMUTT Academic year 2023</p>
            <p className="timeline-text">Recipient of Chiaranaiphet Scholarship, KMUTT Academic year 2023</p>
            <p className="timeline-text">SIT Outstanding Accomplishment Scholarship</p>
            <p className="timeline-text">Former Vice President of SAMO SIT</p>
            <p className="timeline-text">Beta Microsoft Learn student Ambassadors and Google Developer Student Club (Core Team)</p>
            <p className="timeline-text">Member of SIT MUSIC and SIT PHOTO CLUB</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Sarasas Pittaya</h4>
            <span>2009 - 2021</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Saeng Aroon School</h4>
            <span>2003 - 2008</span>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">UX Researcher Intern, UX Association</h4>
            <span>June - July 2024</span>
            <p className="timeline-text">During this internship, I gained hands-on experience in conducting user research for various projects. I was responsible for designing and implementing user studies, analyzing data, and presenting findings to the team. This role allowed me to grow my understanding of user behavior and refine my skills in UX research methodologies.</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Developer Intern, Innovasive Co, Ltd</h4>
            <span>June - July 2023</span>
            <p className="timeline-text">During my internship at Innovasive Co, Ltd, I was actively involved in the front-end development of numerous projects. I was responsible for implementing visual elements that users interact with in web applications, using a variety of programming languages and frameworks such as HTML, CSS, and JavaScript. This role enabled me to enhance my problem-solving skills and deepen my understanding of user-interface design.</p>
          </li>
        </ol>
      </section>
    </>
  );
} 