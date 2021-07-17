import React, { createContext, memo, useContext } from 'react';
import { useState } from 'react';
import { ControlledInput, MemoControlledInput } from '@/components/form/Input';
import './Context.scss';
import { ControlledCheckbox, MemoControlledCheckbox } from '../form/Checkbox';
interface IContext {
  name: string;
  setName: (e: string) => void;
  checked: boolean;
  setChecked: (e: boolean) => void;
}
const Context: IContext = {
  name: 'taehoon',
  setName: () => false,
  checked: false,
  setChecked: () => false,
};

const AppContext = createContext<IContext>(Context);

export const ContextAPI = () => {
  const [name, setName] = useState(Context.name);
  const [checked, setChecked] = useState(false);

  return (
    <AppContext.Provider value={{ name, setName, checked, setChecked }}>
      <Input />
    </AppContext.Provider>
  );
};

export const Input = () => {
  console.log('Input');
  const { name, setName } = useContext(AppContext);
  return (
    <div>
      <ControlledInput value={name} onChange={setName} />
      <Count />
    </div>
  );
};

export const Count = memo(() => {
  console.log('Count');

  const [count, setCount] = useState(0);
  const handleClickedButton = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div className="count">
        <div>{count}</div>
        <button onClick={handleClickedButton}>+</button>
      </div>
      <Checkbox />
    </>
  );
});

const Checkbox = memo(() => {
  console.log('Checkbox');

  const { name, checked, setChecked } = useContext(AppContext);

  return (
    <div>
      {name}
      <MemoControlledCheckbox value={checked} onClick={setChecked} />
    </div>
  );
});

export default ContextAPI;
