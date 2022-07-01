const getRandomIntegerLikeSlot = (): number => {
  // range:0~65535
  const randomInteger = Math.floor(Math.random() * 65536);
  return randomInteger;
};

const getRandomInteger = (min: number, max: number): number => {
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomInteger;
};

const isBetweenNumber = (specifiyedNum: number, min: number, max: number): boolean => {
  if (min <= specifiyedNum && specifiyedNum <= max) {
    return true;
  } else return false;
};

const getRoundedNumber = (specifiedDigits: number, num: number): string => {
  return num.toFixed(specifiedDigits);
};

const getZeroPaddingNumber = (num: number): string => {
  return ('000' + num).slice(-3);
};

export { getRandomIntegerLikeSlot, getRandomInteger, isBetweenNumber, getRoundedNumber, getZeroPaddingNumber };
