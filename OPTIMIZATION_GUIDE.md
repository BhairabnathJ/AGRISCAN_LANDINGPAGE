# Performance & Accessibility Optimization Guide

## Image Optimization

### WebP Conversion
For production, convert all images to WebP format with PNG/JPG fallbacks:

```bash
# Install sharp for image optimization
npm install sharp

# Example conversion script
npx sharp -i image.png -o image.webp
```

### Usage Example
```tsx
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.png" type="image/png" />
  <img src="image.png" alt="Description" loading="lazy" />
</picture>
```

### Lazy Loading
Use the `LazyImage` component for all images below the fold:

```tsx
import { LazyImage } from './components/ui';

<LazyImage
  src="/path/to/image.jpg"
  alt="Description"
  placeholderSrc="/path/to/tiny-placeholder.jpg"
  className="w-full h-64"
/>
```

## Animation Optimization

### GPU Acceleration
All animations use `transform` and `opacity` for 60fps performance:
- ✅ `transform: translateX/Y/Z, scale, rotate`
- ✅ `opacity`
- ❌ Avoid: `width`, `height`, `top`, `left`, `margin`

### Reduced Motion Support
The app automatically respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Accessibility

### Focus Management
- All interactive elements have visible focus states
- Focus indicators use high-contrast outlines
- Tab order follows logical document flow

### Screen Reader Support
- Semantic HTML structure maintained
- ARIA labels on interactive elements
- Skip links for navigation

### Keyboard Navigation
- All functionality accessible via keyboard
- Focus trap in modals
- Escape key closes overlays

### Color Contrast
- WCAG AA compliant contrast ratios
- Primary text: 7:1 contrast
- Secondary text: 4.5:1 contrast

## Performance Checklist

- [x] Lazy load images below fold
- [x] Use WebP with fallbacks (setup ready)
- [x] GPU-accelerated animations
- [x] Reduced motion support
- [x] Skeleton loading states
- [x] Intersection Observer for scroll animations
- [x] Code splitting (Vite default)
- [x] Tree shaking (Vite default)

## Testing

### Performance
```bash
# Run Lighthouse
npm run build
npx serve dist
# Open Chrome DevTools > Lighthouse
```

### Accessibility
```bash
# Install axe-core
npm install -D @axe-core/cli

# Run accessibility tests
npx axe http://localhost:5173
```

### Browser Testing
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Production Optimizations

### Build Command
```bash
npm run build
```

### CDN Recommendations
- Use Cloudflare or similar CDN
- Enable Brotli compression
- Cache static assets (images, fonts)
- Set appropriate cache headers

### Monitoring
- Google Analytics for user metrics
- Sentry for error tracking
- Web Vitals for performance

## Future Enhancements

1. **Progressive Web App (PWA)**
   - Service worker for offline support
   - App manifest for installability

2. **Advanced Loading**
   - Blur-hash placeholders
   - Prioritized above-fold loading

3. **Performance Budget**
   - Max 200KB JavaScript bundle
   - Max 500KB total page weight
   - LCP under 2.5s
