# Enable GitHub Pages - Step by Step

## On GitHub.com:

1. Go to your repository:
   https://github.com/lizbev01/Cdportfolio2026

2. Click **Settings** (top right)

3. In the left sidebar, click **Pages**

4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" from dropdown
   - Folder: Select "/ (root)"
   - Click **Save**

5. Wait 1-2 minutes, then refresh the page

6. You'll see a message at the top:
   "Your site is live at https://lizbev01.github.io/Cdportfolio2026/"

## Important Notes:

- The "gh-pages" branch will be created automatically when you run `pnpm run deploy` from your local machine
- If you don't see "gh-pages" branch yet, you need to run the deploy command first

## What to Do on Your Local Machine:

```bash
# Make sure you have the latest changes
git pull origin main

# Install dependencies (includes gh-pages package)
pnpm install

# Build and deploy to GitHub Pages
pnpm run deploy
```

This will:
1. Build your site (creates /dist folder)
2. Create/update gh-pages branch
3. Push built files to that branch
4. GitHub Pages will automatically serve from gh-pages branch

## Your Site URL:

https://lizbev01.github.io/Cdportfolio2026/
