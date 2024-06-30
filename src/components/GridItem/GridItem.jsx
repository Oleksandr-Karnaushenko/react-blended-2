import style from './GridItem.module.css';

export const GridItem = ({ children }) => {
  return <div className={style.item}>{children}</div>;
};
