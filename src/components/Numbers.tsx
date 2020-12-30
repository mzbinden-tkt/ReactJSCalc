import React, { FC } from 'react';
import Button from './Button';
import { ButtonClickHandler } from './Button/index';

type Props = {
  onClickNumber: ButtonClickHandler,
};

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const renderButtons= (onClickNumber:ButtonClickHandler ) =>{
  
  const renderButton = (iterator: number) => (
    <Button key={iterator} text={iterator.toString()} clickHandler={onClickNumber} />
  )

  return numbers.map(renderButton);
}
const Numbers: FC<Props> = ({ onClickNumber }) => (
  <section className="numbers">{renderButtons(onClickNumber)}</section>
);

export default Numbers;
