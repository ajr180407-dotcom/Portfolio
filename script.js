document.addEventListener('DOMContentLoaded', function() {

    // 1. Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Durasi animasi dalam ms
        once: true,     // Animasi hanya berjalan sekali
        offset: 50,     // Offset (px) dari trigger point
    });

    // 2. Inisialisasi Typed.js (Efek Ketik)
    // Pastikan elemen .typing-effect ada di HTML
    if (document.querySelector('.typing-effect')) {
        new Typed('.typing-effect', {
            strings: [
                'Creative Developer',
                'Digital Architect',
                'UI/UX Enthusiast',
                'Problem Solver'
            ],
            typeSpeed: 60,  // Kecepatan mengetik
            backSpeed: 40,  // Kecepatan menghapus
            loop: true,     // Mengulang animasi
            backDelay: 1500 // Waktu tunda sebelum menghapus
        });
    }

    // 3. Inisialisasi Particles.js
    // Konfigurasi ini menciptakan efek "jaringan" neon yang klasik
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80, // Jumlah partikel
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00ffff" // Warna partikel (neon cyan)
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                },
                "size": {
                    "value": 3,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00ffff", // Warna garis
                    "opacity": 0.2, // Transparansi garis
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2, // Kecepatan gerak
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" // Efek 'grab' saat hover
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push" // 'push' partikel saat klik
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_opacity": 0.5
                    },
                    "push": {
                        "particles_nb": 4
                    },
                }
            },
            "retina_detect": true
        });
    }

});
