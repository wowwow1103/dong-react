import React, {useEffect, useState} from 'react';

const DetailTab = props => {
  console.log(props.tab);
  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 50);
    return () => {
      setFade(false);
    };
  }, [props.tab]);

  let [fade, setFade] = useState(false);

  return (
    <div className={`tabContents${'-0' + (props.tab + 1)} ${fade ? 'fadeIn' : 'fadeOut'}`}>
      {[<div>탭1</div>, <div>탭2</div>, <div>탭3</div>][props.tab]}
    </div>
  );
};

export default DetailTab;
