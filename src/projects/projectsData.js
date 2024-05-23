import projectOne from "../assets/portfolio.png";
import projectTwo from "../assets/project3.png";
import projectThree from "../assets/project4.png";
import projectFour from "../assets/project5.png";

const projects = {
  1: {
    title: "Vanilla JS Portfolio",
    image: projectOne,
    description: (
      <>
      <p>My first portfolio used HTML, CSS and JS</p>
      </>
    ),
    github: "https://github.com/Giv-08/portfolio",
    demo: "https://portfolio-chutima.up.railway.app/",
  },
  2: {
    title: "To-do list",
    image: projectTwo,
    description: (
      <>
      <p>To Do List used HTML, CSS and JS</p>
      </>
    ),
    github: "https://github.com/Giv-08/simple-to-do-list",
    demo: "#",
  },
  3: {
    title: "Dog rental website",
    image: projectThree,
    description: (
      <>
      <p>Full-stack project built with Ruby on Rails and SASS</p>
      </>
    ),
    github: "https://github.com/Giv-08/ruby-cuddlerdog",
    demo: "#",
  },
  4: {
    title: "My Dictionary App",
    image: projectFour,
    description: (
      <>
      <p>A dictionary app built with ReactJS and TailwindCSS</p>
      </>
    ),
    github: "https://github.com/Giv-08/mydictionary",
    demo: "https://mydictionary-production.up.railway.app/",
  },
  5: {
    title: "Hiragana Learning App",
    image: projectFour,
    description: (
      <>
      <p>A basic Japanese learning app built with ReactJS and TailwindCSS</p>
      </>
    ),
    github: "https://github.com/Giv-08/HiraganaLearning",
    demo: "#",
  },
}

export default projects;
