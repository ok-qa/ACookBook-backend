import fs from "fs";
import { AreasCollection } from "../db/models/area.js";

const runAreasSeed = async () => {
  try {
    const areasData = JSON.parse(
      fs.readFileSync("./seedsData/areas.json", "utf-8")
    );

    for (const area of areasData) {
      const newArea = {
        name: area.name,
      };
      await AreasCollection.create(newArea);
    }
  } catch (error) {
    console.error(error);
  }
};

export default runAreasSeed;
