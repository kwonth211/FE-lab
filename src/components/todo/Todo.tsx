import React from 'react';
import { useState, FC, memo } from 'react';
import { ControlledInput } from '../form/Input';
import './Todo.scss';
export interface TodoProps {
  children?: React.ReactNode;
}

const appendTodoItem = () => {
  const $todoInput = document.getElementById('todoInput') as HTMLInputElement;

  const inputValue = $todoInput?.value;
  if (inputValue) {
    const $todoItem = document.createElement('div');
    $todoItem.className = 'todoItem';
    $todoItem.textContent = inputValue;

    const $deleteButton = document.createElement('button');
    $deleteButton.textContent = '삭제';

    $todoItem.appendChild($deleteButton);

    const $todoItems = document.getElementsByClassName('todoItemBox')[0];
    $todoItems.appendChild($todoItem);

    $deleteButton.addEventListener('click', () => {
      $todoItems.removeChild($todoItem);
    });

    $todoInput.value = '';
  }
};

const Todo: FC<TodoProps> = () => {
  const [items, setItems] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const handleButtonClicked = () => {
    setItems(items.concat(value));
    setValue('');
  };

  const handleDeleteClickd = (index: number) => () => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleButtonClickWithJS = () => {
    appendTodoItem();
  };
  return (
    <div className="root">
      <div className="row">
        <div>
          React
          <br />
          <ControlledInput value={value} onChange={setValue} />{' '}
          <button onClick={handleButtonClicked}>추가</button>
          {items?.map((item, i) => (
            <TodoItem key={item} value={item} index={i} handleDeleteClickd={handleDeleteClickd} />
          ))}
        </div>
        <div>
          Vanila
          <br />
          <input id="todoInput" /> <button onClick={handleButtonClickWithJS}>추가</button>
          <div className="todoItemBox"></div>
        </div>
      </div>
    </div>
  );
};

interface TodoItemProps {
  value: string;
  handleDeleteClickd: (index: number) => () => void;
  index: number;
}

const TodoItem: FC<TodoItemProps> = memo(({ value, handleDeleteClickd, index }) => {
  return (
    <div className="todoItem">
      <input type="checkbox" />
      {value}
      <button onClick={handleDeleteClickd(index)}>삭제</button>
    </div>
  );
});
export default Todo;
