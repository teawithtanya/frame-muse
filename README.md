# Frame Muse

A modern, responsive photography portfolio website template designed for professional photographers and visual artists.

## Features

### 🎨 Modern Design

- Clean, minimalist interface with Apple-inspired typography
- Custom color palette with dark navy/olive accents and light cloudy gray backgrounds
- Seamless hero section with full-width background imagery
- Optimized for visual content with high contrast and elegant spacing

### 📱 Fully Responsive

- Mobile-first design approach
- Adaptive layouts for desktop, tablet, and mobile devices
- Touch-optimized interactions including swipe navigation
- Maintains optimal viewing experience across all screen sizes

### 🖼️ Multiple Page Templates

#### Home Page (`index.html`)

- Bold hero section with background image and large stylized typography
- Compact album preview grid (8 thumbnails) with "+12" overlay indicator
- Quick navigation to featured content

#### Albums Page (`albums.html`)

- Grid layout displaying all photo albums
- Hover effects with "View Album" overlay
- Album metadata (date, photo count)
- Links to individual album views

#### Album View Page (`album.html`)

- Masonry-style grid layout supporting mixed aspect ratios
- Portrait photos (1:2 ratio) span 2 rows
- Landscape photos (2:1 ratio) span 2 columns
- Maintains 2-column minimum on mobile for optimal space usage
- Photo titles and descriptions with semi-transparent overlays

#### About Page (`about.html`)

- Contributor profiles with professional headshots
- Biographical information and specialization details
- Responsive grid layout for team members

### 🔍 Lightbox Gallery

- Full-screen image viewer with smooth transitions
- Navigation controls (arrows, keyboard, swipe gestures)
- Image captions with title and description
- Touch-optimized for mobile devices
- Keyboard shortcuts (ESC to close, arrow keys to navigate)

### ✨ Interactive Features

- Hover effects on album cards and photo items
- Smooth CSS transitions and animations
- Click-to-view functionality for all images
- Swipe gesture support for mobile navigation
- Dense grid packing with CSS Grid auto-flow

### 🎯 Technical Highlights

- Pure HTML, CSS, and vanilla JavaScript (no frameworks required)
- CSS Grid and Flexbox for modern layouts
- Custom CSS variables for easy theme customization
- System font stack for optimal performance
- Touch event handling for mobile interactions
- Semantic HTML structure for accessibility

## File Structure

```
frame-muse/
├── index.html          # Homepage with hero and album previews
├── albums.html         # Full albums listing page
├── album.html          # Individual album view with masonry grid
├── about.html          # About/contributors page
├── styles.css          # All styles including responsive layouts
├── script.js           # Lightbox and interaction logic
└── README.md           # This file
```

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --bg-color: #f4f5f7;
  --text-primary: #132026;
  --text-secondary: #4a5a63;
  --accent-color: #2c4a52;
  --card-bg: #ffffff;
}
```

### Typography

The template uses system fonts by default. To customize, update the `font-family` declarations in `styles.css`.

### Images

Replace image URLs throughout the HTML files with your own photography. The template uses Unsplash URLs as placeholders.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari 12+
- Android Chrome 80+

## License

Free to use for personal and commercial projects.

---

Built with ❤️ for photographers and visual storytellers.
