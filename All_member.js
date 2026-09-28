// DATA SEMUA MEMBER
const members = {

    alul: {
        name: "Alul",
        username: "@alul",
        role: "Owner",
        image: "foto/profil/admin.jpg",
        bio: "Suka bermain game.",
        game: "Free Fire",
        join: "Maret 2026"
    },

    brian: {
        name: "Brian",
        username: "@brian",
        role: "Devoloper",
        image: "foto/profil/brian.jpg",
        bio: "Suka coding dan bermain game.",
        game: "Roblox • Mobile Legends",
        join: "Januari 2026"
    },

    dani: {
        name: "Dani",
        username: "@dani",
        role: "Moderator",
        image: "foto/profil/dani.jpg",
        bio: "Aktif membantu komunitas.",
        game: "Valorant • Roblox",
        join: "Februari 2026"
    },

    epin: {
        name: "Epin",
        username: "@budi",
        role: "Desainer",
        image: "foto/profil/epin.png",
        bio: "Suka bermain game.",
        game: "Free Fire",
        join: "Maret 2026"
    },

    tamam: {
        name: "Tamam",
        username: "@Tamam",
        role: "Moderator",
        image: "foto/profil/tamam.png",
        bio: "Suka bermain game.",
        game: "Roblox",
        join: "April 2026"
    },

    aldoo: {
        name: "Aldoo",
        username: "@Aldoo",
        role: "Member",
        image: "foto/profil/aldo.jpg",
        bio: "Aktif di komunitas.",
        game: "Valorant",
        join: "April 2026"
    },

     lintang: {
        name: "Lintang",
        username: "@Lintang",
        role: "Member",
        image: "foto/profil/lintang.jpg",
        bio: "Aktif di komunitas.",
        game: "Valorant",
        join: "April 2026"
    },

     seloo: {
        name: "Seloo",
        username: "@Seloo",
        role: "Member",
        image: "foto/profil/selo.jpg",
        bio: "Aktif di komunitas.",
        game: "Valorant",
        join: "April 2026"
    },

     kino: {
        name: "Kino",
        username: "@Kino",
        role: "Member",
        image: "foto/profil/kino.jpg",
        bio: "Aktif di komunitas.",
        game: "Valorant",
        join: "April 2026"
    },

     yupi: {
        name: "Yupi",
        username: "@Yupi",
        role: "Member",
        image: "foto/profil/yupi.jpg",
        bio: "Aktif di komunitas.",
        game: "Valorant",
        join: "April 2026"
    }

};


// CEK HALAMAN ALL MEMBER
const membersContainer = document.getElementById("allMembers");


// TAMPILKAN SEMUA MEMBER
if (membersContainer) {

    Object.entries(members).forEach(([id, member], index) => {

        const card = document.createElement("a");

        // Link menuju profil member
        card.href = `Member.html?id=${id}`;

        card.className = "all-member-card";

        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">

            <h3>${member.name}</h3>

            <p>${member.role}</p>

            <span class="view-profile">
                Lihat Profil →
            </span>
        `;

        membersContainer.appendChild(card);

    });

}


// CEK HALAMAN PROFIL MEMBER
const profileName = document.getElementById("memberName");

if (profileName) {

    const params = new URLSearchParams(window.location.search);

    const memberID = params.get("id");

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

    } else {

        profileName.textContent = "Member tidak ditemukan";

    }

}