module.exports = {
  siteTitle: 'Chhayansh Purohit | Software Developer | Content Freelancer',
  siteDescription:
    'Chhayansh Purohit is a Software Developer at Amdocs, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Chhayansh Purohit, chhayanshp11, software developer, software engineer, content freelancer, face mask, face mask detection, web developer, java developer, pepper content, jamshedpur, amdocs, bit, mesra',
  siteUrl: 'https://chhayanshp11.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Chhayansh Purohit',
  location: 'Jamshedpur, India',
  email: 'Chhayansh.Purohit@gmail.com',
  github: 'https://github.com/chhayanshp11',
  twitterHandle: '@chhayanshp11',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/chhayanshp11',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/chandrika-deb/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/chhayanshp11',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chhayanshp11',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/chhayanshp11',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};