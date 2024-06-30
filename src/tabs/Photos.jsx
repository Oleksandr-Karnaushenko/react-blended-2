import { getPhotos } from 'apiService/photos';
import {
  Form,
  PhotosGallery,
  Text,
  Button,
  Loader,
  ImageModal,
} from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({})

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page,
        );
        if (total_results === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevState => [...prevState, ...photos]);
        setShowLoadMore(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const onSubmit = text => {
    setQuery(text);
    setImages([]);
    setPage(1);
    setShowLoadMore(false);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage({});
  };

  const openModal = (image) => {
    setModalIsOpen(true);
    setModalImage(image)
  };
  return (
    <>
      <Form onSubmit={onSubmit} />
      {images.length > 0 && (
        <PhotosGallery photos={images} openModal={openModal} />
      )}
      {isEmpty && <Text textAlign="center">We can not find photos 🔎</Text>}
      {showLoadMore && <Button onClick={onLoadMore}>Load more</Button>}
      {error && (
        <Text textAlign="center">Error. Something get wrong! {error}</Text>
      )}
      {isLoading && <Loader />}

      <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} src={modalImage.src } alt={modalImage.alt } />
    </>
  );
};
