import { useCallback, useState } from 'react';

const useInput = (initialState) => {
  const [value, setter] = useState(initialState);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, setter, handler];
};

export default useInput;
