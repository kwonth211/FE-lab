import React from 'react';
import Datetime from 'react-datetime';
import './ReactDatetime.scss';
export interface ReactDatetimeProps {
  children?: React.ReactNode;
}

const ReactDatetime = ({ children }: ReactDatetimeProps) => {
  return <Datetime dateFormat={'DD-MMM-YYYY'} timeFormat={true} />;
};
export default ReactDatetime;
