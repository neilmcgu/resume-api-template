class Resume {
    constructor(name, title, email, phone, education, summary, skills, experience, projects, socials) {
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

    addWorkExperience(experience = {
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: null,
        summary: [],
    }){
        this.experience.push(experience);
    }

    addProject(project = {
        title: '',
        description: '',
        link: '',
    }){
        this.projects.push(project);
    }

    addSkill(skill = ''){
        this.skills.push(skill);
    }

    addSocial(social = ''){
        this.socials.push(social);
    }

    addEducation(education = {
        school: '',
        location: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: null,
    }){
        this.education.push(education);
    }
}

module.exports = Resume;

const example = new Resume()

example.name = 'Bob Coder'
example.title = 'Software Engineer'
example.email = 'bob@coder.com'
example.phone = 6105555555
example.education = [
    {
        school: 'University of Pennsylvania',
        location: 'Philadelphia, PA',
        degree: 'Bachelor of Arts',
        major: 'Economics',
        startDate: '2014-09-01',
        endDate: '2018-05-01',
    }
]
example.summary = "Creative, detail-oriented, software engineer with a deep interest in AI. Proven track record of creating and implementing successful front and back end web applications. Looking to bring my skills to a tech company with global reach."
example.skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'PostgreSQL',
    'HTML',
    'CSS',
    'Bootstrap',
    'Git',
    'GitHub',
    'Heroku',
    'Netlify',
    'REST API',
    'Responsive Design',
    'Agile',
    'Scrum',
    'Jira',
]
example.experience = [
  {
    title: "Software Engineer",
    company: "100 Devs",
    location: "San Francisco, CA",
    startDate: "2020-10-01",
    endDate: null,
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
example.projects = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, quam nisl aliquet enim',
        link: 'https://www.google.com',
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, quam nisl aliquet enim',
        link: 'https://www.google.com',
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, quam nisl aliquet enim',
        link: 'https://www.google.com',
    }
]

example.socials = [
    'https://www.linkedin.com',
    'https://www.github.com',
    'https://www.twitter.com',
    'https://www.facebook.com',
]

