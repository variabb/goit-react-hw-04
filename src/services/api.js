import axios from "axios";

export const fetchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "Oa4e2y7RWo8gtEp8uqp59uehWCluGFLvga9x-_0qqXg",
      query: "nature", 
    },
  });
  return response.data;
};

