import { useEffect, useState } from "react";

const Counter = ({ targetNumber, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 100);
    const intervalTime = targetNumber === 48 ? 40 : 20;

    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        setCount(currentNumber);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <h1 className="text-10xl">
      {count}
      {suffix}
    </h1>
  );
};
export default Counter;
