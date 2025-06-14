import React, { useState } from "react";
import { project } from "../data/Project";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { AnimatePresence } from "framer-motion";
const ProjectSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectThumbnail, setProjectThumbnail] = useState("");
  const [projectSkills, setProjectSkills] = useState([]);
  const [projectLink, setProjectLink] = useState("");
  const [projectGithubLink, setProjectGithubLink] = useState("");

  const handleClick = (
    name,
    description,
    thumbnail,
    skills,
    link,
    githubLink
  ) => {
    setProjectName(name);
    setProjectDescription(description);
    setProjectThumbnail(thumbnail);
    setProjectSkills(skills);
    setProjectLink(link);
    setProjectGithubLink(githubLink);
    setModalOpen(true);
  };

  return (
    <div className="w-full min-h-fit bg-primary h-fit p-6 relative">
      <div className="max-w-maxContent mx-auto">
        <h1 className="font-semibold text-4xl font-mont text-white mb-7">
          Projects
        </h1>
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-2 md:grid-rows-1 gap-4 justify-center items-center">
          {project.map((item, index) => (
            <ProjectCard
              key={index}
              {...item}
              setModalOpen={setModalOpen}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <ProjectModal
            name={projectName}
            description={projectDescription}
            thumbnail={projectThumbnail}
            skills={projectSkills}
            link={projectLink}
            githubLink={projectGithubLink}
            setModalOpen={setModalOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectSection;
