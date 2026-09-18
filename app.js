// قائمة موسعة للعطور (يمكنك إضافة مئات الأسماء بسهولة)
const perfumeList = [
    { name: "Dior Sauvage Elixir", category: "strong", desc: "عطر أسطوري بتركيز عالٍ ونوتات التوابل والخشب." },
    { name: "Bleu de Chanel Parfum", category: "summer", desc: "أيقونة الانتعاش والأناقة الرجالية مع الأخشاب." },
    { name: "Tom Ford Ombré Leather", category: "winter", desc: "عطر جلدي فاخر وعميق مع نفحات الهيل." },
    { name: "Creed Aventus", category: "summer", desc: "ملك عطور النيش بمزيج الأناناس والأخشاب." },
    { name: "Baccarat Rouge 540", category: "strong", desc: "مزيج شرقي ساحر بين الزعفران والياسمين والعنبر." },
    { name: "Parfums de Marly Delina", category: "winter", desc: "عطر نسائي ملكي برائحة الورد التركي والفلورال." },
    { name: "Rasasi Shuhrah", category: "strong", desc: "فوحان استثنائي مع نوتات العود والأوراق الدخانية." },
    { name: "Paco Rabanne Invictus", category: "summer", desc: "انتعاش قوي مع الفانيليا الدافئة والليمون." },
    { name: "Giorgio Armani Acqua Di Gio", category: "summer", desc: "انتعاش البحر العميق والأعشاب العطرية." },
    { name: "Versace Eros", category: "strong", desc: "عطر مثير يجمع النعناع المنعش والفانيليا." },
    { name: "YSL Y Le Parfum", category: "summer", desc: "عطر عصري وجذاب يعتمد على زهر البرتقال والأخشاب." },
    { name: "Tom Ford Tobacco Vanille", category: "winter", desc: "دفء التبغ الفاخر الممزوج بالفانيليا والكاكاو." },
    { name: "Dior Diorissimo", category: "summer", desc: "باقة زهورية منعشة برائحة زنابق الوادي." },
    { name: "Chanel Coco Mademoiselle", category: "winter", desc: "أنثوي شرقي بنوتات البرتقال والياسمين والورد." },
    { name: "Azzaro Wanted By Night", category: "winter", desc: "عطر ليلي دافئ بنفحات القرفة والتبغ." }
];

// إنشاء مئات العطور تلقائياً بدعم الصور
function generateHugePerfumeDatabase() {
    const categories = ['summer', 'winter', 'strong'];
    const brands = ['Dior', 'Tom Ford', 'Chanel', 'Gucci', 'Prada', 'Armani', 'Guerlain', 'Givency', 'YSL', 'Versace'];
    const types = ['Intense', 'Extreme', 'Parfum', 'Eau de Parfum', 'Absolu', 'Black', 'Gold', 'Nuit'];
    
    let fullDatabase = [...perfumeList];

    // توليد مئات العطور تلقائياً مع صور متناسبة
    for (let i = 1; i <= 200; i++) {
        const brand = brands[i % brands.length];
        const type = types[i % types.length];
        const cat = categories[i % categories.length];
        
        fullDatabase.push({
            name: `${brand} Special Collection Edition #${i} ${type}`,
            category: cat,
            desc: `عطر فاخر ومميز من إصدارات ${brand} الحصرية بتركيز عالي ونوتات نادرة.`,
            // توليد صورة عطر عالية الجودة تلقائياً لكل عنصر
            image: `https://source.unsplash.com/featured/500x500/?perfume,fragrance&sig=${i}`
        });
    }
    return fullDatabase;
}

const allPerfumes = generateHugePerfumeDatabase();

function displayPerfumes(items) {
    const grid = document.getElementById('perfumeGrid');
    grid.innerHTML = '';
    items.forEach((p, index) => {
        const imgUrl = p.image || `https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80`;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${imgUrl}" alt="${p.name}" loading="lazy" style="width:100%; height:220px; object-fit:cover; border-radius:12px; margin-bottom:12px;" onerror="this.src='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80'">
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
        displayPerfumes(allPerfumes);
    } else {
        const filtered = allPerfumes.filter(p => p.category === category);
        displayPerfumes(filtered);
    }
}

function searchPerfumes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allPerfumes.filter(p => p.name.toLowerCase().includes(query));
    displayPerfumes(filtered);
}

let favs = 0;
function addFav() {
    favs++;
    document.getElementById('favCount').innerText = favs;
}

window.onload = () => displayPerfumes(allPerfumes);
