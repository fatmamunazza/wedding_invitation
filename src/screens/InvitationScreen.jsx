import ClosingScreen from "./ClosingScreen.jsx";
import CeremonyScreen from "./CeremonyScreen.jsx";
import DuaScreen from "./DuaScreen.jsx";
import HaldiScreen from "./HaldiScreen.jsx";
import MeetTheCoupleScreen from "./MeetTheCoupleScreen.jsx";
import NikaahScreen from "./NikaahScreen.jsx";
import NikkahIntroductionScreen from "./NikkahIntroductionScreen.jsx";
import OpeningScreen from "./OpeningScreen.jsx";
import SaveTheDateScreen from "./SaveTheDateScreen.jsx";

const SCREEN_COMPONENTS = {
  "screen-1": OpeningScreen,
  "screen-2": CeremonyScreen,
  "screen-3": SaveTheDateScreen,
  "screen-4": HaldiScreen,
  "screen-5": MeetTheCoupleScreen,
  "screen-6": NikkahIntroductionScreen,
  "screen-7": NikaahScreen,
  "screen-8": DuaScreen,
  "screen-9": ClosingScreen,
};

export default function InvitationScreen({ screenId }) {
  const Screen = SCREEN_COMPONENTS[screenId];
  return Screen ? <Screen /> : null;
}
