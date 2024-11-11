document.addEventListener("DOMContentLoaded", function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Profile section
      document.getElementById("logo").textContent = data.profile.logo;
      document.getElementById("profile-pic").src = data.profile.profilePic;
      document.getElementById("profile-name").textContent = data.profile.name;
      document.getElementById("profile-title").textContent = data.profile.title;
      document.getElementById("resume-btn").onclick = () => window.open(data.profile.resumeLink);
      document.getElementById("linkedin-icon").src = data.profile.linkedinIcon;
      document.getElementById("linkedin-icon").onclick = () => window.location.href = data.profile.linkedinLink;
      document.getElementById("github-icon").src = data.profile.githubIcon;
      document.getElementById("github-icon").onclick = () => window.location.href = data.profile.githubLink;

      // About section
      document.getElementById("about-pic").src = data.about.aboutPic;
      document.getElementById("experience-text").textContent = data.about.experience;
      document.getElementById("education-text").textContent = data.about.education;
      document.getElementById("about-text").textContent = data.about.aboutText;

      // Experience section
      const skillsContainer = document.getElementById("skills-container");
      data.experience.forEach(skill => {
        const skillElement = document.createElement("div");
        skillElement.classList.add("details-container");
        skillElement.innerHTML = `<h3>${skill.skill}</h3><p>${skill.level}</p>`;
        skillsContainer.appendChild(skillElement);
      });

      // Projects section
      const projectsContainer = document.getElementById("projects-container");
      data.projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("details-container", "color-container");
        projectElement.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="project-img" />
          <h2 class="experience-sub-title project-title">${project.title}</h2>
          <div class="btn-container">
            <button class="btn btn-color-2 project-btn" onclick="window.location.href='${project.githubLink}'">Github</button>
            <button class="btn btn-color-2 project-btn" onclick="window.location.href='${project.liveDemoLink}'">Live Demo</button>
          </div>`;
        projectsContainer.appendChild(projectElement);
      });

      // Contact section
      document.getElementById("email-link").textContent = data.contact.email;
      document.getElementById("email-link").href = `mailto:${data.contact.email}`;
      document.getElementById("linkedin-link").href = data.contact.linkedin;
    })
    .catch(error => console.error("Error loading JSON data:", error));
});


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
