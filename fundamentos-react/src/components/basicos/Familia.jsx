import React, { cloneElement } from 'react';

export default (props) => {
  return (
    <div>
      {/* Forma extensa */}
      {/* {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })} */}

      {/* Forma um pouco mais abreviada */}
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};
