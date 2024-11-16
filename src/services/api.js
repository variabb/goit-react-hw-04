import axios from "axios";

axios.defaults.baseUrl = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photo", {
    params: {
      query,
      page,
      per_page: 12,
      hitsPerPage: 100,
    },
    headers: {
      Authorization: `Client-ID Oa4e2y7RWo8gtEp8uqp59uehWCluGFLvga9x-_0qqXg`, // твій Access Key
    },
  });
  return response.data;
};
