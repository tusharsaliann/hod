import React from 'react';
import './App.css';
import hod from './assets/hod.png'; // Import the image

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <div id="home" className="container">
        <div className="profile-container">
          <img src={hod} alt="Profile" className="hod" />
          <div className="info">
            <h1>Parashuram D Talwar</h1>
            <p>Head of Computer Science & Engineering Department</p>
            
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <h2>About Parashuram D Talwar</h2>
        <p>Parashuram D Talwar is an accomplished educator and the current Head of the Computer Science and Engineering Department at Karnataka (Govt) Polytechnic, Mangalore. With a robust academic background, he holds both a Bachelor of Technology (BTech) and Master of Technology (MTech) in Computer Science and Engineering. His academic journey reflects his commitment to gaining deep technical expertise and staying at the forefront of the ever-evolving field of computer science.

Mr. Talwar’s teaching career began at a Women's Polytechnic, where he laid the foundation for many students' careers in technology. His passion for teaching and his ability to simplify complex concepts quickly earned him recognition as a dedicated and effective educator. After spending several years at the Women's Polytechnic, he transitioned to Karnataka (Govt) Polytechnic, Mangalore, where he has continued to nurture the next generation of technologists.

In his current role as Head of the Department, Mr. Talwar oversees academic programs, mentors faculty, and guides students in achieving academic and professional success. He is deeply committed to creating an environment where students not only learn the theoretical aspects of computer science but also gain practical skills that are vital in the modern tech industry.

Mr. Talwar’s expertise lies in programming, with a strong focus on languages such as Python and Java, which he teaches to the students in the department. His approach to teaching emphasizes hands-on experience, encouraging students to engage with real-world problems and develop solutions using the latest technologies.

His leadership at Karnataka (Govt) Polytechnic, Mangalore, has been instrumental in ensuring the department remains a leader in technological education. Mr. Talwar’s vision is to equip students with the skills and knowledge necessary to thrive in the fast-paced and competitive world of technology.

Beyond his teaching and leadership responsibilities, Parashuram D Talwar is known for his mentorship. He regularly engages with students to offer guidance on career paths, research opportunities, and emerging trends in the tech field. His commitment to student success and his passion for the subject make him a highly respected figure in the academic community.

</p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>If you wish to reach Parashuram D Talwar, feel free to contact him:</p>
        <p><strong>Phone:</strong>+91 9448104224</p>
        <p><strong>Location:</strong> Mangalore, India</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Karnataka (Govt) Polytechnic, Mangalore. All rights reserved.</p>
        <p>Designed by tushar</p>
      </footer>
    </div>
  );
}

export default App;


