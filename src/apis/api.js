import axios from "axios";

export const fetchArticles = async () => {
  try {
    const response = await axios.get(
      "https://66b145351ca8ad33d4f3cd70.mockapi.io/easyblog/articles"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
