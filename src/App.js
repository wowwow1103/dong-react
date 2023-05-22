import './App.css';
import Shoes from './compnents/Shoes';
import itemList from './data/itemList';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App({children}) {
  let [apiData, setApiData] = useState();
  let [dataAll, setDataAll] = useState();
  useEffect(() => {
    axios.get(`https://codingapple1.github.io/shop/data2.json`).then(response => {
      setApiData(response.data);
    });
  }, []);

  useEffect(() => {
    setDataAll({...itemList, ...apiData});
    console.log(dataAll);
  }, [apiData]);
  return (
    <>
      <div className="itme-list container">
        <div className="row">
          {itemList.map((item, i) => {
            return <Shoes item={item} i={i} />;
          })}
        </div>
      </div>
      <button className="text-center">ss</button>
      {children}
    </>
  );
}

export default App;
