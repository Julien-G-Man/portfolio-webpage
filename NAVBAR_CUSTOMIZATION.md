# Navbar Customization Guide

The navbar has dynamic styling that changes based on scroll position. Here's where you can customize it:

## File Location
`components/header.tsx`

## Key Settings to Customize

### 1. Scroll Trigger Point
**Line 16:** Change the scroll distance that triggers the navbar color change:
```javascript
setScrolled(window.scrollY > 100)  // Change 100 to any pixel value
```
- Increase the number to trigger the change later (further down the page)
- Decrease it to trigger the change sooner

### 2. Navbar Background Colors
**Line 28-30:** Modify background transparency in the `scrolled` state:

Current:
```javascript
dark:bg-black/40 bg-white/70 backdrop-blur-md
```

Customize:
- `dark:bg-black/40` - Dark mode background (black with 40% opacity). Change to `dark:bg-black/20` for more transparency or `dark:bg-black/60` for more opaque
- `bg-white/70` - Light mode background (white with 70% opacity). Change to `bg-white/50` for more transparent or `bg-white/90` for more opaque

### 3. Text Color Transitions
**Throughout the file:** Text colors change based on scroll state using this pattern:
```javascript
${scrolled ? 'text-black dark:text-white' : 'text-white'}
```

To customize:
- When scrolled: `text-black dark:text-white` (black text in light mode, white in dark mode)
- When not scrolled: `text-white` (white text)

### 4. Logo/Branding Color
**Line 33-35:** The "Julien G. Manana" logo changes color on scroll:
```javascript
${scrolled ? 'text-accent' : 'dark:text-white text-white'}
```
- `text-accent` = #C41414 (red) when scrolled
- `text-white` = white when not scrolled

To change the red color, edit in `app/globals.css`:
```css
--accent: #C41414;  /* Change this hex value */
```

### 5. Border Colors on Scroll
**Line 58 & 108:** Border colors transition:
```javascript
${scrolled ? 'border-black/20 dark:border-white/20' : 'border-white/20'}
```

### 6. Backdrop Blur
**Line 28:** Adjust the blur effect:
```javascript
backdrop-blur-md  // Options: backdrop-blur-none, backdrop-blur-sm, backdrop-blur-md, backdrop-blur-lg
```

## Common Customizations

### Make navbar stay white longer
Change line 16 from `window.scrollY > 100` to `window.scrollY > 300`

### Make navbar fully opaque when scrolled
Change line 29-30 from `bg-white/70` to `bg-white/95`

### Use different accent color for logo
Edit `app/globals.css` and change `--accent: #C41414;` to your preferred hex color

### Keep navbar always visible with background
Change line 28-30 to:
```javascript
dark:bg-black/80 bg-white/80 backdrop-blur-md
```

## Notes
- All transitions use `duration-300` (300ms). To make transitions faster/slower, change to `duration-200`, `duration-500`, etc.
- The navbar is fixed to the top and uses z-index 50 to stay above other content
- Mobile menu styling follows the same scroll-based logic
