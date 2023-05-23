class Resume {
  constructor(
    name,
    title,
    email,
    phone,
    education,
    summary,
    skills,
    experience,
    projects,
    socials
  ) {
    this.name = name;
    this.title = title;
    this.email = email;
    this.phone = phone;
    this.education = education;
    this.summary = summary;
    this.skills = skills;
    this.experience = experience;
    this.projects = projects;
    this.socials = socials;
  }

  addWorkExperience(
    experience = {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: null,
      summary: [],
    }
  ) {
    this.experience.push(experience);
  }

  addProject(
    project = {
      title: "",
      description: "",
      link: "",
    }
  ) {
    this.projects.push(project);
  }

  addSkill(skill = "") {
    this.skills.push(skill);
  }

  addSocial(social = "") {
    this.socials.push(social);
  }

  addEducation(
    education = {
      school: "",
      location: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: null,
    }
  ) {
    this.education.push(education);
  }

  contactInformation() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      socials: this.socials,
    };
  }
}

const resume = new Resume();

resume.name = "Bob Coder";
resume.title = "Software Engineer";
resume.email = "bob@coder.com";
resume.phone = 6105555555;
resume.education = [
  {
    school: "University of Pennsylvania",
    location: "Philadelphia, PA",
    degree: "Bachelor of Arts",
    major: "Economics",
    startDate: "2014-09-01",
    endDate: "2018-05-01",
  },
];
resume.summary =
  "Creative, detail-oriented, software engineer with a deep interest in AI. Proven track record of creating and implementing successful front and back end web applications. Looking to bring my skills to a tech company with global reach.";
resume.skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "HTML",
  "CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Heroku",
  "Netlify",
  "REST API",
  "Responsive Design",
  "Agile",
  "Scrum",
  "Jira",
];
resume.experience = [
  {
    title: "Software Engineer",
    company: "100 Devs",
    location: "San Francisco, CA",
    startDate: "2020-10-01",
    endDate: "Present",
    summary: [
      "Built a full-stack web application using React, Node.js, and PostgreSQL",
      "Implemented a REST API to handle CRUD operations",
      "Created a responsive UI using React and Bootstrap",
    ],
  },
  {
    title: "Software Engineer",
    company: "200 Devs",
    location: "San Francisco, CA",
    startDate: "2019-01-01",
    endDate: "2020-09-30",
    summary: [
      "Built a full-stack web application using React, Node.js, and PostgreSQL",
      "Implemented a REST API to handle CRUD operations",
      "Created a responsive UI using React and Bootstrap",
    ],
  },
  {
    title: "Software Engineer",
    company: "300 Devs",
    location: "San Francisco, CA",
    startDate: "2018-01-01",
    endDate: "2018-12-31",
    summary: [
      "Built a full-stack web application using React, Node.js, and PostgreSQL",
      "Implemented a REST API to handle CRUD operations",
      "Created a responsive UI using React and Bootstrap",
    ],
  },
];
resume.projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, quam nisl aliquet enim",
    link: "https://www.google.com",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, quam nisl aliquet enim",
    link: "https://www.google.com",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, quam nisl aliquet enim",
    link: "https://www.google.com",
  },
];

resume.socials = [
  {
    username: "LinkedIn",
    link: "https://www.linkedin.com",
  },
  {
    username: "Github",
    link: "https://www.github.com",
  },
  {
    username: "Facebook",
    link: "https://www.facebook.com",
  },
];

module.exports = resume;
