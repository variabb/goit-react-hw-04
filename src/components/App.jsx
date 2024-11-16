import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
// import axios from "axios";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import LoadMore from "./LoadMore/LoadMore";
import toast from "react-hot-toast";

console.log("hello");

// import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nbPages, setNbPages] = useState(0);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);


 useEffect(() => {
   if (nbPages === page) {
     setIsLoading(false); 
     toast.success("That’s all!"); 
   }
 }, [nbPages, page]);
  useEffect(() => {
    if (page > 1) {
     
      fetchImages();
    }
  }, [page]);

 useEffect(() => {
   const getData = async () => {
     try {
       setIsLoading(true);
       setIsError(false);
       const { results, nbPages } = await fetchImages(query, page);
       setNbPages(nbPages);
       setImages((prev) => {
         const uniqueImages = [...prev, ...results].filter(
           (image, index, self) =>
             self.findIndex((img) => img.id === image.id) === index
         );
         return uniqueImages;
       });
     } catch (error) {
       console.error("Error fetching images:", error);
       setIsError(true);
     } finally {
       setIsLoading(false);
     }
   };
   getData();
 }, [query, page]);

  const onSubmit = (query) => {
  if (query.trim() === "") {
    toast.error("Пошуковий запит не може бути порожнім!");
    return;
  }
  setImages([]);
  setNbPages(0); // Скидаємо кількість сторінок
  setQuery(query);
  setPage(1);
  toast.success("Запит оновлено!");
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {isError && <h2>Щось сталось! Онови сторінку...</h2>}
      {images.length > 0 && nbPages !== page && <LoadMore setPage={setPage} />}
    </div>
  );
}
export default App;
