import { useState } from "react";

const useExitAnimation = ({ className, timeout = 300 }) => {
  const [animatedClassName, setClassName] = useState(className);

  const handleExitAnimation = ({ exitFunc = () => {} }) => {
    setClassName(`${className}-exiting`);
    setTimeout(() => {
      exitFunc();
      setClassName(className);
    }, timeout);
  };

  return {
    handleExitAnimation,
    animatedClassName,
  };
};

export default useExitAnimation;
