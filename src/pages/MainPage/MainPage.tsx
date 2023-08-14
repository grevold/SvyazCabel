import { BlockFormEmail } from "./components/FormEmail/BlockFormEmail";
import { Slider } from "./components/Slider/Slider";
import { Clients } from "./components/Clients/Clients";
import { MapObjects } from "./components/MapObjects/MapObjects";
import { ListWorks } from "./components/ListWorks/ListWorks";

export function MainPage() {
  return (
    <div>
      <Slider />
      <ListWorks />
      <Clients />
      <MapObjects />
      <BlockFormEmail />
    </div>
  );
}
