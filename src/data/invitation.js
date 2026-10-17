export const ASSETS = {
  mobileBackground: "/assets/invitation-background.png",
  desktopBackground: "/assets/invitation-desktop-background.jpg",
  leftPanel: "/assets/left-side.png",
  rightPanel: "/assets/right-side.png",
  seal: "/assets/seal.png",
  music: "/assets/wedding-music.mp3",
};

export const BACKGROUNDS = {
  backgroundImage1: {
    mobile: ASSETS.mobileBackground,
    desktop: ASSETS.desktopBackground,
  },
  backgroundImage2: {
    mobile: "/assets/details-background.jpg",
    desktop: "/assets/details-background.jpg",
  },
  backgroundImage3: {
    mobile: "/assets/blessing-background.jpg",
    desktop: "/assets/blessing-background.jpg",
  },
  backgroundImage4: {
    mobile: "/assets/haldi-background.jpeg",
    desktop: "/assets/haldi-desktop-background.jpeg",
  },
};

export const SCREENS = [
  { id: "screen-1", background: BACKGROUNDS.backgroundImage1, sectionLabel: "Opening" },
  { id: "screen-2", background: BACKGROUNDS.backgroundImage2, sectionLabel: "Wedding Ceremony" },
  { id: "screen-3", background: BACKGROUNDS.backgroundImage3, sectionLabel: "Save the Date" },
  { id: "screen-4", background: BACKGROUNDS.backgroundImage4, sectionLabel: "Haldi" },
  { id: "screen-5", background: BACKGROUNDS.backgroundImage3, sectionLabel: "Meet the Couple" },
  { id: "screen-6", background: BACKGROUNDS.backgroundImage3, sectionLabel: "Munazza & Tajdar" },
  { id: "screen-7", background: BACKGROUNDS.backgroundImage3, sectionLabel: "Nikaah" },
  { id: "screen-8", background: BACKGROUNDS.backgroundImage3, sectionLabel: "Dua" },
  { id: "screen-9", background: BACKGROUNDS.backgroundImage3, sectionLabel: "Closing" },
];

export const JANUARY_2027_ROWS = [
  [0, 0, 0, 0, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
];
