import { Industries } from "./components/Industries/Industries";
import { Reward } from "./components/Reward/Reward";
import { BlockFormEmail } from "./components/FormEmail/BlockFormEmail";
import { Slider } from "./components/Slider/Slider";
import { Clients } from "./components/Clients/Clients";

export function MainPage() {
  return (
    <div>
      <Slider />
      <Clients />
      <Industries />
      <Reward />
      <BlockFormEmail />
    </div>
  );
}
