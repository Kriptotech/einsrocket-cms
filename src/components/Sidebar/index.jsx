import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import dark from './dark.module.css'
import { Link } from 'react-router-dom'

import { BiHomeAlt2 } from 'react-icons/bi'
import { SlFeed } from 'react-icons/sl'
import { PiSuitcaseSimpleThin } from 'react-icons/pi'
import { SlSettings } from 'react-icons/sl'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'

import MyContext from '../../context/MyContext'

const Routes = [
  {
    route: '/',
    name: 'Inicio'
  },
  {
    route: '/',
    name: 'Conteudos'
  },
  {
    route: '/',
    name: 'Settings'
  }
]

const iconMobileSize = 15
const name = 'Delfim Celestino Amisse Pastola'
const email = 'denycelestino21@gmail.com'

const Sidebar = ({ children }) => {
  const {
    mobile,
    setMobile,
    currentRoute,
    setCurrentRoute,
    darkMode,
    setDarkMode
  } = useContext(MyContext)

  return (
    <div className={darkMode ? dark.container : styles.container}>
      {mobile && (
        <div
          className={
            darkMode ? dark.sidebar_mobile : styles.sidebar_mobile
          }
        >
          <AiOutlineClose
            size={25}
            onClick={() => setMobile(!mobile)}
            className={styles.close_button}
          />
          <div
            data-aos="fade-right"
            className={
              darkMode
                ? dark.mobilesidebar_content
                : styles.mobilesidebar_content
            }
          >
            <div className={darkMode ? dark.header : styles.header}>
              <div className={darkMode ? dark.avatar : styles.avatar}>
                <img src="https://github.com/denycelestino.png" />
              </div>
              <h4>Delfim Celestino</h4>
              <p>denycelestino21@gmail.com</p>
            </div>

            <div className={darkMode ? dark.routes : styles.routes}>
              {Routes.map((item, index) => (
                <Link
                  onClick={() => setCurrentRoute(item.name)}
                  style={{
                    backgroundColor:
                      item.name == currentRoute ? '#7895ff' : '',
                    color: item.name == currentRoute ? '#FFF' : ''
                  }}
                  key={index}
                >
                  {item.name == 'Inicio' && (
                    <BiHomeAlt2 size={iconMobileSize} />
                  )}
                  {item.name == 'Conteudos' && (
                    <SlFeed size={iconMobileSize} />
                  )}
                  {item.name == 'Settings' && (
                    <PiSuitcaseSimpleThin size={iconMobileSize} />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>
            <div
              className={darkMode ? dark.settings : styles.settings}
            >
              <Link>
                <SlSettings size={iconMobileSize} />
                Definições
              </Link>
              <Link>
                <IoIosNotificationsOutline size={iconMobileSize} />
                Notificações
                <span
                  className={
                    darkMode ? dark.notification : styles.notification
                  }
                >
                  22
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div
        className={
          darkMode ? dark.sidebar_desktop : styles.sidebar_desktop
        }
      >
        <div
          className={
            darkMode
              ? dark.sidebar_desktop_content
              : styles.sidebar_desktop_content
          }
        >
          <div className={darkMode ? dark.header : styles.header}>
            <div className={darkMode ? dark.avatar : styles.avatar}>
              <img src="https://github.com/denycelestino.png" />
            </div>
            <h4>Delfim Celestino</h4>
            <p>denycelestino21@gmail.com</p>
          </div>
          <div className={darkMode ? dark.routes : styles.routes}>
            {Routes.map((item, index) => (
              <Link
                onClick={() => setCurrentRoute(item.name)}
                style={{
                  backgroundColor:
                    item.name == currentRoute ? '#7895ff' : '',
                  color: item.name == currentRoute ? '#FFF' : ''
                }}
                key={index}
              >
                {item.name == 'Inicio' && (
                  <BiHomeAlt2 size={iconMobileSize} />
                )}
                {item.name == 'Conteudos' && (
                  <SlFeed size={iconMobileSize} />
                )}
                {item.name == 'Settings' && (
                  <PiSuitcaseSimpleThin size={iconMobileSize} />
                )}
                {item.name}
              </Link>
            ))}
          </div>
          <div className={darkMode ? dark.settings : styles.settings}>
            <Link>
              <SlSettings size={iconMobileSize} />
              Definições
            </Link>
            <Link>
              <IoIosNotificationsOutline size={iconMobileSize} />
              Notificações
              <span
                className={
                  darkMode ? dark.notification : styles.notification
                }
              >
                22
              </span>
            </Link>
          </div>
        </div>
      </div>
      <main className={darkMode ? dark.main : styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Sidebar
