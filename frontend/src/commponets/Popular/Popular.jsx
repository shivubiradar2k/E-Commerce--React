import React, { useEffect, useState } from 'react';
import './Pooular.css';  // Fixed typo
import Item from '../Item/Item';

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((res) => res.json())
      .then((data) => setPopularProducts(data));
  }, []);

  console.log(popularProducts);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1> {/* Fixed typo */}
      <hr/>
      <div className="popular-item">
        {popularProducts.map((item) => {
          return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
