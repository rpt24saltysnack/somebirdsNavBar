import React, { useState } from 'react';
import MenMenu from './MenMenu.jsx';
import WomenMenu from './WomenMenu.jsx';
import styles from '../styles/navbar.css';

function NavBar() {
  const [selection, setSelection] = useState('none');

  const handleClick = (e) => {
    let buttonPressed = e.target.textContent.toLowerCase();
    if (selection === buttonPressed) {
      setSelection('none');
    } else {
      setSelection(buttonPressed);
    }
  }

  const closeMenu = () => {
    setSelection('none');
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftLinks}>
          <div className={styles.linkDiv}>
            {selection !== 'men' && <span className={styles.link} onClick={handleClick}>MEN</span>}
            {selection === 'men' && <span className={styles.link} onClick={handleClick}><u>MEN</u></span>}
          </div>
          <div className={styles.linkDiv} >
            {selection !== 'women' && <span className={styles.link} onClick={handleClick}>WOMEN</span>}
            {selection === 'women' && <span className={styles.link} onClick={handleClick}><u>WOMEN</u></span>}
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.linkDiv}>
            <span className={styles.link} onClick={closeMenu}>somebirds</span>
          </div>
        </div>
        <div className={styles.rightLinks}>
          <div className={styles.linkDiv}>
            <span className={styles.link} onClick={closeMenu}>OUR&nbsp;MATERIALS</span>
          </div>
          <div className={styles.linkDiv}>
            <span className={styles.link} onClick={closeMenu}>STORES</span>
          </div>
          <div className={styles.linkDiv}>
            <div className={styles.link} onClick={closeMenu}><img className={styles.svg} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/user.svg"></img></div>
          </div>
          <div className={styles.linkDiv}>
            <div className={styles.link} onClick={closeMenu}><img className={styles.svg} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/help.svg"></img></div>
          </div>
          <div className={styles.linkDiv}>
            <div className={styles.link} onClick={closeMenu}><img className={styles.svg} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/shoppingCart.svg"></img></div>
          </div>
        </div>
      </div>
      <div className={styles.navbarFooter}></div>
      {selection !== 'none' &&
      <div>
        <div className={styles.dropDownWindow}>
            {selection === 'men' && <MenMenu />}
            {selection === 'women' && <WomenMenu />}
        </div>
        <div className={styles.pageBlanket} onClick={closeMenu}></div>
      </div>
      }
    </div>
  )
}

export default NavBar;