import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import itemList from '../data/itemList';
import styled from 'styled-components';
import DetailTab from './DetailTab';

const Detail = () => {
  let [none, setNone] = useState(true);
  let [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 50);
    setTimeout(() => {
      setNone(false);
    }, 2000);
  }, []);

  let [tab, setTab] = useState(0);

  return (
    <div className={`${load ? 'fadeOut' : 'fadeIn'}`}>
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
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              eventKey="link0"
              onClick={() => {
                setTab(0);
              }}
            >
              버튼01
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                setTab(1);
              }}
            >
              버튼02
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link2"
              onClick={() => {
                setTab(2);
              }}
            >
              버튼03
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <DetailTab tab={tab}></DetailTab>
      </div>
    </div>
  );
};

export default Detail;
