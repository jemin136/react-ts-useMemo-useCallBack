import React from 'react';

const ButtonC = ({ handleClick, children }) => {
  console.log(`Rendering Button - ${children}`);
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
};

export default React.memo(ButtonC);
