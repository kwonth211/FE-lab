import React, { useState, useImperativeHandle, useRef, forwardRef, useEffect, memo } from 'react';

interface ControlledInputProps {
  value?: string;
  onChange?: (e: string) => void;
}

export const ControlledInput = memo(({ value, onChange }: ControlledInputProps) => {
  useEffect(() => {
    console.log('render Controlled Input');
  });

  return (
    <input
      value={value}
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
    />
  );
});

type RefType = {
  value: string | undefined;
};

export const UnControlledInput = forwardRef<RefType>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('render UnControlledInput Input');
  });
  useImperativeHandle(
    ref,
    () => ({
      get value() {
        return inputRef.current?.value;
      },
    }),
    []
  );

  return <input ref={inputRef} />;
});
