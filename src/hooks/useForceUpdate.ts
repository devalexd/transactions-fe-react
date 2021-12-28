import { useState } from 'react';

const useForceUpdate = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  return () => setTimestamp(Date.now());
};

export default useForceUpdate;
