import React from 'react';

const BackBtn = (props) => {
  return (
    <button onClick={props.onClick} className={`${props.className} ${classes[""]}`}>
      {props.children}
    </button>
  );
};

export default BackBtn;