import React from 'react'
import styles from './BigButton.module.css'

interface Props {
  onClick: () => void
}

const BigButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.BigButton} onClick={onClick}>
      {children}
    </button>
  )
}

export default BigButton
