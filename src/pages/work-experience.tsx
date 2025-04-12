import { useState } from "react";
import { experiences } from "@/data/experience";
import TextSeparator from "@/components/text-separator";
import ImageSlider from "@/components/image-slider";

const WorkExperience: React.FC = () => {
  return (
    <div className="max-w-8xl md:w-4/5 mx-auto space-y-8 dark:bg-gray-900 p-4 px-10 pt-10">
      <TextSeparator text="Work Experience" />

      {experiences.map(
        ({ id, company, position, date, description, images }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                    {company}
                  </h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-400">
                    {position}
                  </h4>
                </div>
                <span className="mt-2 sm:mt-0 inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
                  {date}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                Responsibilities
              </h5>
              <ul className="space-y-2">
                {description.map((item, index) => (
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
            {images && <ImageSlider images={images} />}
          </div>
        )
      )}
    </div>
  );
};

export default WorkExperience;
