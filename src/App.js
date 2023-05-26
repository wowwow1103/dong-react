import './App.css';
import Shoes from './compnents/Shoes';
import itemList from './data/itemList';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App({children}) {
  let [dataAll, setDataAll] = useState(itemList);
  let [apiData, setApiData] = useState();
  let [btnClick, setBtnClick] = useState(2);
  let [imgIdx, setImgIdx] = useState(2);

  useEffect(() => {
    axios.get(`https://codingapple1.github.io/shop/data${imgIdx}.json`).then(response => {
      setApiData(response.data);
    });
  }, [btnClick]);

  return (
    <>
      <div className="itme-list container">
        <div className="row">
          {dataAll.map((item, i) => {
            return <Shoes item={item} i={i} key={item.id} />;
          })}
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          className="btn btn-primary"
          onClick={() => {
            if (btnClick == 2) {
              setDataAll([...itemList, ...apiData]);
              setBtnClick(3);
              setImgIdx(3);
            } else if (btnClick == 3) {
              setDataAll([...dataAll, ...apiData]);
              setBtnClick(4);
            } else {
              alert('더이상 없습니다.');
            }
          }}
        >
          더보기
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setDataAll(itemList);
            setBtnClick(2);
            setImgIdx(2);
          }}
        >
          닫기
        </button>
      </div>
      {children}
    </>
  );
}

export default App;
