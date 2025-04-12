import React from "react";
import { ExternalLink } from "lucide-react";
import TextSeparator from "@/components/text-separator";
import { contactInfo } from "@/data/contact-info";

const ContactMe: React.FC = () => {
  const contactLinks = [
    { label: contactInfo.email, href: `mailto:${contactInfo.email}`, title: "Email" },
    { label: "Connect on LinkedIn", href: contactInfo.linkedin, title: "LinkedIn" },
    { label: "View My Projects", href: contactInfo.github, title: "GitHub" },
  ];

  return (
    <div className="max-w-8xl md:w-4/5 p-6 mx-auto space-y-10 dark:bg-gray-900">

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">

        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">Let's Connect</h3>
        </div>

        <div className="p-6">
          <p className="text-gray-800 dark:text-gray-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following:
          </p>
        </div>

        <div className="p-8 pt-3 space-y-6">
          {contactLinks.map(({ label, href, title }) => (
            <div key={title} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <h4 className="text-base font-medium text-gray-600 dark:text-gray-300">{title}</h4>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 flex items-center gap-2 hover:underline font-medium"
              >
                {label} <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;