import Project from "./OneProjectOverview";

export const Projects = () => {
  const projectsList = [
    {
      title: "Damilsoft",
      srcImage: "../photos/damilsoft.png", // Make sure to add a screenshot here!
      description:
        "A comprehensive management solution for gyms and studios. This full-stack application features a robust Java Spring backend deployed on AWS and a modern React/TypeScript frontend using Material UI. Key features include member management, scheduling, and secure billing.",
      stack: ["React", "TypeScript", "Java Spring", "AWS"],
      liveLink: "https://damilsoft.com", // Replace with your actual link
      githubLink: "https://github.com/damilsoft-team/damilsoft-frontend", // Replace with your actual repo
    },
    {
      title: "Sleep with me",
      srcImage: "../photos/sleepWithMe.png",
      description:
        "Sleep With Me – Experience the ultimate comfort with our premium mattresses! 🌙✨ Our React-powered website, backed by Firebase, ensures a seamless shopping experience. Explore top-quality mattresses designed for perfect sleep. Sleep better, live better! 🛏💤",
      stack: ["React", "CSS"],
      liveLink: "https://vladko-matraka.netlify.app/",
      githubLink: null, // This was commented out in your original code
    },
    {
      title: "Sell Me Website",
      srcImage: "../photos/sell-me.jpeg",
      description:
        "Explore style effortlessly with our React, CSS, and HTML-powered clothing website. Shop curated trends, designed with passion for a seamless and chic experience. Redefine your wardrobe with us – where fashion meets innovation!",
      stack: ["React", "CSS"],
      liveLink: "https://sell-me.netlify.app/",
      githubLink: "https://github.com/damyandt/React-Project-2023-SellMe",
    },
    {
      title: "Real Estate Website",
      srcImage: "../photos/real-estate.jpeg",
      description:
        "Welcome to your gateway to exceptional living! Explore our React-powered real estate website for a seamless journey into your dream home. Discover curated listings and sleek interfaces, and intuitive navigation that make finding the perfect property a breeze.",
      stack: ["Angular", "CSS"],
      liveLink: "https://real-estate-damyandt.netlify.app",
      githubLink: "https://github.com/damyandt/RealEstate-Angular-Project",
    },
    {
      title: "Calculator App",
      srcImage: "../photos/calculator.jpeg",
      description:
        "This React-powered calculator offers a modern design and intuitive functionality. Perfect for both simple and complex calculations, it ensures accuracy and responsiveness.",
      stack: ["React", "CSS"],
      liveLink: "https://calculator-damyandt.netlify.app",
      githubLink: "https://github.com/damyandt/Calculator",
    },
    {
      title: "Tic Tac Toe Game",
      srcImage: "../photos/tic-tac-toe.jpeg",
      description:
        "Experience classic fun reimagined! Dive into our Tic Tac Toe game, meticulously crafted with React for a sleek and interactive gameplay. Enjoy a timeless challenge in a modern interface. Play now and rediscover the joy of this iconic game, revamped with a touch of innovation.",
      stack: ["React", "CSS"],
      liveLink: "https://tic-tac-toe-damyandt.netlify.app/",
      githubLink: "https://github.com/damyandt/Tic-Tac-Toe",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>PORTFOLIO</h2>
      <h3>Each project is a unique piece of development!</h3>

      <div className="projectsContainer">
        {projectsList.map((project, index) => (
          <Project key={index} projectData={project} />
        ))}
      </div>
    </section>
  );
};
