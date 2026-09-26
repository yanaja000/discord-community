const members = {

    alul: {
        name: "Alul",
        username: "@alul",
        role: "Member",
        image: "foto/profil/admin.jpg",
        bio: "Hidup dengan prinsip: kalau masih bisa bercanda, berarti masalahnya belum terlalu serius 😭.",
        game: "Mobile Legends • Free Fire • Roblox",
        join: "03 Maret 2024"
    },

    brian: {
        name: "Brian",
        username: "@brian",
        role: "Devoloper",
        image: "foto/profil/brian.jpg",
        bio: "Punya banyak rencana, tapi wacana xixixixi😹 .",
        game: "Roblox • Mobile Legends",
        join: "01 Oktober 2025"
    },

    dani: {
        name: "Dani Gamteng Pake M",
        username: "@dani",
        role: "Moderator",
        image: "foto/profil/dani.jpg",
        bio: "Sukah makan embgh, dan tidak suka makan batu/kayu and semacamnya, berbakti kepada orang tua xixixixi😹.",
        game: "Free Fire • Roblox",
        join: "20 Oktober 2024"
    },

    epin: {
        name: "Epin",
        username: "@epin",
        role: "Member",
        image: "foto/profil/epin.png",
        bio: "Hidup kalo ga gini ya gitu 😏🗿.",
        game: "Mobile Legends • Free Fire • Roblox",
        join: "06 Oktober 2025"
    },

     tamam: {
        name: "Tamam",
        username: "@Tamam",
        role: "Member",
        image: "foto/profil/tamam.png",
        bio: "Ahli dalam memberikan saran yang tidak pernah dia terapkan sendiri.",
        game: "Mobile Legends • Free Fire • Roblox",
        join: "06 Oktober 2024"
    },

     aldoo: {
        name: "Aldoo",
        username: "@Aldoo",
        role: "Member",
        image: "foto/profil/aldo.jpg",
        bio: "Hidup cuma sekali, tapi malah pilih wni.",
        game: "Mobile Legends • Free Fire • Roblox",
        join: "06 Maret 2026"
    },

    lintang: {
        name: "Lintang",
        username: "@Lintang",
        role: "Member",
        image: "foto/profil/lintang.jpg",
        bio: "Jalani hari ini dengan tenang, karena setiap proses punya waktunya sendiri.",
        game: "Mobile Legends • Roblox",
        join: "09 Maret 2025"
    },

    seloo: {
        name: "Seloo",
        username: "@Seloo",
        role: "Member",
        image: "foto/profil/selo.jpg",
        bio: "Nikmati setiap momen, karena waktu tidak pernah kembali 🗿.",
        game: "Minecraft • Valorant",
        join: "17 September 2025"
    },

    kino: {
        name: "Kino",
        username: "@Kino",
        role: "Member",
        image: "foto/profil/kino.jpg",
        bio: "Cari pengalaman, buat cerita, dan nikmati perjalanan.",
        game: "Mobile Legends • Valorant",
        join: "23 Maret 2024"
    },

    yupi: {
        name: "Yupi",
        username: "@Yupi",
        role: "Member",
        image: "foto/profil/yupi.jpg",
        bio: "Belajar dari kemarin, jalani hari ini, dan siapkan diri untuk besok..",
        game: "Mobile Legends • Free Fire",
        join: "15 Desember 2025"
    }

};


// Ambil ID dari URL
const params = new URLSearchParams(window.location.search);

const memberID = params.get("id");


// Cari data member
const member = members[memberID];


if (member) {

    document.getElementById("memberImage").src = member.image;

    document.getElementById("memberName").textContent = member.name;

    document.getElementById("memberUsername").textContent = member.username;

    document.getElementById("memberRole").textContent = member.role;

    document.getElementById("memberBio").textContent = member.bio;

    document.getElementById("memberGame").textContent = member.game;

    document.getElementById("memberJoin").textContent = member.join;

    document.title = member.name + " - Profil Member";

}