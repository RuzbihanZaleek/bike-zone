import { BikeProps, FilterProps } from "@/types";

export const fetchBikes = async (filters: FilterProps) => {
  const { manufacturer, year, starter, offset, model } = filters;

  const headers = {
    "X-Api-Key": "4foN5kQ3AzjLdzqiLrvpTA==W3NArr7GeUT7QoZk",
  };

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/motorcycles?make=${manufacturer}&year=${year}&offset=${offset}&model=${model}&starter=${starter}`,
      { headers: headers }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
