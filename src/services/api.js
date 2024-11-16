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
  return response.data;
};

