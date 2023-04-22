import { useState, useEffect, useRef } from 'react';
import { useUtilities } from '~/services';

interface TypeWriterProps {
  content: string[];
  typeSpeed?: number;
  awaitDuration?: number;
  repeat?: boolean;
}

const Typewriter = ({ content, typeSpeed = 300, awaitDuration = 3000, repeat = false }: TypeWriterProps) => {
  const type = useRef<'write' | 'delete'>('write');
  const [text, setText] = useState<string>('');
  const { sleep } = useUtilities();
  const index = useRef(-1);

  const writer = {
    ['write']: () => setText(content[index.current].slice(0, text.length + 1)),
    ['delete']: () => setText(content[index.current].slice(0, text.length - 1)),
  };

  useEffect(() => {
    if (repeat && index.current === content.length - 1 && text === '' && type.current === 'delete') index.current = -1;
    if (text === '') { index.current += 1; type.current = 'write'; } // prettier-ignore
    if (text === content[index.current]) type.current = 'delete';

    sleep(text === content[index.current] || text === '' ? awaitDuration : typeSpeed).then(writer[type.current]);
  }, [text]);

  return (
    <>
      {text} <span className="text-primary blinking select-none">▐</span>
    </>
  );
};

export default Typewriter;
