import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
// import axios from "axios";
import { fetchImages } from "../services/api";

console.log("hello");

// import "./App.css";

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const getData = async () => {
      const response = await fetchImages();
      setImage(response.hits);
    };
  }, []);
  const onSubmit = (values) => {
    console.log("Шукаємо:", values.search);
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
    </div>
  );
}
export default App;
