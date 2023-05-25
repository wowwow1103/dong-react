import React from 'react';

const Shoes = ({item, i}) => {
  return (
    <>
      <div className="col-md-4">
        <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="80%" />
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </div>
    </>
  );
};

export default Shoes;
