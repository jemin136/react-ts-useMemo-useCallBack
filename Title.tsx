import React from 'react';

const Title = ({ title }) => {
  console.log('callBack Hooks Title');
  return (
    <>
      <h1>Demo of UseCallback {title}</h1>
    </>
  );
};

export default React.memo(Title);
