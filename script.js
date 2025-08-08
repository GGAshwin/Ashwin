window.addEventListener("load", () => {
  var val = 1;
  setTimeout(() => {
    const loading = document.querySelector(".loading");
    loading.id = "hidden";
    if (loading.style.opacity == 0) {
      setTimeout(() => {
        loading.style.display = "none";
      }, 2000);
    }
  }, 2000);
});

const loading = document.querySelector(".loading");

// A simple array to hold all your project data (remains the same)
const myProjects = [
  {
    title: "Bloggerline",
    description:
      "A full-stack MERN application where users can write, publish, and browse blog posts with a clean, intuitive interface.",
    image: "./images/blog.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://bloggerline.vercel.app/",
    codeUrl: "https://github.com/GGAshwin/bloggerline",
  },
  {
    title: "Social Media REST API",
    description:
      "A comprehensive, ready-to-use REST API built with Node.js and Express, featuring user authentication, posts, comments, and more.",
    image: "./images/socail.png",
    tech: ["Node.js", "Express", "EJS", "REST API"],
    liveUrl: null,
    codeUrl: "https://github.com/GGAshwin/social_REST",
  },
  {
    title: "Weather App",
    description:
      "A sleek weather application that fetches and displays real-time weather data from a third-party API based on user location search.",
    image: "./images/weather.png",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://weather-app-eta-three.vercel.app/",
    codeUrl: "https://github.com/GGAshwin/Weather-App",
  },
  {
    title: "E-Voting System",
    description:
      "A secure and efficient e-voting application built with PHP and MySQL, allowing for streamlined voter registration and ballot casting.",
    image: "./images/elec.png",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    liveUrl: null,
    codeUrl: "https://github.com/GGAshwin/mini_project",
  },
];

// --- UPDATED SCRIPT ---
document.addEventListener("DOMContentLoaded", () => {
  const projectsGrid = document.getElementById("projects-grid");

  // Create and append all project cards
  myProjects.forEach((project, index) => {
    // Get index for stagger effect
    const card = document.createElement("div");
    card.classList.add("project-card");

    // Card creation logic (same as before)
    const liveLink = project.liveUrl
      ? `<a href="${project.liveUrl}" target="_blank" class="project-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>Live Demo</a>`
      : "";
    const codeLink = project.codeUrl
      ? `<a href="${project.codeUrl}" target="_blank" class="project-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Source Code</a>`
      : "";
    card.innerHTML = `<div class="project-image"><img src="${
      project.image
    }" alt="${
      project.title
    } screenshot"></div><div class="project-content"><h3 class="project-title">${
      project.title
    }</h3><p class="project-description">${
      project.description
    }</p><div class="project-tech">${project.tech
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join(
        ""
      )}</div><div class="project-links">${liveLink}${codeLink}</div></div>`;

    projectsGrid.appendChild(card);
  });

  // --- NEW: INTERSECTION OBSERVER LOGIC ---
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If the card is in the viewport, add the .is-visible class
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the card is visible
    }
  );

  // Tell the observer to watch each card
  cards.forEach((card) => {
    observer.observe(card);
  });
});
