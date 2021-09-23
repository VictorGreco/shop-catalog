import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Catalog from './components/catalog';

const TEST_CATALOG = [
  {
    media: '/static/wines/franz-haas-manna-schweizer.png',
    rating: '4.1',
    numberOfRates: '4.343',
    brand: 'Franz Haas',
    subBrand: 'Manna Schweizer',
    grape: 'Gewürztraminer',
    color: 'White',
    sparkly: 'No sparkly',
    foodPairing: ['pasta', 'shelfish', 'mature and hard cheese', 'lean fish', 'cured meat'],
    region: 'Südtirol - Alto Adige',
    country: 'Italy',
    description: '',
    tasteCharacteristics: ['peach', 'apple', 'apricot', 'minerals', 'honey', 'petroleum', 'tropical', 'pineaple', 'lychee'],
    wineRanking: {
      world: '1%',
      region: '2%'
    }
  },
  {
    media: '/static/wines/franz-haas-manna-schweizer.png',
    rating: '4.1',
    numberOfRates: '4.343',
    brand: 'Franz Haas',
    subBrand: 'Manna Schweizer',
    grape: 'Gewürztraminer',
    color: 'White',
    sparkly: 'No sparkly',
    foodPairing: ['pasta', 'shelfish', 'mature and hard cheese', 'lean fish', 'cured meat'],
    region: 'Südtirol - Alto Adige',
    country: 'Italy',
    description: '',
    tasteCharacteristics: ['peach', 'apple', 'apricot', 'minerals', 'honey', 'petroleum', 'tropical', 'pineaple', 'lychee'],
    wineRanking: {
      world: '1%',
      region: '2%'
    }
  }
]

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [catalog, setCatalog] = useState(TEST_CATALOG);
  const [filter, setFilter] = useState('');
  const [filteredCatalog, setFilteredCatalog] = useState(TEST_CATALOG);

  const addItemToCartHandler = (item) => {
    shoppingCart.push(item);

    setShoppingCart(shoppingCart);
  }

  useEffect(() => {

    setCatalog(TEST_CATALOG);
  }, [])

  useEffect(() => {
    if (filter !== '') {
      setFilteredCatalog(catalog.filter((item) => item.brand.toLowerCase().includes(filter)));
    } else {
      setFilteredCatalog(catalog);
    }

  }, [filter])

  return (
    <div className="App">
      <Header setFilter={setFilter} />
      <Catalog catalog={filteredCatalog} addItemToCartHandler={addItemToCartHandler} />
    </div>
  );
}

export default App;
