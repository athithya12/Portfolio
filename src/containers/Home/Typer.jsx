import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';

const Typer = () => {
  const [loop, setLoop] = useState(true);

  useEffect(() => {
    setLoop(true);
  }, [loop]);

  return (
    <>
      {loop ? (
        <Typist onTypingDone={() => setLoop(false)}>
          Software Engineer
          <Typist.Backspace count={17} delay={500} />
          Full Stack Developer
          <Typist.Backspace count={20} delay={500} />
        </Typist>
      ) : null}
    </>
  );
};

export default Typer;
