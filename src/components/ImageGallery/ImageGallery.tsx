
import { UnsplashImage } from "../../services/interface";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"

type ImageGalleryProps = {
  images: UnsplashImage[],
  handleCardClick: (image: UnsplashImage) => void
}

const ImageGallery = ({ images, handleCardClick }: ImageGalleryProps) => {
  
  return (
    <ul className={s.list}>
      {images.map(image => (
        <li key={image.id}>
              <ImageCard src={image.urls.small} alt={image.alt_description} onClick ={() => handleCardClick(image)}
/>
        </li>
      ))}
      
    </ul>
  );
};
export default ImageGallery;