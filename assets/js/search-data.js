// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blogs",
          title: "Blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Papers, preprints and works in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching Assistant and pedagogical experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-the-geometry-of-uncertainty-what-missing-data-teaches-us-about-truth",
        
          title: "The Geometry of Uncertainty: What Missing Data Teaches Us About Truth",
        
        description: "A reflection on Middle Censoring, Bayesian priors and the philosophical weight of the unobserved",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/uncertainty-structure/";
          
        },
      },{id: "post-the-geometry-of-silence-five-days-on-the-kedarkantha-trek",
        
          title: "The Geometry of Silence: Five Days on the Kedarkantha Trek",
        
        description: "A December summit push without internet, viewed through the lens of math, stats and existential philosophy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/kedarkantha-trek/";
          
        },
      },{
        id: 'social-Contact email',
        title: 'Contact email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:anshulsingh2316@gmail.com", "_blank");
        },
      },{
        id: 'social-Linkedin Profile',
        title: 'Linkedin profile',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/anshul-singh-96864031b", "_blank");
        },
      },{
        id: 'social-ORCID',
        title: 'Orcid',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-1175-5772", "_blank");
        },
      },{
        id: 'social-Github Profile',
        title: 'Github profile',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anshulsingh-web", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
