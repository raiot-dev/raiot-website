import { useState, useEffect, useRef } from 'react';

import { TypeWriterConfiguration } from '~/models/visuals';
import { useUtilities } from '~/services';

interface TypeWriterProps extends TypeWriterConfiguration {
  className?: string;
}

export const Typewriter = ({
  content,
  cursor = '▐',
  typeSpeed = 300,
  awaitDuration = 3000,
  repeat = false,
  className = '',
}: TypeWriterProps) => {
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
    if (repeat && text === content[index.current]) type.current = 'delete';

    sleep(text === content[index.current] || text === '' ? awaitDuration : typeSpeed).then(writer[type.current]);
  }, [text]);

  return (
    <span className={`${className} select-none`}>
      {text}
      <span className="animation-blinking text-primary">{cursor}</span>
    </span>
  );
};
