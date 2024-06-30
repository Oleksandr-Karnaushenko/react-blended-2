import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (!query) return;
    getPhotos(query, page);
  }, [page, query]);
  const onSubmit = text => {
    setQuery(text);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
