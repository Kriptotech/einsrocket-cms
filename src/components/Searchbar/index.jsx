import React from 'react'
import styles from './style.module.css'

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Pesquisar" />
    </div>
  )
}

export default SearchBar
