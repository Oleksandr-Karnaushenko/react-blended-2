import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ photos, openModal }) => {
  return (
    <Grid>
      {photos.map(photo => {
        return (
          <li key={photo.id}>
            <PhotosGalleryItem
              avg_color={photo.avg_color}
              alt={photo.alt}
              src={photo.src}
              openModal={openModal}
            />
          </li>
        );
      })}
    </Grid>
  );
};
