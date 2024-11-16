import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
// import axios from "axios";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";

console.log("hello");

// import "./App.css";

function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(false);

        const response = await fetchImages();
        console.log(response);
        setImage(response.results);
      } catch (error) {
        console.error("Error fetching images:", error);
        setIsLoading(true);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const onSubmit = (values) => {
    console.log("Шукаємо:", values.search);
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {isError && <h2>Щось сталось! Онови сторінку...</h2>}
    </div>
  );
}
export default App;
