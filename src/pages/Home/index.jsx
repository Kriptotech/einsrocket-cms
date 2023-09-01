import React, { useContext, useEffect } from 'react'
import styles from './style.module.css'
import global from '../../global.module.css'
import Header from '../../components/Header'
import MyContext from '../../context/MyContext'
import SearchBar from '../../components/Searchbar'

const Home = () => {
  const { setCurrentRoute } = useContext(MyContext)

  useEffect(() => {
    setCurrentRoute('Inicio')
  }, [])
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <SearchBar />
      </div>
    </div>
  )
}

export default Home
