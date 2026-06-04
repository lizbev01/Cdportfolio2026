# Debug and Re-Deploy

## Step 1: Check what's in your dist folder

Run on your local machine:

```bash
cd dist
ls -la
```

**Tell me:** Do you see `.nojekyll` file listed?

## Step 2: If .nojekyll is MISSING from dist:

```bash
# Go back to project root
cd ..

# Create .nojekyll in dist after build
npm run build
touch dist/.nojekyll
echo "lizbevan.com" > dist/CNAME

# Now deploy
cd dist
ls -la  # Verify .nojekyll is there
```

## Step 3: Deploy from dist folder

```bash
# Make sure you're in the dist folder
pwd  # Should show: .../Cdportfolio2026/dist

# Check if git is initialized
ls -la | grep .git

# If NO .git folder, initialize:
git init
git add -A
git commit -m "Deploy"
git branch -M gh-pages

# Set remote (use SSH)
git remote add origin git@github.com:lizbev01/Cdportfolio2026.git

# Or if SSH didn't work, remove and try HTTPS with token:
# git remote remove origin
# git remote add origin https://github.com/lizbev01/Cdportfolio2026.git

# Push
git push -f origin gh-pages
```

## What Went Wrong Last Time?

Possible issues:
1. `.nojekyll` wasn't in dist folder before you did git add
2. Git push failed silently
3. You weren't in the dist directory

## Verify Push Succeeded:

After git push, you should see:
```
To github.com:lizbev01/Cdportfolio2026.git
 + abc1234...def5678 gh-pages -> gh-pages (forced update)
```

If you see authentication errors or other errors, the push failed.

