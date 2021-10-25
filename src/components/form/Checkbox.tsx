import React, { ChangeEvent, memo } from 'react';

interface ControlledCheckboxProps {
  value?: boolean;
  onClick?: (e: boolean) => void;
}
export const ControlledCheckbox = ({ value, onClick }: ControlledCheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onClick?.(e.target.checked);
      }}
    />
  );
};
export const MemoControlledCheckbox = memo(({ value, onClick }: ControlledCheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onClick?.(e.target.checked);
      }}
    />
  );
});
