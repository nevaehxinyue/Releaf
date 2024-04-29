import { SERVER_URL } from "@env";

async function fetchData(endpoint) {
  const response = await fetch(`${SERVER_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return response.json();
}

export async function getWasteBinData() {
  try {
    const endpoints = [
      "/food-scraps-bin/true",
      "/food-scraps-bin/false",
      "/recycling/true",
      "/recycling/false",
      "/rubbish/true",
      "/rubbish/false",
    ];

    const requests = endpoints.map((endpoint) => fetchData(endpoint));
    const [
      foodYesData,
      foodNoData,
      recyclingYesData,
      recyclingNoData,
      rubbishYesData,
      rubbishNoData,
    ] = await Promise.all(requests);

    return {
      foodScraps: { yes: foodYesData, no: foodNoData },
      recycling: { yes: recyclingYesData, no: recyclingNoData },
      generalRubbish: { yes: rubbishYesData, no: rubbishNoData },
    };
  } catch (error) {
    console.error("Error fetching bin data:", error);
    throw error; // Rethrow after logging or handle as needed
  }
}

module.exports.getWasteBinData = getWasteBinData; // Exporting for use in other files
