// constants/projectConstants.ts
import Project1 from "../assets/projects/project1.png";
import Project2 from "../assets/projects/project2.png";
import Project3 from "../assets/projects/project3.png";
import Project4 from "../assets/projects/project4.png";
import Project5 from "../assets/projects/project5.png";
import Project6 from "../assets/projects/project6.png";

export interface Project {
  title: string;
  description: string;
  image: string;
  category?: "data" | "web";
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
    {
  title: "Tamil History Timeline Website",
  description:
    "A dynamic and interactive website built with Vue 3 to showcase key events in Tamil history using a custom horizontal timeline. Data is managed through Directus CMS, allowing flexible content updates without code changes. The canvas-based rendering engine supports smooth scrolling, zooming, and responsive layouts. Features include category filters, search functionality with auto-scroll-to-match, and multilingual support via Google Translate API integration. The project highlights frontend performance tuning, structured data integration, and digital storytelling with cultural impact.",
  image: Project5,
  category: "web",
  demo: "https://historytimeline-beta.vercel.app/",
},
{
  title: "Personal Portfolio Website",
  description:
    "A fully custom-built portfolio website developed using TypeScript and React. Designed and coded from scratch without any templates, the site showcases major projects, category-based filtering, and responsive layouts. It uses modular components, custom styling with Tailwind CSS and plain CSS, and integrates animations and interactivity across pages. This project highlights frontend architecture, clean UI/UX design, and TypeScript-based component structuring.",
  image: Project6,
  category: "web",
  demo: "https://dhinakaranchandrasekar.github.io/AboutMe/"
},
{
  title: "Interactive Analytics Web App",
  description:
    "A modular analytics dashboard built with React and TypeScript, designed for internal data exploration and reporting. The app supports dynamic filters, a customizable metric grid, and exportable tables with server-side pagination. Data is fetched from a Directus API and supports multilingual content through integration with the Google Translate API. Key features include a custom date range picker, scoped KPI cards, donut/bar chart visualizations using Recharts, and CSV export functionality. The app is structured for scalability and optimized for both desktop and tablet experiences.",
  image: Project2,
  category: "web",
  demo:"https://insights.iol.world/hotels-list"
},
  {
  title: "Music Genre Classifier",
  description:
    "This project leverages audio signal processing and deep learning to classify music genres from raw `.wav` files. Using Librosa, we extract Mel spectrograms from audio signals, which are then fed into a Convolutional Neural Network (CNN) built with TensorFlow/Keras. The model was trained on the GTZAN dataset and achieves over 85% accuracy across 10 distinct genres. A Streamlit web app was also developed, allowing users to upload audio files and instantly receive genre predictions with visual feedback. This project demonstrates expertise in audio preprocessing, deep learning, and deploying ML models with interactive UIs.",
  image: Project1,
  category: "data",
  github:"https://github.com/DhinakaranChandrasekar/Music-Genre-Classification"
},

{
  title: "Real-Time Edge Detection App",
  description:
    "This computer vision project implements real-time edge detection using the Canny algorithm. Built with OpenCV and Python, it processes video frames from a webcam feed and highlights object boundaries with high accuracy and low latency. Users can dynamically adjust thresholds through a simple Streamlit UI, observing the impact in real-time. The application demonstrates core image processing concepts like Gaussian blurring, gradient calculation, and non-maximum suppression. Ideal for showcasing skills in computer vision, OpenCV, and interactive prototyping.",
  image: Project3,
  category: "data",
  github:"https://github.com/DhinakaranChandrasekar/Facial-Edge-detection-and-segmentation"
},
{
  title: "Power BI Dashboard – ESRS 1 Sustainability Reporting",
  description:
    "Developed a comprehensive Power BI dashboard for ESRS 1 (European Sustainability Reporting Standards), enabling stakeholders to explore ESG metrics across multiple dimensions. The report features interactive KPI cards, scope-based donut charts, and method-type bar charts powered by optimized DAX queries. Users can filter reports by category, reporting method, or scope, and drill down into specific ESG disclosures. This project showcases expertise in data modeling, DAX calculations, visual storytelling, and regulatory reporting under CSRD guidelines.",
  image: Project4,
  category: "data",
},







];
