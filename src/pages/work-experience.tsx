import React from 'react';

const WorkExperienceCard = () => {
  // Sample work experience data with multiple images
  const experiences = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior Developer",
      date: "Jan 2021 - Present",
      description: [
        "Led a team of 5 developers to build a new customer portal",
        "Implemented CI/CD pipeline reducing deployment time by 40%",
        "Optimized database queries resulting in 30% faster load times"
      ],
      images: [
        "/api/placeholder/150/150",
        "/api/placeholder/150/150",
        "/api/placeholder/150/150"
      ]
    },
    {
      id: 2,
      company: "Digital Solutions LLC",
      position: "Web Developer",
      date: "Mar 2018 - Dec 2020",
      description: [
        "Developed responsive websites for 15+ clients",
        "Created reusable component library reducing development time",
        "Collaborated with design team to implement UI/UX improvements"
      ],
      images: [
        "/api/placeholder/150/150",
        "/api/placeholder/150/150",
        "/api/placeholder/150/150"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h2 className="text-2xl font-bold text-center mb-8">Work Experience</h2>
      
      {experiences.map((exp) => (
        <div key={exp.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
          {/* Header section */}
          <div className="p-6 border-b">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                <h4 className="text-lg text-gray-700">{exp.position}</h4>
              </div>
              <div className="mt-2 sm:mt-0">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {exp.date}
                </span>
              </div>
            </div>
          </div>
          
          {/* Images section - mobile optimized with horizontal scroll */}
          <div className="p-6 border-b">
            <h5 className="text-sm font-medium text-gray-500 mb-3">Project Images</h5>
            <div className="flex overflow-x-auto pb-4 space-x-4">
              {exp.images.map((img, index) => (
                <div key={index} className="flex-none">
                  <img 
                    src={img} 
                    alt={`${exp.company} project ${index + 1}`} 
                    className="h-32 w-32 object-cover rounded-lg shadow"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Description section */}
          <div className="p-6">
            <h5 className="text-sm font-medium text-gray-500 mb-3">Responsibilities</h5>
            <ul className="space-y-2">
              {exp.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceCard;