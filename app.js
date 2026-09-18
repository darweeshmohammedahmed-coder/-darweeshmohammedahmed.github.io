const perfumes = [
    { name: "Dior Sauvage Elixir", category: "strong", desc: "عطر قوي وفاخر بتركيز عالٍ ونوتات توابل أسطورية." },
    { name: "Tom Ford Ombré Leather", category: "winter", desc: "عطر جلدي دافئ وعميق مثالي للأجواء الباردة." },
    { name: "Rasasi Shuhrah", category: "strong", desc: "فوحان قوي جداً وثبات يدوم لأيام مع نوتات بخورية مميزة." },
    { name: "Paco Rabanne Invictus Victory", category: "summer", desc: "مزيج منعش من الليمون والملح مع قاعدة دافئة." }
];

function displayPerfumes(items) {
    const grid = document.getElementById('perfumeGrid');
    grid.innerHTML = '';
    items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <br>
            <button onclick="addFav()">❤️ إضافة للمفضلة</button>
        `;
        grid.appendChild(card);
    });
}

function filterPerfumes(category) {
    if (category === 'all') {
        displayPerfumes(perfumes);
    } else {
        const filtered = perfumes.filter(p => p.category === category);
        displayPerfumes(filtered);
    }
}

function searchPerfumes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = perfumes.filter(p => p.name.toLowerCase().includes(query));
    displayPerfumes(filtered);
}

let favs = 0;
function addFav() {
    favs++;
    document.getElementById('favCount').innerText = favs;
}

// تشغيل عرض العطور عند فتح الموقع
window.onload = () => displayPerfumes(perfumes);
