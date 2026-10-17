import { BACKGROUNDS } from "../data/invitation.js";

export default function InvitationBackground({ background = "backgroundImage1" }) {
  const image = BACKGROUNDS[background] ?? BACKGROUNDS.backgroundImage1;

  return (
    <div
      className="invitation-background"
      style={{ backgroundImage: `url("${image}")` }}
      aria-hidden="true"
    />
  );
}
