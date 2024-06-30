import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => {
        return (
          <li key={photo.id}>
            <PhotosGalleryItem
              avg_color={photo.avg_color}
              alt={photo.alt}
              src={photo.src}
            />
          </li>
        );
      })}
    </Grid>
  );
};
