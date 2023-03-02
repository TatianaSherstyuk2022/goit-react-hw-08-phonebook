import { Bars } from 'react-loader-spinner';

import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.spinner}>
      <Bars
        height="80"
        width="80"
        color="#5056ab"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
