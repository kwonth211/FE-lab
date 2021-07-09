import React, { useRef, useState, FormEvent, ElementRef } from 'react';
import { ControlledInput, UnControlledInput } from './Input';
import './Form.scss';

type injectType = ElementRef<typeof UnControlledInput>;

const Form = () => {
  const [value, setValue] = useState('');
  const [inputComponentValue, setInputComponentValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const injectRef = useRef<injectType>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('1. controlledForm : ', value);
    console.log('2. unContolledForm :', inputRef?.current?.value);
    console.log('3. injectRef', injectRef?.current?.value);
  };

  return (
    <div className="root">
      <form id="test" onSubmit={handleSubmit}>
        <div className="row">
          Pure Input
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <div className="row">
          Ref Input
          <input ref={inputRef} />
        </div>
        <div className="row">
          Controlled Input Component
          <ControlledInput value={inputComponentValue} onChange={setInputComponentValue} />
        </div>
        <div className="row">
          UnControlled Input Component
          <UnControlledInput ref={injectRef} />
        </div>
        <div className="button-wrapper">
          <button className="submit-button">저장</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
