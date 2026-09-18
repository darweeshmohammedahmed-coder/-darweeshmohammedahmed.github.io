// قاعدة بيانات معقدة ومفصلة للعطور مع صور حقيقية ومباشرة لكل زجاجة
const perfumes = [
    {
        id: 1,
        name: "Dior Sauvage Elixir",
        brand: "Dior",
        category: "winter",
        notes: "القرفة، الهيل، جوزة الطيب، اللافندر، خشب الصندل",
        concentration: "Parfum / Elixir",
        season: "شتاء / ليل",
        rating: "4.8 / 5",
        desc: "عطر أسطوري بتركيز عالٍ ونوتات دارسين وخشب الصندل الدافئ والعميق.",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        name: "Bleu de Chanel Eau de Parfum",
        brand: "Chanel",
        category: "summer",
        notes: "الجريب فروت، الليمون، النعناع، البخور، خشب الأرز",
        concentration: "Eau de Parfum",
        season: "صيف / كل الأوقات",
        rating: "4.7 / 5",
        desc: "أيقونة الانتعاش والأناقة الرجالية مع نفحات الأخشاب والحمضيات الفاخرة.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        name: "Tom Ford Ombré Leather",
        brand: "Tom Ford",
        category: "winter",
        notes: "الهيل، الجلد الطبيعي، الياسمين، العنبر، الطحالب",
        concentration: "Eau de Parfum",
        season: "شتاء / رسمي",
        rating: "4.6 / 5",
        desc: "عطر جلدي فاخر وعميق يعكس الفخامة والقوة مع نفحات داكنة ساحرة.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        name: "Creed Aventus",
        brand: "Creed",
        category: "summer",
        notes: "الأناناس، البرغموت، الكشمش الأسود، خشب أرز، المسك",
        concentration: "Eau de Parfum",
        season: "جميع الفصول",
        rating: "4.9 / 5",
        desc: "ملك عطور النيش الفاخرة، مزيج متوازن بين الفواكه المنعشة والأخشاب.",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        name: "Maison Francis Kurkdjian Baccarat Rouge 540",
        brand: "MFK",
        category: "strong",
        notes: "الزعفران، الياسمين، صمغ الصنوبر، خشب الأرز، العنبر",
        concentration: "Extrait de Parfum",
        season: "شتاء / مناسبات",
        rating: "4.9 / 5",
        desc: "مزيج شرقي ساحر وجريء يجمع بين حلاوة السكر والعنبر الخشبي.",
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 6,
        name: "Parfums de Marly Delina",
        brand: "Parfums de Marly",
        category: "winter",
        notes: "الورد التركي، الليتشي، الروند، الفانيليا، المسك",
        concentration: "Eau de Parfum",
        season: "ربيع / أنثوي",
        rating: "4.7 / 5",
        desc: "عطر نسائي ملكي فاخر برائحة الورد الزهري مع الفانيليا الدافئة.",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 7,
        name: "Paco Rabanne Invictus Victory",
        brand: "Paco Rabanne",
        category: "summer",
        notes: "الليمون، الفلفل الوردي، اللبان، الفانيليا، العنبر",
        concentration: "Perfume Intense",
        season: "صيف / شبابي",
        rating: "4.5 / 5",
        desc: "انتعاش حار وقوي يجمع بين الحيوية والدفء المستمر.",
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 8,
        name: "Giorgio Armani Acqua Di Gio Profondo",
        brand: "Armani",
        category: "summer",
        notes: "النوتات البحرية، البرغموت، الإكليل، الأكوا، الباتشولي",
        concentration: "Eau de Parfum",
        season: "صيف / يومي",
        rating: "4.8 / 5",
        desc: "عمق الأعماق البحرية مع الانتعاش الحمضي الكثيف لليوم الصيفي.",
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&auto=format&fit=crop&q=80"
    }
];

// دالة عرض كروت العطور ببياناتها المعقدة والتفصيلية
function displayPerfumes(items) {
    const grid = document.getElementById('perfumeGrid');
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: #888;">لم يتم العثور على عطور تطابق بحثك.</p>';
        return;
    }

    items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.cssText = "background: #fff; border-radius: 16px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); display: flex; flex-direction: column; justify-content: space-between;";
        
        card.innerHTML = `
            <div>
                <img src="${p.image}" alt="${p.name}" loading="lazy" style="width:100%; height:240px; object-fit:cover; border-radius:12px; margin-bottom:12px;">
                <span style="font-size: 0.8rem; background: #f0f0f0; padding: 4px 8px; border-radius: 6px; color: #555;">${p.brand}</span>
                <h3 style="margin: 8px 0 5px 0; font-size: 1.2rem; color: #222;">${p.name}</h3>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 8px;">${p.desc}</p>
                
                <div style="background: #f9f9f9; padding: 8px; border-radius: 8px; font-size: 0.85rem; margin-bottom: 12px; text-align: right;">
                    <p style="margin:2px 0;">🌿 <b>النوتات:</b> ${p.notes}</p>
                    <p style="margin:2px 0;">💧 <b>التركيز:</b> ${p.concentration}</p>
                    <p style="margin:2px 0;">⭐ <b>التقييم:</b> ${p.rating}</p>
                </div>
            </div>

            <button onclick="addFav()" style="width: 100%; background: #222; color: #fff; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-weight: bold;">❤️ إضافة للمفضلة</button>
        `;
        grid.appendChild(card);
    });
}

// فلترة حسب الفئة
function filterPerfumes(category) {
    if (category === 'all') {
        displayPerfumes(perfumes);
    } else {
        const filtered = perfumes.filter(p => p.category === category);
        displayPerfumes(filtered);
    }
}

// بحث معقد وشامل بالاسم والماركة والنوتات
function searchPerfumes() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const filtered = perfumes.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query) ||
        p.notes.toLowerCase().includes(query)
    );
    displayPerfumes(filtered);
}

// عداد المفضلة
let favs = 0;
function addFav() {
    favs++;
    const countElem = document.getElementById('favCount');
    if (countElem) countElem.innerText = favs;
}

// تشغيل العرض التلقائي عند التحميل
window.onload = () => displayPerfumes(perfumes);
