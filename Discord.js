/* ================= ACTIVE NAVBAR ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a:not(.join-btn)");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}

// =====================================
// MEMBER CAROUSEL
// =====================================

const carousel = document.querySelector(".member-carousel");
const track = document.querySelector(".member-track");

let autoScroll;
let isPaused = false;
let isDragging = false;


// =====================================
// JUMLAH MEMBER ASLI
// =====================================

const ORIGINAL_MEMBER_COUNT = 10;


// =====================================
// AUTO SCROLL INFINITE
// =====================================

function startAutoScroll() {

    autoScroll = setInterval(() => {

        if (isPaused || isDragging) return;

        carousel.scrollLeft += 2;

        const firstCard = track.children[0];

        if (!firstCard) return;

        const cardStyle = getComputedStyle(firstCard);
        const trackStyle = getComputedStyle(track);

        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(trackStyle.gap) || 0;

        const oneLoopWidth =
            (cardWidth + gap) * ORIGINAL_MEMBER_COUNT;


        // =================================
        // SUDAH 1 PUTARAN
        // =================================

        if (carousel.scrollLeft >= oneLoopWidth) {

            carousel.scrollLeft -= oneLoopWidth;

        }

    }, 25);

}

startAutoScroll();


// =====================================
// PAUSE MOUSE
// =====================================

carousel.addEventListener("mouseenter", () => {

    isPaused = true;

});


carousel.addEventListener("mouseleave", () => {

    isPaused = false;
    isDragging = false;

    carousel.style.cursor = "grab";

});

// ==============================
// GAME CATEGORY FILTER
// ==============================

const gameFilters = document.querySelectorAll(".game-filter");
const gameCards = document.querySelectorAll(".game-card");

gameFilters.forEach(button => {

    button.addEventListener("click", () => {

        // Hapus active dari semua tombol
        gameFilters.forEach(btn => {
            btn.classList.remove("active");
        });

        // Aktifkan tombol yang diklik
        button.classList.add("active");

        const filter = button.dataset.filter;

        // Filter game
        gameCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


// ==============================
// GAME DETAIL POPUP
// ==============================

const gameModal = document.getElementById("gameModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalStatus = document.getElementById("modalStatus");

const detailButtons = document.querySelectorAll(".game-detail");

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const category = button.dataset.category;
        const status = button.dataset.status;
        const image = button.dataset.image;
        const description = button.dataset.description;

        // Ganti gambar popup
        modalImage.src = image;
        modalImage.alt = name;

        // Ganti informasi game
        modalName.textContent = name;
        modalCategory.textContent = category.toUpperCase();
        modalDescription.textContent = description;
        modalStatus.textContent = status;

        // Tampilkan popup
        gameModal.classList.add("show");

    });

});

// Tutup popup
modalClose.addEventListener("click", () => {
    gameModal.classList.remove("show");
});

// Klik area luar popup untuk menutup
gameModal.addEventListener("click", event => {

    if (event.target === gameModal) {
        gameModal.classList.remove("show");
    }

});

// Tombol ESC untuk menutup popup
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        gameModal.classList.remove("show");
    }

});

// =====================================
// TOUCH HP
// =====================================

carousel.addEventListener("touchstart", () => {

    isPaused = true;

}, { passive: true });


carousel.addEventListener("touchend", () => {

    setTimeout(() => {

        isPaused = false;

    }, 1500);

}, { passive: true });


// =====================================
// DRAG MOUSE
// =====================================

let startX;
let scrollStart;


carousel.addEventListener("mousedown", (e) => {

    isDragging = true;
    isPaused = true;

    carousel.style.cursor = "grabbing";

    startX = e.pageX - carousel.offsetLeft;

    scrollStart = carousel.scrollLeft;

});


carousel.addEventListener("mouseup", () => {

    isDragging = false;
    isPaused = false;

    carousel.style.cursor = "grab";

});


carousel.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - carousel.offsetLeft;

    const distance = (x - startX) * 1.5;

    carousel.scrollLeft = scrollStart - distance;

});

function openEvent(event) {

    if (event === "Mobile Legends") {

        alert(
            "Push Rank Mobile Legends\n\n" +
            "📅 Setiap Hari, 20:00 WIB\n" +
            "🎮 Mobile Legends\n\n" +
            "Pendaftaran event akan segera dibuka!"
        );

    }

    if (event === "Nobar Film") {

        alert(
            "Nobar Film\n\n" +
            "📅 Malam Minggu\n" +
            "🎙️ Voice Channel Utama\n\n" +
            "Pendaftaran event akan segera dibuka!"
        );

    }

    if (event === "Hangout") {

        alert(
            "Offline Hangout\n\n" +
            "📅 Malam minggu\n" +
            "📍 Ayani Nganjuk\n\n" +
            "Pendaftaran event akan segera dibuka!"
        );

    }

};

function copyInvite() {

    const inviteLink = "https://discord.gg/kzjPQTqjB";

    navigator.clipboard.writeText(inviteLink)
        .then(() => {

            const button = document.querySelector(".copy-invite-btn");

            const originalText = button.innerHTML;

            button.innerHTML = "✓ Link Berhasil Disalin!";

            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);

        })
        .catch(() => {

            alert("Gagal menyalin link Discord.");

        });

};