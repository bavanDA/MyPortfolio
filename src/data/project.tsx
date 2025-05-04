export const projects = [
  {
    id: 1,
    name: "Mini Wiki",
    description: [
      "Building a community-driven platform to provide better tutorials and documentation for open-source projects on GitHub.",
      "Many projects rely on README files, which are often insufficient for helping users understand and follow along effectively.",
      "The platform will be serverless to minimize deployment costs.",
      "Currently in development, with plans to release it as open-source once key features are completed.",
    ],
    githubLinkFrontend: "https://github.com/bavanDA/mini-wiki",
    githubLinkBackend: "https://github.com/bavanDA/mini-wiki-api",
  },
  {
    id: 2,
    name: "DMV Practice Test",
    description: [
      "Created a solution to improve DMV test preparation efficiency.",
      "Identified a popular 3-hour DMV study video with 300 questions but found it inefficient for learning.",
      "Used OCR, Python, and OpenCV to extract all questions from the video.",
      "Leveraged OpenAI’s API to correct OCR errors and manually reviewed questions for accuracy.",
      "Developed an Android app that allows users to take practice exams, reducing study time from 3 hours to just 1 hour.",
      "Enhanced the app by adding explanations and Persian translations to assist the Iranian community, as the DMV lacks Persian study materials.",
    ],

    images: [
      "/project/dmv1.png",
      "/project/dmv2.png",
      "/project/dmv3.png",
      "/project/dmv4.png",
    ],
  },
  {
    id: 3,
    name: "TOEFL WordPrep",
    description: [
      "Created a personal application for TOEFL word preparation based on preferences after not liking the system in Memrise Application.",
      "Exported words from Memrise website and made it possible for users to categorize them into easy, medium, and hard categories to focus on harder words.",
      "Added pronunciation and examples to help with better learning.",
      "Included a feature to search for words and get words based on TPO (practice exams for TOEFL).",
    ],

    images: [
        "/project/wp1.png",
        "/project/wp2.png",
    ],
  },
  {
    id: 4,
    name: "Android Secure SMS-Based Employee Check-In/Check-Out",
    description: [
      "Designed and developed a secure SMS-based employee check-in/check-out system with encryption, data integrity checks, and acknowledgment mechanisms.",
      "Implemented the system using SMPP, Android SMS Manager, and GSM technologies to ensure reliable and secure communication for employee attendance tracking.",
    ],
    githubLinkFrontend:
      "https://github.com/bavanDA/AndroidSecureMessageProtocol",
    githubLinkBackend: "https://github.com/samanmohammadraouf/SMPP_Server",
    images: [
      "/project/smpp1.png",
      "/project/smpp2.png",
      "/project/smpp6.png",
      "/project/smpp4.png",
      "/project/smpp5.png",
      "/project/smpp3.png",
      "/project/smpp7.png",
    ],
  },
  {
    id: 5,
    name: "Open Understand",
    description: [
      "Contributed to the open-source version of OpenUnderstand, a code analysis tool.",
      "Implemented functionality to analyze source code using ANTLR, parsing it into an abstract syntax tree (AST).",
      "Extracted essential entities such as packages, classes, and methods from the codebase and stored them as records in a database, enhancing the tool’s capabilities and data management.",
    ],
    githubLink: "https://github.com/bavanDA/OpenUnderstand",
  },
  {
    id: 6,
    name: "Tile Crack Detection",
    description: [
      "Developed two models: a Siamese convolutional neural network for crack detection and a U-Net model for segmentation.",
      "Trained the Siamese network on pairs of image patches to learn similarities and differences, enabling the detection of cracks.",
      "Employed the U-Net model for semantic segmentation to outline the cracks in the image.",
    ],
    githubLink: "https://github.com/bavanDA/Tile-Crack-Detection",
  },
  {
    id: 7,
    name: "Game Categorization Model",
    description: [
      "Developed an NLP model that categorizes video games based on their descriptions.",
      "Gathered a dataset of game descriptions and their corresponding categories from Steam to train the model.",
    ],
    githubLink: "https://github.com/bavanDA/Game-Categorization-Model",
  },
];
