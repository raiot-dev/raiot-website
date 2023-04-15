let IDX = 256;
let HEX: string[] = [];
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

/**
 * @param len number
 * @returns string
 * @see [Hexoid](https://github.com/lukeed/hexoid)
 */
export const getUUID = (len?: number): string => {
  const length = len ?? 16;
  let str = '';
  let num = 0;
  if (!str || num === 256) {
    str = '';
    num = ((1 + length) / 2) | 0;
    while (num--) str += HEX[(256 * Math.random()) | 0];
    str = str.substring((num = 0), length - 2);
  }
  return str + HEX[num++];
};
