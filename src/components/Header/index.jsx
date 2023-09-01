import React, { useContext } from 'react'
import styles from './style.module.css'
import dark from './dark.module.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsSun, BsMoon } from 'react-icons/bs'
import MyContext from '../../context/MyContext'
import Switch from 'react-switch'

const Header = () => {
  const { mobile, setMobile, darkMode, setDarkMode } =
    useContext(MyContext)

  function Theme() {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <header
        className={
          darkMode ? dark.mobile_header : styles.mobile_header
        }
      >
        <div className={styles.left}>
          <h2 className={styles.title}>EINSROCKET CMS</h2>
          <div className={darkMode ? dark.mode : styles.mode}>
            {darkMode ? <BsMoon size={18} /> : <BsSun size={18} />}
            <Switch
              onColor="#7895ff"
              className={darkMode ? dark.switch : styles.switch}
              checkedIcon={<BsSun color="#FFF" size={18} />}
              uncheckedIcon={<BsMoon color="#FFF" size={18} />}
              offHandleColor={'#7895ff'}
              height={20}
              onChange={Theme}
              checked={darkMode}
            />
          </div>
        </div>
        <div className={styles.right}>
          {!mobile && (
            <BiMenuAltRight
              onClick={() => setMobile(!mobile)}
              size={30}
            />
          )}
        </div>
      </header>

      <header
        className={
          darkMode ? dark.desktop_header : styles.desktop_header
        }
      >
        <div className={styles.left}>
          <h2 className={styles.title}>EINSROCKET CMS</h2>
          <div className={darkMode ? dark.mode : styles.mode}>
            {darkMode ? <BsMoon size={18} /> : <BsSun size={18} />}
            <Switch
              onColor="#7895ff"
              className={darkMode ? dark.switch : styles.switch}
              checkedIcon={<BsSun color="#FFF" size={18} />}
              uncheckedIcon={<BsMoon color="#FFF" size={18} />}
              offHandleColor={'#7895ff'}
              height={20}
              onChange={Theme}
              checked={darkMode}
            />
          </div>
        </div>
        <div className={styles.right}></div>
      </header>
    </>
  )
}

export default Header
