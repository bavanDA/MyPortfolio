import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/project";
import TextSeparator from "@/components/text-separator";
import { Project } from "@/types/project";
import ImageSlider from "@/components/image-slider";

const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-8xl md:w-4/5 px-10 mx-auto space-y-8 dark:bg-gray-900">
      <TextSeparator text="My Projects" />

      {projects.map((project: Project) => (
        <div
          key={project.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
              {project.name}
            </h3>
          </div>

          <div className="p-6">
            <ul className="space-y-2">
              {project.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    •
                  </span>
                  <span className="text-gray-800 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Images Section*/}
          {project.images && <ImageSlider images={project.images} />}

          {/* Links Section */}
          {(project.githubLink ||
            project.githubLinkFrontend ||
            project.githubLinkBackend ||
            project.liveModeLink) && (
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
              {[
                { href: project.githubLink, label: "Repo" },
                { href: project.githubLinkFrontend, label: "Frontend Repo" },
                { href: project.githubLinkBackend, label: "Backend Repo" },
                {
                  href: project.liveModeLink,
                  label: "Live Demo",
                  color: "text-green-600 dark:text-green-400",
                },
              ]
                .filter((link) => link.href)
                .map(
                  (
                    { href, label, color = "text-blue-600 dark:text-blue-400" },
                    index
                  ) => (
                    <a
                      key={index}
                      href={href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${color} flex items-center gap-1 hover:underline`}
                    >
                      {label} <ExternalLink size={16} />
                    </a>
                  )
                )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
