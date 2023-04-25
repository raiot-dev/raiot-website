import { useRef, useState } from 'react';

interface HashingProps {
  name: string;
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Hashing = ({ name }: HashingProps) => {
  const hashingSpanReference = useRef(null);
  const [hashName, setHashName] = useState(name);

  const decryptName = () => {
    setInterval(() => {
      const hash: string[] = [];
      hashName.split('').map((_, i) => {
        hash.push(alphabet[Number((Math.random() * 26).toFixed(0))]);
      });
      setHashName(hash.join(''));
    }, 50);
  };

  return (
    <span ref={hashingSpanReference} onMouseOver={decryptName}>
      {hashName}
    </span>
  );
};

export default Hashing;
