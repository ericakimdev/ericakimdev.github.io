// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#6c5b7b, #6c5b7b",
  firstName: "Erica",
  middleName: "",
  lastName: "Kim",
  message: " Hello, my name is Erica. I am a Software Developer. ",
  icons: [
    {
      image: "fas fa-envelope-square",
      url: `mailto:ericakim0601@gmail.com`,
    },
    {
      image: "fa-github-square",
      url: "https://github.com/ericakimcanada",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/erica-kim-09a379173/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ericakim_photo2.jpg"),
  imageSize: 300,
  message:
    "I'm an enthusiastic, responsible and hard working IT person. Being worked for different projects helped me to adopt to the changes quickly. My goal is to pursue my passion within the field of software engineering.",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ericakimcanada",
  reposLength: 4,
  specificRepos: ["mlworbo", "goodmeals"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "SQL", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 }
  ],
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'BUCKLAND - Junior Application Developer',
      companylogo: require('../assets/img/buckland.png'),
      date: 'May 2020 – August 2020',
    },
    {
      role: 'PulseInfoframe - Software Developer Co-op',
      companylogo: require('../assets/img/pulse.png'),
      date: 'January – April 2019, September – December 2019',
    },
    {
      role: 'Ibbotson Associates Japan (Morningstar) - Data Analyst',
      companylogo: require('../assets/img/morningstart.png'),
      date: 'December 2009 – September 2015',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, experiences };
