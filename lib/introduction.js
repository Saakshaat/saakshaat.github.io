import fs from "fs";
import path from "path";

const introDir = path.join(process.cwd(), "data/introduction");

export default function getIntrodutionData() {
  const fileNames = fs.readdirSync(introDir);

  const allIntroGigs = fileNames.map((fileName) => {
    const org = fileName.replace(/\.json$/, "");
    const fullPath = path.join(introDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    console.log(fileName);
    const gigData = JSON.parse(fileContents);

    return {
      id: org,
      ...gigData,
    };
  });

  return allIntroGigs;
}
