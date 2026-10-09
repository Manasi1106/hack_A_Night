#!/usr/bin/env bash
# Quickstart launcher for AEGIS-VERITAS
cd "$(dirname "$0")"

echo "================================================================="
echo "   Launching AEGIS-VERITAS Evidence Integrity Platform"
echo "================================================================="

# Check if open command exists (macOS)
if command -v open >/dev/null 2>&1; then
    open index.html
    echo "[+] Opened index.html in your default browser."
elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open index.html
    echo "[+] Opened index.html in your default browser."
fi

# Run the local python server
python3 server.py
