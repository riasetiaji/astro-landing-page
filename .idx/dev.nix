{ pkgs, ... }: { # Channel nixpkgs yang digunakan. channel = "stable-24.05"; # atau "unstable" # Gunakan https://search.nixos.org/packages untuk menemukan paket packages = [ # pkgs.go # pkgs.python311 # pkgs.python311Packages.pip # pkgs.nodejs_20 # pkgs.nodePackages.nodemon ]; # Mengatur variabel lingkungan di workspace env = {}; idx = { # Cari ekstensi yang Anda inginkan di https://open-vsx.org/ dan gunakan "publisher.id" extensions = [ # "vscodevim.vim" ]; # Mengaktifkan pratinjau previews = { enable = true; previews = { web = { # Perintah untuk menjalankan server Astro, menyesuaikan perintah ini sesuai kebutuhan Anda command = ["npm", "run", "start"]; manager = "web"; env = { # Mengatur variabel lingkungan untuk server Anda PORT = "$PORT"; }; }; }; }; # Lifecycle hooks workspace workspace = { # Dijalankan ketika workspace pertama kali dibuat onCreate = { # Contoh: menginstal dependensi JS dari NPM npm-install = "npm install"; }; # Dijalankan ketika workspace di(re)start onStart = { # Contoh: memulai tugas latar belakang untuk mengawasi dan membangun ulang kode backend watch-backend = "npm run watch-backend"; }; }; }; }