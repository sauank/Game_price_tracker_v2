# 🎮 Game Price Tracker Pro+

Track game prices across Steam & Epic automatically, get alerts on drops, and never miss the best deals again.

## 🚀 Features
- Automatic tracking (Steam + Epic)
- Price drop alerts
- Target price alerts
- Lowest price detection
- Active deals popup
- Badge notifications

## 🛠 Installation
1. Extract ZIP
2. Go to chrome://extensions/
3. Enable Developer Mode
4. Load unpacked → select folder

## 📦 Structure
- manifest.json
- bg.js
- steam.js
- epic.js
- popup.html

## ⚙️ How It Works
Visits game → extracts price → stores → compares → alerts

## 🧠 Data Model
{
  "t": "Game",
  "p": "₹999",
  "pn": 999,
  "lp": 799
}

## 🚀 Future
- Telegram alerts
- Email alerts
- Dashboard
- Multi-store

## 📜 License
MIT
