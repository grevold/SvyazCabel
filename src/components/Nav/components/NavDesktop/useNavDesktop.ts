import { useState } from "react";

export function useNavDesktop() {
  const [state, setState] = useState({ tel: false, email: false });
  function handleClickTel() {
    setState((prevState) => ({ tel: !prevState.tel, email: false }));
  }
  function handleClickEmail() {
    setState((prevState) => ({ email: !prevState.email, tel: false }));
  }
  return { state, handleClickTel, handleClickEmail };
}
