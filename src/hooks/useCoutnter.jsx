import { useCallback, useState } from 'react';

export const useCoutnter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10)
      setCount((prevcount) => prevcount + 1);
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((previsShow) => !previsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay }
};
