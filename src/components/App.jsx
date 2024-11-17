import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import toast from "react-hot-toast";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nbPages, setNbPages] = useState(0);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (nbPages === page) {
      setIsLoading(false);
      toast.success("That’s all!");
    }
  }, [nbPages, page]);

  useEffect(() => {
    if (!query) return;
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
    setNbPages(0); 
    setQuery(query);
    setPage(1);
    toast.success("Запит оновлено!");
  };

 
  const openModal = (image) => {
    setSelectedImage(image);
  };


  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {isError && <h2>Щось сталось! Онови сторінку...</h2>}
      {images.length > 0 && nbPages > page && <LoadMoreBtn setPage={setPage} />}
      {selectedImage && (
        <ImageModal image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
