// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Active navbar
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Skills (dynamic)
const skills = [
  { name: "HTML", desc: "Semantic & accessible markup" },
  { name: "CSS", desc: "Flexbox, Grid, Responsive UI" },
  { name: "JavaScript", desc: "DOM, Events, APIs" },
  { name: "GitHub", desc: "Version control & collaboration" }
];

const skillsContainer = document.getElementById("skillsContainer");
skills.forEach(skill => {
  const div = document.createElement("div");
  div.className = "skill-card";
  div.innerHTML = `<h3>${skill.name}</h3><p>${skill.desc}</p>`;
  skillsContainer.appendChild(div);
});

// Projects (dynamic)
const projects = [
  {
    title: "Responsive Portfolio Website",
    desc: "A modern portfolio with dynamic content rendering using JavaScript."
  },
  {
    title: "To-Do List App",
    desc: "Task management app using JavaScript & Local Storage."
  },
  {
    title: "Weather App",
    desc: "Real-time weather data using API integration."
  }
];

const projectsContainer = document.getElementById("projectsContainer");
projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  projectsContainer.appendChild(div);
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("formMsg");

  if (name === "" || email === "") {
    msg.textContent = "Please fill all required fields.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "#00ffcc";
  }
});
