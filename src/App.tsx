import { useState } from 'react';
import { fetchImages } from './services/api';
import { UnsplashImage } from './services/interface';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar'
import toast from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from "./components//ImageModal/ImageModal";




function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<any> (null);
  
  

  const getImagesData = async (newQuery: string, newPage = 1) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const data = await fetchImages({ query: newQuery, page: newPage });
      
      setImages((prev) => (newPage === 1 ? data : [...prev, ...data]));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeQuery = (newQuery: string) => {
    if (newQuery === query) {
      toast.error("Please enter a new search query!");
      return;
    }

    setQuery(newQuery);
    setPage(1);
    setImages([]);
    getImagesData(newQuery, 1); 
  };

  const handleChangePage = () => {
    if (!isLoading) {
      const nextPage = page + 1;
      setPage(nextPage);
      getImagesData(query, nextPage); 
    }
  };



const handleCardClick = (image: UnsplashImage) => {
    setSelectedImage(image);
  }

const closeModal = () => {
  setSelectedImage(null);
}

  return (
    <>
      <SearchBar onSubmit={handleChangeQuery} />
      {images.length > 0 && <ImageGallery images={images} handleCardClick={ handleCardClick} />}
      {images.length > 0 && !isLoading && <LoadMoreBtn handleChangePage={handleChangePage}/>}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {selectedImage && <ImageModal image={selectedImage}
      isOpen ={!!selectedImage}
    onRequestClose={closeModal}/>}
    </>
  );
}

export default App;
