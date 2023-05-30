import SocialCards from "./SocialCards";
import "./SocialCards.css";
import { data } from "../../db/network"

const socialCardsInformation = data
export default function App() {
  return (
    <div>
      <SocialCards socialCards={socialCardsInformation} />
    </div>
  );
}
