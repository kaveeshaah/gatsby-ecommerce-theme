// ...existing code...
// ...existing code...
// ...existing code...
// import { generateMockProductData } from '../../helpers/mock';
import React, { useState, useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import SizeList from '../SizeList';
import SwatchList from '../SwatchList';

import { generateMockProductData } from '../../helpers/mock';
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import * as styles from './QuickView.module.css';
import { toOptimizedImage } from '../../helpers/general';

const QuickView = (props) => {
  const { close, buttonTitle = 'Add to Bag', product } = props;
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const colorOptions = product?.colorOptions || [];
  const sizeOptions = product?.sizeOptions || [];
  const [activeSwatch, setActiveSwatch] = useState(colorOptions[0] || null);
  const [activeSize, setActiveSize] = useState(sizeOptions[0] || null);

  const handleAddToBag = () => {
    close();
    showNotification();
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Select Options</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{product?.name}</span>
          <div className={styles.price}>
            <CurrencyFormatter amount={product?.price}></CurrencyFormatter>
          </div>
          <div className={styles.productImageContainer}>
            <img alt={product?.alt} src={toOptimizedImage(product?.image)}></img>
          </div>
        </div>

        {colorOptions.length > 0 && (
          <div className={styles.sectionContainer}>
            <SwatchList
              swatchList={colorOptions}
              activeSwatch={activeSwatch}
              setActiveSwatch={setActiveSwatch}
            />
          </div>
        )}

        {sizeOptions.length > 0 && (
          <div className={styles.sectionContainer}>
            <SizeList
              sizeList={sizeOptions}
              activeSize={activeSize}
              setActiveSize={setActiveSize}
            />
          </div>
        )}

        <Button onClick={() => handleAddToBag()} fullWidth level={'primary'}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default QuickView;
