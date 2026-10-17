# Wedding Invitation React App

A responsive Vite + React starter for the animated wedding invitation opening.

## 1. Add your assets

Copy these existing files into `public/assets/`:

- `invitation-background.png` — mobile background
- `invitation-desktop-background.jpg` — desktop background
- `left-side.png`
- `right-side.png`
- `ribbon.png`
- `seal.png`
- `wedding-music.mp3`

The application references them using `/assets/...`. Keep the filenames exactly as listed.

## 2. Run locally

Install Node.js (LTS), then from this project folder run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

To verify a production build:

```bash
npm run build
npm run preview
```

## Opening experience

The app starts with the closed panels, ribbon, and seal. Click **Open invitation** to start the coordinated animation: the seal falls, the ribbon releases, and both panels slide outward in parallel. The background underneath is revealed, followed by a simple opening title. The opening does not replay on React re-renders; use **Replay opening** to intentionally reset it.

Music autoplay is attempted, but some browsers block sound until a user gesture. Use the music control at the top right to play/pause or mute/unmute.

## Notes

- The panels currently use `object-fit: fill` so they meet at the center across the viewport. If your PNGs have different transparent padding or are not designed as half-screen panels, adjust `.invitation-panel`, `.panel-left`, and `.panel-right` in `src/styles/opening.css`.
- The current post-opening content is a placeholder focused on the opening experience. Add the full invitation pages in `InvitationContent` once the opening is approved.
