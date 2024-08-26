import IubBongomarine from "../assets/projects/IubBongomarine.png";
import IubBongomarine2 from "../assets/projects/Bongomarine-2.png";
import IubBongomarine3 from "../assets/projects/Bongomarine-3.png";
import Shuchimita from "../assets/projects/Shuchimita.png";
import Incubator from "../assets/projects/Incubator.png";
import Incubator2 from "../assets/projects/Incubator2.png";

export const HERO_CONTENT = `I am a multidisciplinary engineer with a passion for blending technology and design. From crafting intricate 3D models to developing seamless web interfaces and building robust embedded systems, I bring your ideas to life with creativity and precision. Proficient in tech stacks like React, Node.js, C++. I excel in both solo projects and collaborative environments. Let's create something extraordinary together.`;

export const ABOUT_TEXT = `With 4 years of experience in designing medical products that adhere to international standards, I specialize in offering all-in-one IoT solutions. My expertise spans 3D modeling using Fusion 360, circuit design, and coding for embedded systems. I'm well-versed in creating custom web interfaces using React, along with mobile apps using Flutter.
I'm also deeply passionate about robotics, having led a team to represent Bangladesh in the SAUVC 2024 competition. My interest in robotics drives me to innovate and collaborate, making me a strong team player who thrives on challenging projects. Whether it's an IoT project or a complex robotic system, I'm here to turn your vision into reality.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    title: "Junior Web Developer",
    subtitle: "Bioforge Health Systems Ltd",
    description: `-	Develop front-end of HMS software using tools such Material UI, Recharts, React Leaflet which serves to over 9000 patients monthly\n
    - Create wireframes of website UI using software such figma
-	Over 300+ contributions and issues closed in GitHub project board
`,
    technologies: ["React.js", "Node.js", "MaterialUI", "PostgreSQL"],
    image: [Shuchimita, Incubator2],
  },
  {
    year: "2019 - 2023",
    title: "3D Product Designer",
    subtitle: "Bioforge Health Systems Ltd",
    description: `-	3D model and fabricate 12 biomedical devices using rapid prototyping tools such 3D modeling, 3D printing, laser cutting\n
-	Collaborate with MIT Solve community, Gates Foundation, Nonfiction Design on developing human-centric medical devices\n
-	Navigate through IEC Standards while developing Neonatal Incubator, Photo Therapy Light
`,
    technologies: ["Fusion360", "3D Printing", "Laser Cutting"],
    image: [Incubator, Incubator2],
  },
];

export const PROJECTS = [
  {
    year: "",
    title: "IUB Bongomarine",
    subTitle: "Autonomous Underwater Vehicle",
    image: [IubBongomarine, IubBongomarine2, IubBongomarine3],
    description: `This first-generation AUV, developed by the IUB Bongomarine Team under my leadership, is designed to autonomously navigate underwater obstacles and complete tasks like dropping objects onto color-specific targets.
    The AUV features a closed-loop control system built with ESP32 microcontrollers and a custom IMU integrating gyroscope and compass sensors. Autonomous decision-making is powered by a Raspberry Pi 4 running OpenCV. Our AUV reached the finals at the Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2024.`,
    //     description: `-	Research and design watertight autonomous vehicle using ESP32 and Raspberry Pi\n
    // -	Implement object tracking with OpenCV and closed loop control system using custom Inertial Measurement Unit\n
    // -	Lead a team in representing Bangladesh in the international, SAUVC 2024 competition
    // `,
    technologies: ["esp32", "Raspberry Pi", "OpenCV", "Python"],
  },
  {
    year: "",
    title: "Shuchimita",
    subTitle: "IoT Based Sanitary Napkin Dispenser",
    image: [Shuchimita],
    description: `A comprehensive IoT solution to address the unavailability of sanitary pads on campus. This product includes an end-to-end system with user registration, an admin monitoring site, and the dispenser itself. The device utilizes Student ID cards for access, with WiFi-enabled transmission to the database using JSON via WebSocket and MQTT Protocols.
    Designed for IUB students, this dispenser system will soon be installed on campus to ensure reliable access to sanitary products.`,
    // description: `-	Develop an automated dispenser solution using ESP32 with WiFi-enabled transmission to the database using JSON via WebSocket and MQTT Protocols\n
    // -	Fabricate contactless interaction utilizing student RFID cards
    // `,
    technologies: ["IoT", "ESP32", "React", "Node.js", "Supabase"],
  },
  {
    year: "",
    title: "Bioforge Neonatal Incubator",
    subTitle: "",
    image: [Incubator2],
    description: `The Opencot neonatal incubator monitors vital signs, sends data to a web dashboard, and alerts the nurses' station if any anomalies are detected. Designed and fabricated using locally sourced materials, it adheres to international (IEC) standards.
    Being involved in this project from the beginning, I have designed and fabricated over three iterations. One of these iterations, the Flatpack incubator, received the prestigious Solve MIT 2020 Award and the Gates Foundation Award for innovation in maternal and newborn health.`,
    // description: `-	Develop an automated dispenser solution using ESP32 with WiFi-enabled transmission to the database using JSON via WebSocket and MQTT Protocols\n
    // -	Fabricate contactless interaction utilizing student RFID cards
    // `,
    technologies: ["Fusion360", "3dPrinting", "ESP32", "Thingsboard"],
  },
];

export const PUBLICATIONS = [
  {
    title:
      "Rahman, M. H., Al Monir, M. F., Shihab, R. H., Ahammed, F. I., Uddin, M. F., Hasan, M., Islam, R., & Alam, S. B. (2023). Synergistic Design and Analysis of a Multi-Tasking Robot Enabling Artificial Intelligence for Hazard Response. In 2023 23rd International Conference on Control, Automation and Systems (ICCAS). Yeosu-si, Sounth Korea.",
    doi: `https://doi.org/10.23919/iccas59377.2023.10316812`,
  },
  {
    title:
      "Saha, S. S., Chowdhury, H. A., Shihab, R. H., Ahammed, F. I., & Bhuiyan, A. M. (2021). Bioforge PTL: An IoT Enabled Rapidly Deployable Phototherapy Device for Neonatal Jaundice. In 2021 13th Biomedical Engineering International Conference (BMEiCON). Ayutthaya, Thailand.",
    doi: `https://doi.org/10.1109/bmeicon53485.2021.9745205`,
  },
  {
    title:
      "Haque, S. R., Saha, S. S., Chowdhury, H. A., Ferdous, T. R., Chowdhury, A. S., Shihab, R. H., Choudhury, J. N., Choudhury, D. A. F. K., & Rahman, T. (2021). A Cost-Effective Solution for Real Time Remote Monitoring of Vital Signs in Patients. In 2021 14th International Congress on Image and Signal Processing, BioMedical Engineering and Informatics (CISP-BMEI). Shanghai, China.",
    doi: `https://doi.org/10.1109/cisp-bmei53629.2021.9624436`,
  },
];

export const ACHIEVEMENTS = {
  International: [
    {
      year: "2024",
      position: "Finalist",
      event: "Singapore AUV Challenge 2024",
      description: `IUB Bongomarine, a first generation AUV from IUB, became finalist in the Singapore Autonomous Underwater Vehicle Challenge (SAUVC), an international competition organized at Singapore Polytechnic and National University of Singapore.`,
    },
    {
      year: "2020",
      position: "MIT Solver Class of 2020",
      event: "Solve MIT",
      description: `Received MIT Solve Award and Gates Foundation Award in Maternal and Newborn Health section among 2700+ teams from 135 countries.`,
    },
  ],
  National: [
    {
      year: "2024",
      position: "Runner Up",
      event: "Robo Carnival",
      description: `First Person View Drone Race organized by Bangladesh University of Engineering and Technology.`,
    },
    {
      year: "2023",
      position: "Runner Up",
      event: "IUT Esonance",
      description: `Drone Obstacle Course organized by Islamic University of Technology.`,
    },
    {
      year: "2023",
      position: "Champion",
      event: "IEEE Branch Fest",
      description: `Robotics and project showcasing competition organized by Bangladesh University of Professionals.`,
    },
  ],
};

export const CONTACT = {
  address: "Dhaka, Bangladesh",
  email: "shihab.hasan3322@gmail.com",
};
