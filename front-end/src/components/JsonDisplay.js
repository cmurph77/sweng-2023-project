import React from 'react';

const JsonDisplay = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default JsonDisplay;
