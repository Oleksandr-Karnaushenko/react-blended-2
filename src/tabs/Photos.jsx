import { getPhotos } from 'apiService/photos';
import { Form, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        const { photos } = await getPhotos(query, page);
        setImages(prevState => [...prevState, ...photos]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, query]);

  const onSubmit = text => {
    setQuery(text);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      {images.length > 0 && <PhotosGallery photos={images} />}
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
