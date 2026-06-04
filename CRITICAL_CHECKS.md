# Critical Debugging Steps

## 1. Check gh-pages Branch

Visit: https://github.com/lizbev01/Cdportfolio2026/tree/gh-pages

You should see:
- .nojekyll ← MUST BE HERE
- index.html
- assets/ folder with .js files

**If .nojekyll is NOT on gh-pages branch, that's the problem!**

## 2. Check What JavaScript URL is Failing

On lizbevan.com:
- Right-click → View Page Source
- Look for the <script> tag
- What's the src attribute? (something like /assets/index-xxxxx.js)

Copy that URL and visit it directly:
https://lizbevan.com/assets/index-xxxxx.js

Does it show JavaScript code or download a file?

## 3. Verify Custom Domain CNAME

Visit: https://github.com/lizbev01/Cdportfolio2026/tree/gh-pages

Is there a file called "CNAME" with "lizbevan.com" inside it?

## 4. Manual Deploy (If Above Fails)

Run this on your local machine to manually create gh-pages:

```bash
# Build
npm run build

# Go into dist
cd dist

# Add .nojekyll
echo "" > .nojekyll

# Add CNAME for custom domain
echo "lizbevan.com" > CNAME

# Initialize and push
git init
git add -A
git commit -m "Manual deploy with .nojekyll and CNAME"
git branch -M gh-pages
git remote add origin https://github.com/lizbev01/Cdportfolio2026.git
git push -f origin gh-pages

# Go back
cd ..
```

Wait 2 minutes, then check lizbevan.com

