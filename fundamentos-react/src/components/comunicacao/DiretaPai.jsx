import React from 'react';
import DiretaFilho from './DiretaFilho';

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Eliza" idade={21} geek={true} />
      <DiretaFilho nome="Ricardo" idade={18} geek={false} />
    </div>
  );
};
