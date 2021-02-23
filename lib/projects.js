import fs from "fs";
import path from "path";

const projectsDir = path.join(process.cwd(), "data/projects");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function getProjectData() {
  const fileNames = fs.readdirSync(projectsDir);

  return fileNames.map((fileName) => {
    const project = capitalizeFirstLetter(
      fileName.replace(/\.json$/, "").replace("-", " ")
    );
    const fullPath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const projectData = JSON.parse(fileContents);

    return {
      id: project,
      ...projectData,
    };
  });
}
