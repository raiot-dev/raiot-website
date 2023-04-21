export const useUtilities = () => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  return { sleep };
};
