import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "Oa4e2y7RWo8gtEp8uqp59uehWCluGFLvga9x-_0qqXg",
      query,
      page,
      per_page: 12,
    },
  });

  const totalResults = response.data.total; // Загальна кількість результатів
  const nbPages = Math.ceil(totalResults / 12); // Кількість сторінок

  return { results: response.data.results, nbPages }; //  зображення та кількість сторінок
};
