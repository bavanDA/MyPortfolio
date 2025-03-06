import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/project";
import TextSeparator from "@/components/text-separator";
import { Project } from "@/types/project";

const ProjectsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 dark:bg-gray-900">
      <TextSeparator text="My Projects" />

      {projects.map((project: Project) => (
        <div
          key={project.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
        >
          {/* Header section */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
              {project.name}
            </h3>
          </div>

          {/* Description section */}
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

          {/* Images section */}
          {project.images && !selectedImage && (
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                Project Images
              </h5>
              <div className="flex overflow-x-auto pb-4 space-x-4">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className="flex-none cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${project.name} project ${index + 1}`}
                      className="w-32 object-cover rounded-lg shadow-lg transition-transform hover:scale-105 border-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links section */}
          {(project.githubLinkFrontend ||
            project.githubLinkBackend ||
            project.liveModeLink ||
            project.githubLink) && (
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                >
                  Repo <ExternalLink size={16} />
                </a>
              )}
              {project.githubLinkFrontend && (
                <a
                  href={project.githubLinkFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                >
                  Frontend Repo <ExternalLink size={16} />
                </a>
              )}
              {project.githubLinkBackend && (
                <a
                  href={project.githubLinkBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                >
                  Backend Repo <ExternalLink size={16} />
                </a>
              )}
              {project.liveModeLink && (
                <a
                  href={project.liveModeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 flex items-center gap-1 hover:underline"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Full-Screen Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
