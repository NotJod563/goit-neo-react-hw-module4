import { useEffect, useState } from 'react';
import { fetchImages } from './services/api';
import { Toaster, toast } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import css from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchImages(query, page);
        setImages(prev => (page === 1 ? data.results : [...prev, ...data.results]));
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery === query) {
      toast('Enter a new search term');
      return;
    }

    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = image => {
    setModalData({
      url: image.urls.regular,
      alt: image.alt_description || 'Image',
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <header className={css.header}>
        <SearchBar onSubmit={handleSearch} />
      </header>

      <main className={css.appContainer}>
        <Toaster position="top-right" />
        {error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && page < totalPages && !isLoading && (
          <LoadMoreBtn onClick={loadMore} />
        )}
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          modalData={modalData}
        />
      </main>
    </>
  );
};

export default App;
