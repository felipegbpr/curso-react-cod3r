import React from 'react';

export default (props) => {
  const cb = props.quandoClicar;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(e) => {
          cb('João', 64, true);
        }}
      >
        Fornecer Infomarções
      </button>
    </div>
  );
};
