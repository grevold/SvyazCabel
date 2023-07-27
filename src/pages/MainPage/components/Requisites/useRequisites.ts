import { useState, useEffect } from "react";

export function useRequisites() {
  const [state, setState] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setState((prevState) => !prevState);
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return { state };
}
