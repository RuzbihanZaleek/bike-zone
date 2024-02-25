import { BikeProps, FilterProps } from "@/types";

export const fetchBikes = async (filters: FilterProps) => {
  const { manufacturer, year, fuel, limit, model } = filters;

  const headers = {
    "X-Api-Key": "4foN5kQ3AzjLdzqiLrvpTA==W3NArr7GeUT7QoZk",
  };

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/motorcycles?make=${manufacturer}&year=${year}&fuel=${fuel}&limit=${limit}&model=${model}`,
      { headers: headers }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
