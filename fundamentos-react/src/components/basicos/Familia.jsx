import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default (props) => {
  return (
    <div>
      <FamiliaMembro nome="Maria" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Alana" {...props} />
      <FamiliaMembro nome="Julia" sobrenome="Souza" />
    </div>
  );
};
