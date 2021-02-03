# Favicon SETUP

1. Go to [https://favicon.io](https://favicon.io)
2. Generate an icon pack
3. Drop all images in `/client/public/`
4. And configure these 2 files:

### manifest.json:

```
"icons": [
  {
    "src": "favicon.ico",
    "sizes": "64x64 32x32 24x24 16x16",
    "type": "image/x-icon"
  },
  {
    "src":"android-chrome-192x192.png",
    "sizes":"192x192",
    "type":"image/png"
  },
  {
    "src":"android-chrome-512x512.png",
    "sizes":"512x512",
    "type":"image/png"
  }
],
```

### index.html:

```
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<link rel="icon" type="image/x-icon" href="%PUBLIC_URL%/favicon.ico" />
<link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
<link rel="apple-touch-icon" type="image/png" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
```
