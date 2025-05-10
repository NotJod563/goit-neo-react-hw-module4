import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass={css.loader}
        colors={['#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5']}
      />
    </div>
  );
};

export default Loader;
