import './App.css';
import Shoes from './compnents/Shoes';
import itemList from './data/itemList';

function App({children}) {
  return (
    <>
      <div className="itme-list container">
        <div className="row">
          {itemList.map((item, i) => {
            return <Shoes item={item} i={i} />;
          })}
        </div>
      </div>
      {children}
    </>
  );
}

export default App;
