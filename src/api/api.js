import axios from "axios";

export const fetchCat = async () => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    return response.data[0];
  } catch (error) {
    console.log(error);
    return false;
  }
};
