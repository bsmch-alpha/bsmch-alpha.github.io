export const disableScrolling = () => {
  const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

  // if scroll happens, set it to the previous value
  window.onscroll = function () {
    window.scrollTo(LeftScroll, TopScroll);
  };
};

export const enableScrolling = () => {
  window.onscroll = () => {};
};
