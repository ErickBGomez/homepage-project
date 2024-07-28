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
                  <a href="${links.github}" target="_blank" class="icon-link" aria-label="Open repository of ${title}">
                    <i class="devicon-github-original"></i>
                  </a>
                  <a href="${links.project}" target="_blank" class="icon-link" aria-label="Open live view of ${title}">
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

  container.innerHTML += ProjectCard(
    "To-Do App",
    "Description 2",
    "todo-app.png",
    {
      github: "https://github.com/ErickBGomez/todo-project",
      project: "https://erickbgomez.github.io/todo-project/",
    }
  );

  container.innerHTML += ProjectCard(
    "Belen's Restaurant Design",
    "Description 3",
    "belen-restaurant.png",
    {
      github: "https://github.com/ErickBGomez/restaurant-page",
      project: "https://erickbgomez.github.io/restaurant-page/",
    }
  );

  container.innerHTML += ProjectCard(
    "Tic Tac Toe Project",
    "Description 4",
    "tic-tac-toe.png",
    {
      github: "https://github.com/ErickBGomez/tic-tac-toe",
      project: "https://erickbgomez.github.io/tic-tac-toe/",
    }
  );

  container.innerHTML += ProjectCard(
    "Calculate It!",
    "Description 5",
    "calculate-it.png",
    {
      github: "https://github.com/ErickBGomez/calculator-project",
      project: "https://erickbgomez.github.io/calculator-project/",
    }
  );

  container.innerHTML += ProjectCard(
    "Leaf Library",
    "Description 6",
    "leaf-library.png",
    {
      github: "https://github.com/ErickBGomez/library-project",
      project: "https://erickbgomez.github.io/library-project/",
    }
  );
}

App();
