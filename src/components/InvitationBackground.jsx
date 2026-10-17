import { BACKGROUNDS } from "../data/invitation.js";

export default function InvitationBackground({ background = "backgroundImage1" }) {
  const images = typeof background === "string"
    ? BACKGROUNDS[background]
    : background;
  const selectedImages = images ?? BACKGROUNDS.backgroundImage1;

  return (
    <div
      className="invitation-background"
      style={{
        "--background-mobile": `url("${selectedImages.mobile}")`,
        "--background-desktop": `url("${selectedImages.desktop}")`,
      }}
      aria-hidden="true"
    />
  );
}
