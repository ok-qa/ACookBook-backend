// const fetch = require("node-fetch"); // If you're using Node.js and need fetch
const fs = require("fs"); // File System module

async function fetchAllPagesAndSaveToFile() {
  const allData = []; // Store all data here
  let currentPage = 1; // Start with the first page
  let hasMoreData = true;

  try {
    while (hasMoreData) {
      const response = await fetch(
        `https://tasty-treats-backend.p.goit.global/api/recipes?page=${currentPage}`
      );
      const data = await response.json();
      hasMoreData = data.totalPages > currentPage;
      if (data.results.length > 0) {
        allData.push(...data.results);
        currentPage++;
      } else {
        hasMoreData = false; // Stop when no more data
      }
    }

    // Write the fetched data to a JSON file
    fs.writeFileSync("allData.json", JSON.stringify(allData, null, 2));

    console.log("All data has been saved to allData.json");
  } catch (error) {
    console.error("Error fetching or saving data:", error);
  }
}

// Usage
fetchAllPagesAndSaveToFile();
