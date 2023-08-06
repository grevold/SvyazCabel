import { Industries } from "./components/Industries/Industries";
import { Reward } from "./components/Reward/Reward";
import { BlockFormEmail } from "./components/FormEmail/BlockFormEmail";
import { Slider } from "./components/Slider/Slider";
import { Clients } from "./components/Clients/Clients";
import { ParalaxBanner } from "./components/ParalaxBanner/ParalaxBanner";
import { MapObjects } from "./components/MapObjects/MapObjects";

export function MainPage() {
  return (
    <div>
      <Slider />
      <Clients />
      <MapObjects />
      <BlockFormEmail />
    </div>
  );
}
