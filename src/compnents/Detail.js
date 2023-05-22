import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import itemList from '../data/itemList';
import styled from 'styled-components';

const Detail = () => {
  useEffect(() => {
    setTimeout(() => {
      setNone(false);
    }, 2000);
  }, []);

  let [none, setNone] = useState(true);

  return (
    <>
      {none === true ? (
        <div className="alert alert-warning text-center">
          2초 이내에 누르면 할인
          <button
            style={{
              marginLeft: '10px',
              borderRadius: '10px',
              padding: '10px 20px',
              backgroundColor: 'tomato',
              color: 'white',
              border: 'none',
            }}
          >
            클릭
          </button>
        </div>
      ) : null}
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{itemList[0].title}</h4>
            <p>{itemList[0].content}</p>
            <input
              type="text"
              style={{padding: '5px'}}
              onInput={e => {
                isNaN(e.target.value) ? console.log('문자') : console.log('숫자');
              }}
            />
            <p>{itemList[0].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
