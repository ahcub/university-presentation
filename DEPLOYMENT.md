# GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit: Crypto Evolution Timeline"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 3. Access Your Site

Your site will be available at:
```
https://ahcub.github.io/university-presentation/
```

It may take 1-2 minutes for the site to go live after enabling Pages.

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Update timeline data"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes within a few minutes.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the repository root with your domain
2. Configure DNS settings with your domain provider
3. In GitHub Pages settings, add your custom domain

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling Pages
- Check that the branch is set to `main`
- Ensure the folder is set to `/ (root)`

### Changes not appearing?
- Clear your browser cache
- Wait a few minutes for GitHub to rebuild
- Check the Actions tab for build status

### 404 Error?
- Verify the repository is public
- Check that `index.html` is in the root directory
- Ensure GitHub Pages is enabled in settings

## Features to Customize

### Adding New Events

Edit `data.js` and add events to the `cryptoTimeline` array:

```javascript
{
    date: "Month Day, Year",
    title: "Event Title",
    description: "Detailed description...",
    category: "bitcoin", // or ethereum, defi, nft, layer2, regulation, innovation
    tags: ["Tag1", "Tag2"],
    impact: "Impact description",
    ecosystem: "Ecosystem Name"
}
```

### Changing Colors

Edit `styles.css` and modify the CSS variables in `:root`:

```css
:root {
    --bitcoin-color: #f7931a;
    --ethereum-color: #627eea;
    /* ... other colors */
}
```

### Adding New Categories

1. Add color variable in `styles.css`
2. Add filter button in `index.html`
3. Add legend item in `index.html`
4. Add category styling in `styles.css`

## Performance

The site is optimized for performance:
- No external dependencies
- Pure vanilla JavaScript
- Minimal CSS
- Fast load times
- Mobile responsive

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Analytics (Optional)

To add Google Analytics:

1. Get your GA tracking ID
2. Add this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## Support

For issues or questions:
- Check GitHub Issues
- Review the README.md
- Test locally first with `open index.html`

---

**Happy Deploying! 🚀**

