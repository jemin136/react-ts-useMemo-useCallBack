import React, { useCallback } from 'react';
import Count from './Count';
import Title from './Title';
import ButtonC from './Button';
export default ({ name }) => {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(0);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  },[salary]);

  const incrementAge =  useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <ButtonC handleClick={incrementAge}> Increment Age</ButtonC>
      <Count text="Salary" count={salary} />
      <ButtonC handleClick={incrementSalary}>Increment Salary </ButtonC>
    </>
  );
};
