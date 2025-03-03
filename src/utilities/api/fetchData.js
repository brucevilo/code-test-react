export const fetchItems = async (page = 1) => {
  const offset = (page - 1) * 10; // Adjust the increment if needed
  const url = `https://api.spacexdata.com/v3/launches?offset=${offset}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching SpaceX launches:", error);
    return [];
  }
};
