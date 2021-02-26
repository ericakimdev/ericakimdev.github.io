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
  message: " A Full-Stack Developer ",
  icons: [
    {
      image: "fas fa-envelope-square",
      url: `mailto:ericakimdev@gmail.com`,
    },
    {
      image: "fa-github-square",
      url: "https://github.com/ericakimdev",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ericakimdev/",
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
  heading: "Personal Projects",
  gitHubUsername: "ericakimdev",
  reposLength: 4,
  specificRepos: ["goodmeals", "mlworbo", "sprintapp"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 75 },
    { name: "JavaScript", value: 70 },
    { name: "HTML/CSS", value: 65 },
    { name: "C#", value: 70 },
    { name: "SQL", value: 75 },
    { name: "AngularJS", value: 70 },
    { name: "React", value: 65 },
    { name: "Spring", value: 65 }
  ],
  softSkills: [
    { name: "Korean", value: 100 },
    { name: "Japanese", value: 90 }
  ],
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Junior Application Developer at BUCKLAND',
      companylogo: require('../assets/img/buckland.png'),
      date: 'May 2020 – Aug 2020',
    },
    {
      role: 'Software Developer Co-op at PulseInfoframe',
      companylogo: require('../assets/img/pulse.png'),
      date: 'Jan – Apr 2019 & Sep – Dec 2019',
    },
    {
      role: 'Data Analyst at Ibbotson Associates Japan (Morningstar)',
      companylogo: require('../assets/img/morningstart.png'),
      date: 'Dec 2009 – Sep 2015',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, experiences };
