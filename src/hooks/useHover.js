import { useState } from 'react';

const useHover = () => {
  const [hover, setHover] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  return [hover, hoverProps];
};

export default useHover;
