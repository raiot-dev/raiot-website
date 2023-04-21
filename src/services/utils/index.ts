export const useUtilities = () => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const detectMobile = (navigator: Navigator) => {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  };

  return { sleep, detectMobile };
};
