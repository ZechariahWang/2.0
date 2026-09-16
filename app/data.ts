export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  category: "robotics" | "ai" | "fullstack";
  technologies: string[];
  image: string;
  paragraphs: string[];
  githubUrl: string;
  liveUrl: string;
};

export const name = "zechariah wang";
export const tagline = "mechatronics engineering @ uwaterloo";
export const githubUrl = "https://github.com/ZechariahWang";
export const email = "zechariahwang@gmail.com";

export const about = [
  "i started at 210 as the software team lead for 6+ years, and qualified for the world championships 7x. i then built an autonomous ugv for the u.s. army and secured $25,000 in funding within two weeks.",
  "i now attend the university of waterloo for mechatronics engineering, and am currently working at robim this summer on robots for prefabrication.",
];

export const skills: { label: string; items: string[] }[] = [
  { label: "robotics", items: ["ros2", "linux", "docker", "microcontrollers", "soc"] },
  { label: "ai / ml", items: ["pytorch", "opencv", "sb3", "pybullet", "gymnasium"] },
  { label: "fullstack", items: ["react", "aws", "postgresql", ".net", "node.js"] },
  { label: "cad", items: ["blender", "solidworks", "autocad"] },
];

export const experiences: Experience[] = [
  {
    role: "robotics ml engineering intern",
    company: "robim technologies",
    period: "may 2026 - aug 2026",
    location: "edmonton, ab",
    summary: "robots for prefabrication.",
    skills: ["yolo", "pytorch", "llm"],
  },
  {
    role: "software engineer intern",
    company: "exia labs",
    period: "jan 2026 - apr 2026",
    location: "los angeles, ca",
    summary: "autonomous ground vehicles for defense.",
    skills: ["ros2", "linux", "tak"],
  },
  {
    role: "software engineer intern",
    company: "twos conversation",
    period: "sept 2025 - dec 2025",
    location: "new york, ny",
    summary: "ai-agents for real time communication protocols.",
    skills: ["next.js", "aws", "postgresql", "redis"],
  },
  {
    role: "robotics software engineer",
    company: "watonomous",
    period: "may 2025 - aug 2025",
    location: "waterloo, on",
    summary: "ai for autonomous self-driving vehicles.",
    skills: ["docker", "ros2", "linux", "foxglove"],
  },
  {
    role: "software engineer intern",
    company: "conavi medical",
    period: "jan 2025 - apr 2025",
    location: "toronto, on",
    summary: "medical devices for cardiac procedures.",
    skills: [".net", "wpf", "moq", "nunit"],
  },
  {
    role: "principal software engineer",
    company: "210z robotics",
    period: "sept 2019 - aug 2024",
    location: "calgary, ab",
    summary: "alberta #1 competitive robotics team.",
    skills: ["ros2", "gazebo", "mongodb", "pros"],
  },
  {
    role: "research engineer intern",
    company: "university of calgary",
    period: "jan 2023 - mar 2023",
    location: "calgary, ab",
    summary: "computer imaging of mfts and flocculent polymers.",
    skills: ["python", "matplotlib", "pandas", "opencv"],
  },
];

export const projects: Project[] = [
  {
    id: "argus",
    title: "argus ugv",
    tagline: "autonomous unmanned ground vehicle acquired by exia labs (a16z).",
    category: "robotics",
    technologies: ["ros2", "gazebo", "nvidia jetson", "velodyne lidar", "anduril lattice", "tak"],
    image: "/projects/atv.png",
    paragraphs: [
      "I developed the first version of an unmanned ground vehicle, Argus, that was acquired by Exia Labs (a16z). The platform was built on a Suzuki King Quad 450 base, and fuses a Velodyne VLP-32C LiDAR and camera to map its surroundings and navigate to user-defined waypoints. Steering, braking, and throttle are all handled by custom-printed and machined parts purpose-built for the vehicle.",
      "The software stack utilizes ROS2, Gazebo, and Foxglove on a Nvidia Jetson running Ubuntu 22.04 with a full sensor package (3D LiDAR, depth camera, IMU, radio, encoders) incorporated with Anduril Lattice and TAK.",
      "For autonomous path-planning, the ATV utilizes a custom waypoint algorithm called CHAR, paired with a local A* dynamic algorithm for path generation. From there, the ATV uses Pure Pursuit to navigate to target coordinates (lat, long) given any C2 software.",
      "I was invited to test the vehicle with the 2nd Cavalry Regiment on Rose Barracks during March 2026 in Germany, and raised $25,000 USD within two weeks. During this time, I lived between Nuremberg and Munich for 1 month while working with Rose Barracks and the 2nd Cavalry Regiment in Vilseck to showcase the vehicle.",
      "Argus 2.0 is now built on a Polaris and available for commercial purchase in the U.S. and Germany. I worked on the initial software for 2.0, before leaving Exia in April after winter 2026.",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "eclipse",
    title: "eclipse robotics",
    tagline: "open source control library for the vex robotics competition.",
    category: "robotics",
    technologies: ["c++", "pros", "ros2", "gazebo", "matplotlib"],
    image: "/projects/ecl.jpg",
    paragraphs: [
      "Eclipse is an open source robotics library I developed for the VEX Robotics Competition, enabling high school teams to build advanced control systems. Implemented in C++ (PROS) with ROS2 integration. Overall, the code has been used by 50+ teams in Alberta, and has won numerous awards locally, nationally, and internationally.",
      "The library contains logic for PID Controllers, MTP and MTRP algorithms, Odometry position localization, GPS position localization, Scalar Kalman Filters, Bezier Curve Generators, Pure Pursuit Motion Planning, PID Constant tuners, holonomic MTP and MTRP, holonomic Pure Pursuit, Linear Motion Profilers (trapezoidal curves), LVGL embedded graphics, autonomous selectors, ROS2, Gazebo and 2D Matplotlib simulators.",
      "The library has been used extensively in regional, national, and international competitions and has earned countless awards. The most notable include winning Canada's largest international robotics tournament sponsored by Encore Canada, Top 16 at the World Championships, and ranking 1st in Alberta.",
      "Full award list: 7x World Championship Qualified, 7x Regional Tournament Champions, 6x Regional Tournament Finalists, 9x Design, Skills, Sportsmanship, Judges, Innovate Awards, 2x International Tournament Champion, 1x Provincial Champion, 2x Excellence Award, 1x Think Award, Western Mechatronics 2024 Excellence in Programming Award.",
    ],
    githubUrl: "https://github.com/ZechariahWang/Eclipse-Robot_Framework",
    liveUrl: "",
  },
  {
    id: "ur20",
    title: "ur20 camera sweep controller",
    tagline: "ros 2 and moveit 2 control stack for a universal robots ur20 arm.",
    category: "robotics",
    technologies: ["ros2", "moveit2", "c++", "docker"],
    image: "/projects/ur20.jpg",
    paragraphs: [
      "UR20 Camera Sweep Controller is a ROS 2 (Humble) and MoveIt 2 control stack I developed for a Universal Robots UR20 industrial arm carrying a ZED stereo camera, built to run automated scanning passes over large wooden boards in a real production cell. The system was developed to be used with MoveIt's fake hardware or the physical robot through ur_robot_driver.",
      "The core routine, written in C++, executes a scripted sequence of free joint-space moves and straight-line Cartesian sweeps: park, a top pass over the board, a low side pass, and a final oblique view, with configurable heights, speeds, and pause times loaded from YAML. Safety is built into the pipeline with measured cell geometry (floor, ceiling, walls, mounting pillar) which is published as MoveIt collision objects, and every scripted TCP pose is checked against those bounds with margins before any motion starts.",
      "Around the motion core sits an operator-facing interface layer. A command server exposes sweep, park, rest, pause, resume, and stop over rosbridge to a web app, with pause implemented as a latched flag that halts the trajectory and replans from the arm's current position on resume. The routine publishes pose-reached markers so the web app can synchronize frame capture with each settled camera position, and a sim-state publisher fills in the status topics the real driver would normally provide, so the web app behaves identically in simulation and on hardware. Small calibration tests (wrist rotation, axis sweeps) round out the package for first-contact hardware bring-up.",
    ],
    githubUrl: "https://github.com/ZechariahWang/ur20-sim",
    liveUrl: "",
  },
  {
    id: "self-driving-car",
    title: "watonomous vehicle simulator",
    tagline: "real-time optimal path planning for an autonomous vehicle.",
    category: "ai",
    technologies: ["ros2", "docker", "foxglove", "c++"],
    image: "/projects/WATonomous.png",
    paragraphs: [
      "WATonomous is a student robotics design team at the University of Waterloo. We build autonomous vehicles and the software stacks that run them, including the perception, planning, control, and world-modelling.",
      "EVE is our full-scale autonomous vehicle platform: a modified Kia Soul. The target is Level 4 operation in urban conditions, which includes signalized intersections, pedestrians and cyclists, and construction zones with lane closures.",
      "This project simulates autonomous vehicle navigation using a ROS2 publisher-subscriber architecture built on the DDS protocol. The system generates a dynamic cost-map from LiDAR and odometry data in real time, enabling the vehicle to detect and reason about obstacles as the environment changes. Navigation combines the Pure Pursuit algorithm for smooth trajectory following with A* path planning for optimal route generation. The cost-map is continuously updated from sensor input, ensuring the planner always works from a current representation of the environment.",
      "I worked on the action team, specializing primarily in controls and path-planning. The entire stack is time-synchronized and fused into a common frame before it reaches perception, so downstream nodes work from one consistent view of the scene rather than reconciling per-sensor timestamps themselves. Everything runs on the same ROS2 monorepo stack we develop in simulation.",
    ],
    githubUrl: "https://github.com/ZechariahWang/Watonomous-ASD",
    liveUrl: "https://www.youtube.com/watch?v=4ZobtJzNd3g",
  },
  {
    id: "sac-mtp",
    title: "rl sac mtp algorithm",
    tagline: "reinforcement learning vs classical control for point navigation.",
    category: "ai",
    technologies: ["pybullet", "stable-baselines3", "gymnasium", "python"],
    image: "/projects/sac2.png",
    paragraphs: [
      "This project compares a hand-tuned controller to a learned policy on the same car and the same task. PyBullet runs the physics: the stock racecar URDF (0.325 m wheelbase) stepped at 60 Hz, with a 16-ray lidar over a 180 degree field of view and 10 m range. Rays originate 0.4 m ahead of the car so they don't hit the chassis. Obstacles are 0.8 m boxes with contact-based collision detection.",
      "The classical baseline builds a closed track from six waypoints using Catmull-Rom control points fed into cubic Bezier segments, then follows it with Pure Pursuit at a 2 m lookahead, steering clamped to plus or minus 0.6 rad. A PID controller with anti-windup holds 2 m/s.",
      "The RL side is a Gymnasium environment where the agent sees speed, distance to goal, goal bearing as sin/cos, and the 16 lidar rays, stacked over 4 frames. Actions are continuous throttle and steering. Reward is shaped on distance closed to the goal, with penalties for time, control jerk, and low lidar clearance, plus terminal bonuses and penalties for reaching the goal, colliding, or wandering out of bounds.",
      "Training uses SAC from Stable-Baselines3 under a two-stage curriculum: 50k steps in an empty world to learn goal-seeking, then 350k with 3 to 7 randomly placed obstacles.",
      "The benchmark runs both controllers over the same 30 seeded episodes, so each one faces an identical goal position and obstacle layout. The baseline points Pure Pursuit directly at the goal with no avoidance logic. Both are scored on goals reached, collisions, timeouts, mean final distance to goal, and mean steps to completion.",
    ],
    githubUrl: "https://github.com/ZechariahWang/control-sim-collection",
    liveUrl: "",
  },
  {
    id: "westmech",
    title: "western mechatronics",
    tagline: "canada's leading robotics education company.",
    category: "fullstack",
    technologies: ["next.js", "node.js", "mongodb"],
    image: "/projects/westmechpic.png",
    paragraphs: [
      "Western Mechatronics is a student run robotics company with over $110,000 in annual revenue, 100 members, and partnerships with Google, TC Energy, and The Calgary Stampede. We run summer camps, workshops, and competitions for students across Calgary.",
      "I have been a part of the company since its original creation in 2019, and am responsible for development of the company's software platform. Currently, I am developing a fullstack parent/student portal using Next.js and MongoDB for students to view their progress and upcoming competitions, as well as scheduling and registration for meetings and other events.",
      "Outside of software, I am also a mentor for the students at WestMech, and have taught over 25+ teams about the fundamentals of robotics and programming.",
    ],
    githubUrl: "https://github.com/westmech",
    liveUrl: "https://westernmech.ca",
  },
  {
    id: "mecha-mayhem",
    title: "mecha mayhem",
    tagline: "canada's largest robotics tournament.",
    category: "fullstack",
    technologies: ["react", "next.js", "tailwind", "python"],
    image: "/projects/original.jpg",
    paragraphs: [
      "Mecha Mayhem is Canada's largest robotics tournament, with over 3000 attendees and 200+ teams from middle school, high school, and university. I am a member on the software team, primarily dealing with fullstack and competition analysis.",
      "I developed an award and team data analytics tool using the RobotEvents API, which displays metrics and stats of competition vitals, including team performances, awards given out, and other miscellaneous information.",
    ],
    githubUrl: "https://github.com/westmech/Mecha-Mayhem-Frontend-2025",
    liveUrl: "https://www.mechamayhem.ca/",
  },
];
