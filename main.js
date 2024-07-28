function ProjectCard(title, description, img, links) {
  return `<div class="project-card">
            <img
              class="thumbnail"
              src="img/thumbnails/${img}"
              alt="Thumbnail of ${title}"
            />
            <div class="information">
              <div class="title">
                <h3>${title}</h3>
                <div class="icons">
                  <a href="${links.github}" target="_blank" class="icon-link">
                    <i class="devicon-github-original"></i>
                  </a>
                  <a href="${links.project}" target="_blank" class="icon-link">
                    <i class="material-symbols-outlined">open_in_new</i>
                  </a>
                </div>
              </div>
              <div class="description small">${description}</div>
            </div>
          </div>`;
}

function App() {
  const container = document.querySelector(".projects-grid");
  container.innerHTML += ProjectCard(
    "Weather App",
    "Description 1",
    "weather-app.png",
    {
      github: "https://github.com/ErickBGomez/weather-project",
      project: "https://erickbgomez.github.io/weather-project/",
    }
  );
}

App();
