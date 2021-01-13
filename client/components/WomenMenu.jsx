import React from 'react';
import styles from '../styles/menu.css';

function WomenMenu() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.category}>
            <td className={styles.categoryItems}>SHOES</td>
            <td className={styles.categoryItems}>APPAREL</td>
            <td className={styles.categoryItems}>ACCESSORIES</td>
            <td className={styles.categoryItems}>COLLECTIONS</td>
          </tr>
          <tr className={styles.itemRow}>
            <td className={styles.item}>Running Shoes</td>
            <td className={styles.item}>T-Shirts</td>
            <td className={styles.item}>FaceMasks</td>
            <td rowspan="2" className={styles.treeDasher}>CLASSIC TREE DASHER HUES</td>
          </tr>
          <tr className={styles.itemRow}>
            <td className={styles.item}>Everyday Sneakers</td>
            <td className={styles.item}>Sweaters</td>
            <td className={styles.item}>Lace Kits</td>
          </tr>
          <tr className={styles.itemRow}>
            <td className={styles.item}>Slip-Ons</td>
            <td className={styles.item}>Jackets</td>
            <td className={styles.item}>Insoles</td>
            <td className={styles.itemEmpty}>&nbsp;</td>
          </tr>
          <tr className={styles.itemRow}>
            <td className={styles.item}>Flats</td>
            <td className={styles.item}>Underwear</td>
            <td className={styles.item}>Gift Cards</td>
            <td rowspan="2" className={styles.mizzles}>MIZZLES</td>
          </tr>
          <tr className={styles.itemRow}>
            <td className={styles.item}>Boat Shoes</td>
            <td className={styles.item}>Socks</td>
            <td className={styles.itemEmpty}>&nbsp;</td>
          </tr>
          <tr className={styles.itemRow}>
            <td className={styles.item}>High Tops</td>
            <td className={styles.itemEmpty}>&nbsp;</td>
            <td className={styles.itemEmpty}>&nbsp;</td>
            <td className={styles.itemEmpty}>&nbsp;</td>
          </tr>
          <tr className={styles.itemRow}>
            <td className={styles.item}>Weather Repellent Shoes</td>
            <td className={styles.itemEmpty}>&nbsp;</td>
            <td className={styles.itemEmpty}>&nbsp;</td>
            <td className={styles.itemEmpty}>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WomenMenu;