import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../logo.svg'
import styles from './Header.module.css'

const Header = () => {
  return <Navbar className={styles.navbar}>
      <Navbar.Header>
        <Navbar.Brand className={styles.brand}>
          <img className={styles.logo} src={logo} alt="logo" />
          <div className={styles.name}>
            <span className={styles.nameBold}>Coco</span> <span className={styles.nameLight}>eventi</span>
          </div>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav className={styles.items}>
        <NavItem>Home</NavItem>
        <NavItem>Eventi</NavItem>
        <NavItem>Gallery</NavItem>
        <NavItem>Contattaci</NavItem>
      </Nav>
    </Navbar> 
}

export default Header
