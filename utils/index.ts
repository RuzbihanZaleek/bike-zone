import { BikeProps } from "@/types";

export const fetchBikes = async () => {
  const headers = {
    "X-Api-Key": "4foN5kQ3AzjLdzqiLrvpTA==W3NArr7GeUT7QoZk",
  };

  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/motorcycles?make=ktm",
      { headers: headers }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};


