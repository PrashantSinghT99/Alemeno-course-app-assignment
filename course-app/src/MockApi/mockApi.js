import { data } from "../MockData/data";

export const fetchDataFromApi = () => {
    return new Promise((resolve) => {
      // Simulate an API delay (optional)
      setTimeout(() => {
        resolve(data); // Use the provided 'data' array as the mock response
      }, 1000); // Simulate a 1-second delay (adjust as needed)
    });
  };