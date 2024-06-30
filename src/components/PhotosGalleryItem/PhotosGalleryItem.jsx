import styles from './PhotosGalleryItem.module.css';
import { GridItem } from '..';

export const PhotosGalleryItem = ({ avg_color, alt, src, openModal }) => {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img
          src={src.large}
          alt={alt}
          onClick={() => openModal({ src: src.large, alt })}
        />
      </div>
    </GridItem>
  );
};
