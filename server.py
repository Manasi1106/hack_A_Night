#!/usr/bin/env python3
"""
AEGIS-VERITAS Local Server Runner
Serves the web application on a local port and prints clear access links.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable caching for seamless local development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    global PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", PORT), Handler) as httpd:
                url = f"http://localhost:{PORT}"
                print("=" * 70)
                print("   AEGIS-VERITAS: Unified Evidence & Judicial Integrity Grid")
                print("=" * 70)
                print(f"[*] Server running at: {url}")
                print(f"[*] Open index.html directly or visit: {url}")
                print("[*] Press Ctrl+C to terminate.")
                print("=" * 70)
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
                break
        except OSError:
            print(f"[!] Port {PORT} busy, trying {PORT + 1}...")
            PORT += 1

if __name__ == "__main__":
    try:
        run()
    except KeyboardInterrupt:
        print("\n[*] Server shutdown cleanly.")
        sys.exit(0)
