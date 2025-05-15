import { useState } from "react";
import { projects } from "../constants/projectConstants";
import "./pages.css";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "data" | "web">("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section style={{ padding: "2rem" }}>
      {/* Heading and filter buttons */}
      <div className="project-header">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <div className="project-filter-buttons">
          {["all", "data", "web"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as "all" | "data" | "web")}
              className={`filter-button ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat === "all"
                ? "All"
                : cat === "data"
                ? "Data Analytics / Data Science"
                : "Web Development"}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered project list */}
      <div className="space-y-24">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-container">
            <div className="project-text">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
