// Project data array
const projects = [
  {
    title: "Evangadi Forum",
    image: "https://www.ibrodev.com/Evangadi-Forum.png", // Replace with your image path
    liveLink: "https://evangadi-forum-group-recent.vercel.app/",
    githubLink: "https://github.com/EyobaGit/Evangadi_Forum_Group_recent",
  },
  {
    title: "Amazon Clone",
    image:
      "https://www.parsehub.com/blog/content/images/size/w2000/2019/08/scrape-amazon-data.jpg",
    liveLink: "https://amazon-client.netlify.app/",
    githubLink: "https://github.com/EyobaGit/Amazon_client.git",
  },
  {
    title: "Netflix-clone",
    image:
      "https://ik.imagekit.io/tp/20230207-proximus_pickx_netflix.png?tr=w-800,h-456", // Replace with your image path
    liveLink: "https://eyobagit.github.io/netflix-clone/",
    githubLink: "https://github.com/EyobaGit/netflix-clone.git",
  },
  //   {
  //     title: "WeatherApp",
  //     image: "weatherapp-screenshot.jpg", // Replace with your image path
  //     liveLink: "https://weatherapp.example.com",
  //     githubLink: "https://github.com/eyob/weatherapp"
  //   }
];

// Function to create project cards
function createProjectCards() {
  const container = document.getElementById("projectContainer");
  const grid = document.createElement("div");
  grid.classList.add("project-grid");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const link = document.createElement("a");
    link.href = project.liveLink; // Link to live demo
    link.target = "_blank"; // Open in new tab

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = `${project.title} Screenshot`;

    const title = document.createElement("div");
    title.textContent = project.title;

    link.appendChild(image);
    card.appendChild(link);
    card.appendChild(title); // Optional: Add title below image
    grid.appendChild(card);

    // Optional: Add GitHub link below
    const githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.textContent = "View Code";
    githubLink.target = "_blank";
    card.appendChild(githubLink);
  });

  container.appendChild(grid);
}

// Call the function when the page loads
window.onload = createProjectCards;
