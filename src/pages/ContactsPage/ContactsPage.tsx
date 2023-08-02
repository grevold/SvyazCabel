import { BlockFormEmail } from "../MainPage/components/FormEmail/BlockFormEmail";
import { BlockPhones } from "./components/BlockPhones/BlockPhones";
import { Location } from "./components/Location/Location";

export function ContactsPage() {
  return (
    <>
      <Location />
      <BlockPhones />
      <BlockFormEmail />
    </>
  );
}
