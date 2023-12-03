import { useRef, useState } from 'react';

interface HashingProps {
  text: string;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01'.split('');

export const Hashing = ({ text }: HashingProps) => {
  const hashingSpanReference = useRef(null);
  const [hashName, setHashName] = useState(text);

  const decryptName = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      const hash: string[] = [];
      hashName.split('').forEach((_, i) => {
        if (i < iterations) hash[i] = text.split('')[i];
        else hash.push(ALPHABET[Number((Math.random() * ALPHABET.length).toFixed(0))]);
      });

      setHashName(hash.join(''));

      if (iterations > text.length) clearInterval(interval);

      iterations += 1 / (2 / (text.length / 10));
    }, 25);

    // ! if the interval is cleared too fast, the last letter might be lost -> this is a fix
    if (text !== hashName) setHashName(text);
  };

  return (
    <span ref={hashingSpanReference} onMouseOver={decryptName}>
      {hashName}
    </span>
  );
};
