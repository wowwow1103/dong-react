import React from 'react';
import {useNavigate} from 'react-router-dom';

const memo = () => {
  let navigate = useNavigate();
  return (
    <>
      <Link to="/detail"></Link>
    </>
  );
};

export default memo;
