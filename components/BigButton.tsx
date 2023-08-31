import React, { ReactNode } from 'react';
import styles from './BigButton.module.css';

interface Props {
  onClick: () => void;
  children: ReactNode; // 添加 children 属性
}

const BigButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.BigButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default BigButton;
