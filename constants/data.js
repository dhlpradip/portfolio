import TechKunjaLogo from "../public/tech-kunja.jpeg";
import ClamphookLogo from "../public/clamphook.png";
import TraversunLogo from "../public/traversun.png";
import Hacked from "../public/hacked.png";
import GithubLogo from "../public/github.png";

const userData = {
  githubUsername: "dhlpradip",
  name: "Pradeep Dahal",
  avatarUrl: "/avatar.png",
  email: "erpradeepdahal@gmail.com",
  phone: "+977 9862672724",
  address: "Kathmandu, Nepal.",
  techStack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "NextJS",
    "React Native",
    "Redux",
    "TailwindCSS",
    "Bootstrap",
    "C",
    "C++",
    "Python",
  ],
  otherSkills: [
    "Good interpersonal skill",
    "Values other's efforts",
    "Can lead a team well",
    "Can communicate in multiple language",
    "Understands and appreciate good humor",
    "Sarcasm",
  ],
  education: [
    {
      school: "Tribhuvan University, Institute of Engineering",
      level: "Computer Engineering",
      duration: "2015-2019",
    },
    {
      school: "Siddhartha Boarding HSS",
      level: "+2",
      duration: "2012-2014",
    },
    {
      school: "Janata HSS",
      level: "Schooling",
      duration: "2001-2012",
    },
  ],
  projects: [
    {
      title: "Clamphook",
      link: "https://clamphook.com",
      desc: "A entrance preparation website based on Nepal",
      imgUrl: ClamphookLogo,
    },
    {
      title: "Traversun",
      link: "https://traversun.com",
      desc: "A website for travellers to book Hotels, Restaurants and Vehicles",
      imgUrl: TraversunLogo,
    },
    {
      title: "Portfolio",
      link: "https://gitlab.com/dhlpradip/portfolio",
      desc: "The place you currently are in",
      imgUrl: Hacked,
    },
    {
      title: "Nepali Character Recognition using Deep CNN",
      link: "https://github.com/dhlpradip/Handwritten-Nepali-Character-Recognition-using-Deep-CNN",
      desc: "A Computer Vision project me and my team completed as our final project of Engineering",
      imgUrl: Hacked,
    },
    {
      title: "Attendance App for Tech Kunja",
      link: "https://attendance.techkunja.com",
      desc: "Employee attendance platform for tech kunja",
      imgUrl: Hacked,
    },
    {
      title: "Product Invoicing System",
      link: "https://github.com/dhlpradip/Simple-Product-Invoicing-System-using-ReactJS",
      desc: "A simple inventory management and product invoicing system application I created during internship",
      imgUrl: Hacked,
    },
    {
      title: "Simple Blog App",
      link: "https://github.com/dhlpradip/Simple-ReactJS-Blog",
      desc: "A simple blog app based on The Net Ninja's Youtube tutorial I created during internship",
      imgUrl: Hacked,
    },
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "Tech Kunja",
      logo: TechKunjaLogo,
      year: "Nov 2021 - Present",
      companyLink: "https://techkunja.com",
      desc: "Worked as the primary frontend developer for projects such as Hotel/Restaurant booking and vehicle management and dispatch system.",
    },
    {
      title: "Software Developer",
      company: "Clamphook",
      logo: ClamphookLogo,
      year: "May-Jul 2021",
      companyLink: "https://clamphook.com",
      desc: "Worked with a competent team on a entrance and competitive examination preparation site. Created UI elements according to FIGMA designs",
    },
    {
      title: "Software Development Intern",
      company: "Tech Kunja",
      logo: TechKunjaLogo,
      year: "Feb-May 2021",
      companyLink: "https://techkunja.com",
      desc: "Learned about frontend web and mobile development with ReactJS and React Native. Worked on projects such as personal blog, inventgory management, and an attendance system application.",
    },
  ],
};

export default userData;
