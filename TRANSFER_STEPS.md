# How to Transfer ALL Files from Figma Make to Your Local Machine

## Total Files to Copy: 97 files

---

## METHOD 1: Use Figma Make's Download/Export Feature

1. **In Figma Make interface:**
   - Click the **menu icon** (☰) or **"..."** menu
   - Look for **"Download"** or **"Export project"**
   - Download as ZIP file
   
2. **On your local machine:**
   ```bash
   # Extract the ZIP
   unzip portfolio-download.zip -d ~/Desktop/portfolio
   cd ~/Desktop/portfolio
   
   # Verify you have everything
   ls -la src/imports/    # Should show 19 files
   ls -la src/app/components/   # Should show all component files
   ```

---

## METHOD 2: Manual File Browser Copy (if no download button)

If Figma Make shows a file browser on the left:

1. **Select all files** (Cmd+A or Ctrl+A)
2. **Right-click → Download** or drag to your desktop
3. Maintain the folder structure:
   ```
   portfolio/
   ├── index.html
   ├── vercel.json
   ├── package.json
   └── src/
       ├── main.tsx
       ├── app/
       │   ├── App.tsx
       │   └── components/
       ├── imports/  ← (19 image/video files)
       └── styles/
   ```

---

## METHOD 3: Copy Individual Files

If you need to copy files one by one, prioritize in this order:

### **CRITICAL FILES (Copy these first):**
1. `src/imports/` - ALL 19 image files
2. `src/main.tsx`
3. `index.html`
4. `src/app/App.tsx`
5. `src/app/components/Portfolio.tsx`
6. `src/app/components/` - All case study files

### **IMPORTANT FILES (Copy these second):**
7. `src/styles/` - All CSS files
8. `vercel.json`
9. `src/app/components/ui/` - All UI components
10. `.gitignore`

---

## After Copying to Local Machine

```bash
# Navigate to your local portfolio folder
cd /path/to/your/portfolio

# Install dependencies
pnpm install

# Test build locally
pnpm run build

# Add to git
git add -A

# Commit
git commit -m "Complete portfolio with all images and fixes"

# Push to GitHub
git push origin main
```

---

## Verify Everything Copied

Run this in your local folder:
```bash
# Check images
ls src/imports/ | wc -l
# Should show: 19

# Check components  
ls src/app/components/*.tsx | wc -l
# Should show: 15+

# Check styles
ls src/styles/
# Should show: fonts.css, globals.css, index.css, slideshow.css, tailwind.css, theme.css
```
