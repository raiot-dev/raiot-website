import { useRef, useState } from 'react';

interface HashingProps {
  name: string;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01'.split('');

const Hashing = ({ name }: HashingProps) => {
  const hashingSpanReference = useRef(null);
  const [hashName, setHashName] = useState(name);

  const decryptName = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      const hash: string[] = [];
      hashName.split('').map((_, i) => {
        if (i < iterations) hash[i] = name.split('')[i];
        else hash.push(ALPHABET[Number((Math.random() * 28).toFixed(0))]);
      });

      setHashName(hash.join(''));

      if (iterations > name.length) clearInterval(interval);

      iterations += 1 / 2;
    }, 25);
  };

  return (
    <span ref={hashingSpanReference} onMouseOver={decryptName}>
      {hashName}
    </span>
  );
};

export default Hashing;
