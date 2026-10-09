# AEGIS-VERITAS: Unified Judicial, Forensic & Law Enforcement Integrity Platform

> **Accessible, Multilingual, Light-Themed Cryptographic Evidence & Record Integrity System**

---

## 📌 Problem Statement Addressed

> *"Law enforcement agencies, forensic labs, and judicial bodies handle voluminous, mission-critical case records—such as FIRs, witness testimonies, charge sheets, and forensic findings—using fragmented legacy systems and physical paperwork, exposing evidence to undetected tampering."*

---

## ✨ What's New in this Version

### 1. ☀️ Clean, High-Contrast Light Theme
- Redesigned with a modern, high-legibility light theme (`#ffffff` surfaces, `#f8fafc` soft slate backgrounds, and crisp typography).
- Designed for prolonged reading by legal officers, judges, police personnel, and the public.
- Accessible color-coding:
  - 🔵 **Police / Law Enforcement**: Sky Blue (`#0284c7`)
  - 🟣 **Forensic Science Labs**: Purple (`#7c3aed`)
  - 🟡 **Judiciary / Courts**: Warm Bronze/Amber (`#b45309`)
  - 🟢 **Verified State**: Forest Emerald (`#059669`)
  - 🔴 **Tamper Alert**: Crimson Rose (`#dc2626`)

### 2. 🌍 Multilingual Support (5 Major Languages)
Switch languages instantly from the top navigation bar without reloading:
- 🇺🇸 **English** (US / International)
- 🇮🇳 **हिन्दी (Hindi)** — Tailored for Indian Police & Judicial terminology (प्राथमिकी, बयान, आरोप-पत्र)
- 🇮🇳 **मराठी (Marathi)** — Regional state law enforcement
- 🇪🇸 **Español (Spanish)** — Criminal justice & forensic laboratories
- 🇫🇷 **Français (French)** — Police judiciaire & tribunal civil/pénal

### 3. 👥 Human-Friendly & Easy for Everyone to Use
- **"How It Works in 3 Simple Steps" Card**: Clear visual guide breaking down the journey from police FIR registration, to forensic lab testing, to courtroom exhibit verification.
- **Plain-English Explanations**: Technical cryptographic concepts (like Merkle roots and SHA-256) are accompanied by everyday analogies.
- **Interactive Tamper Testing with 1-Click Buttons**: Anyone can click *"Tamper Weapon Serial"*, *"Retract Witness Statement"*, or *"Dilute Contraband"* and watch the system turn RED with instant tamper detection.

---

## 🚀 Quickstart & How to Run

### Method 1: Instant Browser Launch
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Method 2: One-Click Shell Script
```bash
./run.sh
```

### Method 3: Local Python HTTP Server
```bash
python3 server.py
# Opens at http://localhost:8080
```

---

## 📁 File Structure

```
/Users/manasi/Desktop/pvg/
├── index.html       # Light-themed, multilingual UI with 3-step walkthrough and tamper lab
├── styles.css       # Clean, accessible light design system with WCAG-compliant contrasts
├── app.js           # Multilingual translation dictionary, WebCrypto SHA-256 verifier & logic
├── server.py        # Local Python HTTP server with auto-port detection
├── run.sh           # Executable launcher script
└── README.md        # Documentation and legal/cryptographic specifications
```
