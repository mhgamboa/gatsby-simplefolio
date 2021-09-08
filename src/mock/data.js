import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Marcus Gamboa | Front-End Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi, My Name is Marcus Gamboa. I graduated from BYU in August 2019 with a degree in Entrepreneural Management.',
  paragraphTwo:
    'After working for a year as an underwriter I decided to leave my job to become a self-taught software developer with FreecodeCamp and The Odin Project.',
  paragraphThree:
    "After having built some projects, I'm now hoping to get a job as a junior developer.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'drum-machine.png',
    title: 'Drum Machine',
    info: 'I made a thing',
    info2: 'It works',
    url: 'https://mgamboa-drum-machine.netlify.app/',
    repo: 'https://github.com/mhgamboa/fcc-drum-machine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'markdown-previewer.png',
    title: 'MarkDown Previewer',
    info: 'You type in text and it comes out the other side.',
    info2: 'Technologies Used: ',
    url: 'https://mgamboa-markdown-previewer.netlify.app/',
    repo: 'https://github.com/mhgamboa/markdown-previewer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calculator.png',
    title: 'Title',
    info: 'Info',
    info2: 'Info2',
    url: 'https://mgamboa-calculator.netlify.app/',
    repo: 'https://github.com/mhgamboa/javascript-calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pomodoro-clock.png',
    title: 'Pomodoro Clock',
    info: 'Still Needs to be added',
    info2: 'Info2 Goes Here.',
    url: '',
    repo: 'https://github.com/mhgamboa/25-plus-five-clock', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/marcus-gamboa',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marcus-gamboa/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mhgamboa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
