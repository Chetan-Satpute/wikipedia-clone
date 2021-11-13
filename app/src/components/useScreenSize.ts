import { useEffect, useState } from 'react';

function useScreenSize() {
  const [screen, setScreen] = useState<[number, number]>([0,0]);

  useEffect(() => {
    setScreen([window.innerWidth, window.innerHeight]);

    function resizeHandler() {
      setScreen([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  return screen;
}

export default useScreenSize;
