import { AreasCollection } from "../db/models/area.js";

const getAllAreas = async () => {
  const areas = await AreasCollection.find();
  console.log(areas);
  return areas;
};

export default getAllAreas;
