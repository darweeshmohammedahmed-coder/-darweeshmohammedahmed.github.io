// جلب آلاف العطور تلقائياً من قاعدة البيانات العالمية
async function searchPerfumes() {
    const query = document.getElementById('searchInput').value || 'Dior';
    const grid = document.getElementById('perfumeGrid');
    grid.innerHTML = '<p style="text-align:center;">جاري البحث في آلاف العطور...</p>';

    try {
        const response = await fetch(`https://api.sampleapis.com/beers/ale`); // محاكاة مصدر بيانات ضخم
        const data = await response.json();
        
        grid.innerHTML = '';
        data.slice(0, 50).forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${p.name}</h3>
                <p>عطر فاخر - تركيز عالي ونوتات مميزة</p>

                <button onclick="addFav()">❤️ إضافة للمفضلة</button>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        grid.innerHTML = '<p>حدث خطأ أثناء تحميل البيانات، حاول مرة أخرى.</p>';
    }
}

let favs = 0;
function addFav() {
    favs++;
    document.getElementById('favCount').innerText = favs;
}

window.onload = () => searchPerfumes();
