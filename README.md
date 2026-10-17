# Wedding Invitation React App

A responsive Vite + React wedding invitation with a cinematic opening, nine navigable invitation screens, shared animation components, and centralized theme styles.

## Project structure

```text
src/
├── App.jsx                         # App state and top-level composition
├── main.jsx                        # React entry point
├── index.css                       # Global styles and theme import
├── components/
│   ├── animation/Animated.jsx      # Shared entrance animation wrappers
│   ├── opening/InvitationOpening.jsx
│   ├── EventDetails.jsx            # Shared Haldi/Nikaah venue layout
│   ├── InvitationBackground.jsx    # Background selection
│   ├── InvitationNavigation.jsx    # Previous/next controls
│   ├── JanuaryCalendar.jsx         # Reusable January 2027 calendar
│   └── MusicController.jsx         # Audio playback and mute controls
├── data/
│   └── invitation.js               # Asset paths, screen order, calendar data
├── screens/                        # One component per invitation screen
└── styles/
    ├── invitation.css              # Shared screen and component styles
    ├── opening.css                 # Opening animation styles
    └── theme.css                   # Fonts, colors, spacing, and timing tokens
public/
└── assets/                         # Backgrounds, artwork, and wedding music
```

Screen order and background assignments are maintained in `src/data/invitation.js`. Screen content lives in individual files under `src/screens`; shared layouts and controls belong in `src/components`. Theme tokens can be customized in `src/styles/theme.css`.

## Assets

Keep the existing artwork and music in `public/assets/`. The app refers to those files by their `/assets/...` paths. Responsive background pairs are configured in `src/data/invitation.js`:

- Opening: `invitation-background.png` on mobile and `invitation-desktop-background.jpg` on desktop.
- Haldi: `haldi-background.jpeg` on mobile and `haldi-desktop-background.jpeg` on desktop.
- Ceremony and remaining screens use their existing background artwork at both sizes until separate variants are available.

The opening scene and invitation screens switch to their desktop artwork at the `768px` breakpoint. Backgrounds use `cover` sizing to preserve proportions without distortion.

## Run locally

Install Node.js (LTS), then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Invitation experience

The invitation begins with the closed panels and seal. Click **Open invitation** to reveal the invitation screens. Use the previous/next controls to navigate and **Replay opening** to return to the opening animation. Music autoplay is attempted, but some browsers require a user gesture; the top-right controls play/pause and mute/unmute the music.
