import { t as automationThumbnail, a as aiThumbnail, b as mobileThumbnail, c as webThumbnail } from "./project-thumbnails-map.js";

const projects = [
  {
    title: "Automation Project",
    slug: "cubewar",
    thumbnail: automationThumbnail,
    description: "Streamlining tasks and workflows through smart automation.",
  },
  {
    title: "AI Project",
    slug: "quibbo",
    thumbnail: aiThumbnail,
    description: "Building intelligent solutions that learn, predict and create real impact.",
  },
  {
    title: "Mobile Application Development Project",
    slug: "sharkie",
    thumbnail: mobileThumbnail,
    description: "Building modern, intuitive and high-performance mobile applications that deliver real value.",
  },
  {
    title: "Web Development Project",
    slug: "particles",
    thumbnail: webThumbnail,
    description: "Responsive, modern and user-friendly websites built with best practices.",
  },
];

export default projects;
