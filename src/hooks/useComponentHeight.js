import { useEffect, useState } from 'react';

const useComponentHeight = (componentID) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (document.getElementById(componentID)) {
      setHeight(document.getElementById(componentID).clientHeight);
    }
  }, [height]);

  return height;
};

export default useComponentHeight;
