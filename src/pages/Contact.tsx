import React from 'react';
import './pages.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';


const Contact: React.FC = () => {
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copied to clipboard!`);
  };
const LinkedInIcon = FaLinkedin as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const GithubIcon = FaGithub as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const EmailIcon = FaEnvelope as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const PhoneIcon = FaPhone as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect</h1>
      <p className="contact-subtext">
        I’m always open to cool projects, coffee, or just a quick hello.
      </p>

      <div className="contact-cards">
        <a
          className="contact-card"
          href="https://www.linkedin.com/in/dhinakaran-chandrasekar-505b17193"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="icon" />
          <span>LinkedIn</span>
        </a>

        <a
          className="contact-card"
          href="https://github.com/DhinakaranChandrasekar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="icon" />
          <span>GitHub</span>
        </a>

        <div
          className="contact-card"
          onClick={() => handleCopy('dhinakaranchandrasekar7@gmail.com', 'Email')}
        >
          <EmailIcon className="icon" />
          <span>Email</span>
        </div>


        <div
          className="contact-card"
          onClick={() => handleCopy('Cant share sorry lol - try the email', 'Phone number')}
        >
          <PhoneIcon className="icon" />
          <span>Phone</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
