import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter( (current) => current + value);
    // Añadir el (current) => current, me permite facilitar las pruebas en el futuro.
  };

  const decrement = (value = 1) => {
    // if (counter === 0) return;

    setCounter(current => current - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};