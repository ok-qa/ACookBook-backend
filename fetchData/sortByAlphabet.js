const fs = require("fs");
const areas = require("../areas.json");

const sortAreasFromA = () => {
  const sortedAreas = areas.sort((a, b) => a.name.localeCompare(b.name));
  fs.writeFileSync("sortedAreas.json", JSON.stringify(sortedAreas, null, 2));
};

sortAreasFromA();
