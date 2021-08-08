import React, { ChangeEvent } from 'react';

{
  /* <AddWithInput n1={2} n2={3} /> */
}
const AddWithInput = (props: any) => {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    const newN2 = Number(input.value);
    props.n2 = newN2;
  }
  return (
    <div>
      {props.n1} + <input type="number" value={props.n2} onChange={handleInputChange} /> ={' '}
      {props.n1 + props.n2}
    </div>
  );
};

export default AddWithInput;
