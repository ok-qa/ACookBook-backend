import getAllAreas from "../services/areas.js";

export const getAllAreasController = async (req, res) => {
  const areas = await getAllAreas();

  res.status(200).json({
    status: 200,
    message: "Successfully found all areas!",
    data: areas,
  });
};
