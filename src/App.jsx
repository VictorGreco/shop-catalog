import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import './App.css';

import Header from './components/header';
import Catalog from './components/catalog';
import ShoppingCart from './components/shoppingCart';

const TEST_CATALOG = [
  {
    media: '/static/wines/franz-haas-manna-schweizer.png',
    rating: '4.1',
    numberOfRates: '4.343',
    brand: 'Franz Haas',
    subBrand: 'Manna Schweizer',
    grape: 'Gewürztraminer',
    color: 'White',
    sparkly: 'Flat',
    foodPairing: ['pasta', 'shelfish', 'mature and hard cheese', 'lean fish', 'cured meat'],
    region: 'Alto Adige',
    country: 'Italy',
    description: '',
    tasteCharacteristics: ['peach', 'apple', 'apricot', 'minerals', 'honey', 'petroleum', 'tropical', 'pineaple', 'lychee'],
    wineRanking: {
      world: '1%',
      region: '2%'
    }
  },
  {
    media: '/static/wines/donnafugata-ben-rye-passito-di-pantelleria.png',
    rating: '4.5',
    numberOfRates: '16952',
    brand: 'Donnafugata',
    subBrand: 'Ben Ryé Passito',
    grape: 'Zibibbo',
    color: 'Amber',
    sparkly: 'Flat',
    foodPairing: ['spicy food', 'sweet desserts'],
    region: 'Pantelleria',
    country: 'Italy',
    description: '',
    tasteCharacteristics: ['apricot', 'peach', 'pear', 'honey', 'stone', 'minerals', 'orange', 'marmalade', 'orange peel'],
    wineRanking: {
      world: '1%',
      region: '1%'
    }
  },
  {
    media: '/static/wines/mar-de-frades-ras-baixes-albario-atlntico.png',
    rating: '4.1',
    numberOfRates: '25644',
    brand: 'Mar de Frades',
    subBrand: 'Rías Baixes Albariño',
    grape: 'Albariño',
    color: 'White',
    sparkly: 'Sparkly',
    foodPairing: ['spicy food', 'sweet desserts'],
    region: 'Rías Baixas',
    country: 'Spain',
    description: '',
    tasteCharacteristics: ['citrus', 'lemon', 'lime', 'green apple', 'apple', 'pear', 'minerals', 'salt', 'saline'],
    wineRanking: {
      world: '1%',
      region: '1%'
    }
  },
  {
    media: '/static/wines/view-di-romans-dessimis-pinot-griggio.png',
    rating: '4.2',
    numberOfRates: '5481',
    brand: 'Vie de Romans',
    subBrand: 'Dessimis',
    grape: 'Pinot Grigio',
    color: 'Gold',
    sparkly: 'Flat',
    foodPairing: ['spicy food', 'sweet desserts'],
    region: 'Friuli',
    country: 'Italy',
    description: '',
    tasteCharacteristics: ['peach', 'pear', 'apricot', 'orange', 'citrus', 'grapefruit', 'oak', 'butter', 'vanilla'],
    wineRanking: {
      world: '1%',
      region: '1%'
    }
  }
]


function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [catalog, setCatalog] = useState(TEST_CATALOG);
  const [filter, setFilter] = useState('');
  const [filteredCatalog, setFilteredCatalog] = useState(TEST_CATALOG);
  const [openShopCart, setOpenShopCart] = useState(false);

  useEffect(() => {

    setCatalog(TEST_CATALOG);
  }, [])

  useEffect(() => {
    if (filter !== '') {
      setFilteredCatalog(catalog.filter((item) =>
        item.brand.toLowerCase().includes(filter) ||
        item.grape.toLowerCase().includes(filter) ||
        item.color.toLowerCase().includes(filter) ||
        item.sparkly.toLowerCase().includes(filter)));
    } else {
      setFilteredCatalog(catalog);
    }
  }, [filter])

  const addItemToCartHandler = (item) => {
    setShoppingCart([...shoppingCart, item]);
  }

  const removeItemFromCartHandler = (item) => {
    let cleanedArray = shoppingCart;

    for (let i = 0; i < cleanedArray.length; i++) {
      if (item.media === cleanedArray[i].media) {
        cleanedArray.splice(i, 1);
        break;
      }
    }

    setShoppingCart([...cleanedArray]);
  }

  const toggleOpenShopCartHandler = () => {
    setOpenShopCart(!openShopCart);
  }



  const renderOpenShopCart = () => {
    if (!openShopCart) {
      return null;
    }

    return (
      <Grid xs={12} md={4}>
        <ShoppingCart
          addItemToCartHandler={addItemToCartHandler}
          removeItemFromCartHandler={removeItemFromCartHandler}
          shoppingCart={shoppingCart} />
      </Grid>
    );
  }

  const renderCatalog = () => {
    return (
      <Grid xs={12} md={openShopCart ? 8 : 12}>
        <Catalog
          catalog={filteredCatalog}
          addItemToCartHandler={addItemToCartHandler}
          openShopCart={openShopCart} />
      </Grid>
    )
  }

  return (
    <div className="App">
      <Header
        setFilter={setFilter}
        shoppingCart={shoppingCart}
        toggleOpenShopCartHandler={toggleOpenShopCartHandler} />
      <Grid container>
        {renderOpenShopCart()}
        {renderCatalog()}
      </Grid>

    </div>
  );
}

export default App;
