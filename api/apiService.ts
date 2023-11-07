import axios from "axios";

const url =
  "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/";

export const fetchCaseStudies = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching case studies: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred while fetching case studies.");
    }
  }
};
