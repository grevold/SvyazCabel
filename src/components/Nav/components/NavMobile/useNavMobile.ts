import { useState } from "react";

export function useNavMobile() {
  const [state, setState] = useState<boolean | undefined>(undefined);
  function handleClick() {
    setState((prevState) => !prevState);
  }
  return { state, handleClick };
}
