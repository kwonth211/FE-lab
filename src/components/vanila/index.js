import React from 'react';

const test = require('./index.html');

const index = () => {
  return <div dangerouslySetInnerHTML={{ __html: test }} />;
};
export default index;
