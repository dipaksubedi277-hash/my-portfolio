// CHANGE EVERYTHING HERE TO YOUR OWN REAL DETAILS.
// The whole website reads from this one file.

export const profile = {
  name: "Dipak Subdedi",
  title: "Frontend Developer (Trainee)",
  intro: "I build simple, clean and responsive websites using React and Tailwind CSS.",
  about: [
    "Hello! I am a student from Kathmandu, Nepal. I like to design and build websites.",
    "During my 10-day frontend training I learned HTML, CSS, JavaScript, React and Tailwind CSS.",
    "I want to become a professional frontend developer and keep learning every day.",
  ],
  photo: "../public/pic.PNG", // put your photo in the public folder, e.g. "/me.jpg". Empty = initials circle.
  email: "dipaksubedi277@gmail.com",
  phone: "+977 9867542193",
  location: "Kathmandu, Nepal",
  cv: "../public/my-cv.pdf", // e.g. "/my-cv.pdf" (put the file in the public folder)
  social: [
    { name: "GitHub", url: "https://github.com/dipaksubedi277-hash" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dipak-subedi-0b0b67428" },
    { name: "Facebook", url: "https://www.facebook.com/share/1RuCaTLHT1/?mibextid=wwXIfr" },
  ],
};

export const skills = [
  { id: 1, name: "HTML", level: 90 },
  { id: 2, name: "CSS", level: 85 },
  { id: 3, name: "JavaScript", level: 75 },
  { id: 4, name: "React", level: 70 },
  { id: 5, name: "Tailwind CSS", level: 80 },
  { id: 6, name: "Git & GitHub", level: 65 },
  {id: 7, name: "PHP", level: 80 },
];

export const education = [
  { id: 1, title: "Frontend Development Training", place: "Skill Shikchya", year: "2026", detail: "10-day training on HTML, CSS, JavaScript, React and Tailwind." },
  { id: 2, title: "Bachelor's Degree (running)", place: "Tribhuvan University, Kathmandu", year: "2024 - Present", detail: "Studying Computer Science / IT." },
  { id: 3, title: "+2 (Science / Management)", place: "Mahendra Secondary School", year: "2022 - 2024", detail: "Completed higher secondary education." },
];

export const projects = [
  { id: 1, title: "Daily News Portal", type: "React", description: "A news website with categories, search and a news details page.", tools: ["React", "Tailwind", "React Router"], github: "https://github.com/your-username/news-portal", live: "" },
  { id: 2, title: "Todo App", type: "JavaScript", description: "Add, complete and delete tasks. Saves nothing, just practice with state.", tools: ["JavaScript", "HTML", "CSS"], github: "https://github.com/your-username/todo-app", live: "" },
  { id: 3, title: "Landing Page", type: "HTML/CSS", description: "A responsive landing page for a small coffee shop.", tools: ["HTML", "CSS"], github: "https://github.com/your-username/landing-page", live: "" },
  { id: 4, title: "Weather Card", type: "React", description: "Shows weather details for a city using mock data.", tools: ["React", "Tailwind"], github: "https://github.com/your-username/weather-card", live: "" },
];

// Filter buttons on the Projects page
export const projectTypes = ["All", "React", "JavaScript", "HTML/CSS"];
