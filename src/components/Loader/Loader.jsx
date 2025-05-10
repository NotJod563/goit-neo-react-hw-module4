import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <ClipLoader color="#3f51b5" size={48} speedMultiplier={1.2} />
    </div>
  );
};

export default Loader;