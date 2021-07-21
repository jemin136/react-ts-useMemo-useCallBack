import React from 'react';
import Callback from './Callback';
import Title from './Title';

export default ({ name }) => {
  const [countOne, setcountOne] = React.useState(0);
  const [countTwo, setcountTwo] = React.useState(0);

  const countOneF = () => {
    setcountOne(countOne + 1);
  };

  const countTwoF = () => {
    setcountTwo(countTwo + 1);
  };

  const isEven = React.useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 == 0;
  }, [countOne]);

  return (
    <>
      <h1>Hello {name}!</h1>
      <button onClick={countOneF}>Count one {countOne} </button>
      {isEven ? 'Even' : 'Odd'}
      <br />
      <br />
      <button onClick={countTwoF}>Count Two {countTwo} </button>
      <Callback name={'Demo of Callback'} />
    </>
  );
};
