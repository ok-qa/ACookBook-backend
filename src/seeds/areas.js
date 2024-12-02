import fs from "fs";
import { areasCollection } from "../db/models/area.js";

const runAreasSeed = async () => {
  try {
    const areasData = JSON.parse(fs.readFileSync("areas.json", "utf-8"));

    for (const area of areasData) {
      const newArea = {
        name: area.name,
      };

      const savedArea = await areasCollection.create(newArea);

      console.log("saved area: ", savedArea);
    }
  } catch (error) {
    console.error(error);
  }
};

export default runAreasSeed;
