// Data kunjungan Erlin
const kunjungan = [
    {
        name: "Broken Beach",
        description: "Broken Beach adalah salah satu pantai paling terkenal di Nusa Penida, terkenal dengan pemandangan yang menakjubkan dan suasana yang tenang.",
        image: "broken beach.jpg",
        location: "Nusa Penida, Klungkung"
    },
    {
        name: "Gunung Catur",
        description: "Gunung Catur adalah gunung di Bali yang sering dikunjungi untuk trekking dan menikmati pemandangan alam yang indah.",
        image: "gunung catur.jpg",
        location: "Petang, Badung"
    },
    {
        name: "Event Wali Kota Cup",
        description: "Event Wali Kota Cup adalah acara olahraga tahunan yang diadakan oleh PASI Denpassar di Lapangan Debes, Tabanan, untuk memperlombakan para atlet pelajar Denpasar setiap tahun.",
        image: "walikota cup.jpg",
        location: "Lapangan Debes, Tabanan"
    },
    {
        name: "Pantai Nyang-Nyang",
        description: "Pantai Nyang-Nyang adalah pantai tersembunyi di Uluwatu yang menawarkan pemandangan yang indah dan ketenangan yang jarang ditemui di pantai lain.",
        image: "pantai nyangnyang.jpg",
        location: "Uluwatu, Badung"
    },
    {
        name: "Gunung Batur",
        description: "Gunung Batur adalah salah satu gunung berapi aktif di Bali, terkenal dengan pemandangan matahari terbit yang memukau.",
        image: "gunung batur.jpg",
        location: "Kintamani, Bangli"
    },
    {
        name: "Pantai Peti Tenget",
        description: "Pantai Peti Tenget adalah pantai yang indah di Bali, terkenal dengan suasana yang tenang dan pemandangan sunset yang spektakuler.",
        image: "pantai peti tenget.jpg",
        location: "Kerobokan, Badung"
    }
];

const kunjunganList = document.getElementById('kunjungan-list');
const kunjunganDetail = document.getElementById('kunjungan-detail');

kunjunganList.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
        const index = e.target.getAttribute('data-index');
        displayKunjunganDetail(kunjungan[index]);
    }
});

function displayKunjunganDetail(kunjungan) {
    kunjunganDetail.innerHTML = `
        <div class="kunjungan">
            <h2>${kunjungan.name} (${kunjungan.location})</h2>
            <p>${kunjungan.description}</p>
            <img src="${kunjungan.image}" alt="${kunjungan.name}">
        </div>
    `;
}
