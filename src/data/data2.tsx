import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

export const features = [
  {
    src: img1, // Use the imported variable, not a string
    level: "Beginner",
    bg: "#ffffff",
    title: "Frontend Basics",
    description: "Learn HTML, CSS, Javascript and React basics",
  },
  {
    src: img2,
    level: "Intermediate",
    bg: "#ffffff",
    title: "UI Design Essentials",
    description: "Understand layout, colors, spacing and user experience",
  },
  {
    src: img3,
    level: "All Levels",
    bg: "#ffffff",
    title: "Team Project Practice",
    description: "Build projects with your classmates, step by step",
  },
];