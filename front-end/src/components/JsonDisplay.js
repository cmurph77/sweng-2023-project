import React from 'react';

const JsonDisplay = ({ data }) => {
  return (
    <div>
      <pre style ={{ fontSize: '14px '}} >{JSON.stringify(data, null, 1)}</pre>
    </div>
  );
};

export default JsonDisplay;
