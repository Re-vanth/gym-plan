# 💪 Gym Plan - PWA Workout Tracker

A Progressive Web App (PWA) for tracking your gym workouts and fitness progress. Works offline and can be installed on any device!

![Gym Plan PWA](https://img.shields.io/badge/PWA-Ready-6366f1?style=for-the-badge)
![Offline](https://img.shields.io/badge/Offline-Capable-22c55e?style=for-the-badge)
![Mobile](https://img.shields.io/badge/Mobile-First-22d3ee?style=for-the-badge)

## ✨ Features

- 🏋️ **Pre-built Workout Plans** - Push, Pull, Legs, Upper/Lower, Full Body
- 📝 **Exercise Tracking** - Log weights and reps for each exercise
- 📊 **Progress Stats** - Track total workouts, weekly activity, and streaks
- 📚 **Exercise Library** - Browse and search 30+ exercises
- 📴 **Offline Support** - Works without internet connection
- 📱 **Installable** - Add to home screen on any device
- 🌙 **Dark Theme** - Easy on the eyes

## 🚀 Deploy to GitHub Pages

### Option 1: Quick Deploy

1. **Create a new GitHub repository** named `gym-plan` (or any name you prefer)

2. **Push this code to GitHub:**
   ```bash
   cd /path/to/Gym-plan
   git init
   git add .
   git commit -m "Initial commit - Gym Plan PWA"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gym-plan.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

4. **Access your PWA** at: `https://YOUR_USERNAME.github.io/gym-plan/`

### Option 2: Use GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow for automatic deployment. After pushing to GitHub:

1. Go to **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. The site will deploy automatically on each push

## 🛠️ Local Development

To run locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
Gym-plan/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline caching
├── css/
│   └── style.css       # Styles
├── js/
│   └── app.js          # App logic
├── icons/
│   └── icon.svg        # App icon (generate PNGs from this)
└── README.md           # This file
```

## 🎨 Generate App Icons

To generate all required PNG icons from the SVG:

### Using an Online Tool:
1. Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload `icons/icon.svg`
3. Download and extract the icons

### Using ImageMagick (CLI):
```bash
cd icons
for size in 72 96 128 144 152 192 384 512; do
  convert icon.svg -resize ${size}x${size} icon-${size}.png
done
```

### Using macOS Preview:
1. Open `icons/icon.svg` in a browser
2. Take a screenshot or export as PNG
3. Resize to required sizes (72, 96, 128, 144, 152, 192, 384, 512)

## 📱 PWA Features

This app includes all PWA requirements:

- ✅ **Web App Manifest** - App metadata and icons
- ✅ **Service Worker** - Offline caching and background sync
- ✅ **HTTPS** - Required for PWA (GitHub Pages provides this)
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **App Shell Architecture** - Fast loading
- ✅ **Install Prompt** - "Add to Home Screen" support

## 🔧 Customization

### Change Theme Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary: #6366f1;      /* Main accent color */
    --primary-dark: #4f46e5; /* Darker accent */
    --bg-dark: #1a1a2e;      /* Background */
    --bg-card: #16213e;      /* Card background */
}
```

### Add New Exercises
Edit the `exerciseDatabase` object in `js/app.js`:

```javascript
const exerciseDatabase = {
    push: [
        { name: 'Your Exercise', sets: 3, reps: '10-12', muscle: 'chest' },
        // ...
    ],
    // ...
};
```

## 📄 License

MIT License - Feel free to use and modify!

---

Made with 💪 for fitness enthusiasts
