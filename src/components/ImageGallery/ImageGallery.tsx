import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { UnsplashImage } from "../../apiService";

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map(({ urls: { small, regular }, id, alt_description }) => {
        return (
          <li className={css.galleryItem} key={id}>
            <ImageCard
              path={small}
              desc={alt_description || "No description"}
              onClick={() =>
                onImageClick({ id, alt_description, urls: { small, regular } })
              }
            />
          </li>
        );
      })}
    </ul>
  );
}
