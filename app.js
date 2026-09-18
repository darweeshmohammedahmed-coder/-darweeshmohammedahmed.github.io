const perfumes = [
    { 
        name: "Dior Sauvage Elixir", 
        category: "strong", 
        desc: "عطر أسطوري بتركيز عالٍ ونوتات دارسين وخشب الصندل الدافئ.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80"
    },
    { 
        name: "Bleu de Chanel Parfum", 
        category: "summer", 
        desc: "أيقونة الانتعاش والأناقة الرجالية مع نفحات الأخشاب والحمضيات.",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80"
    },
    { 
        name: "Tom Ford Ombré Leather", 
        category: "winter", 
        desc: "عطر جلدي فاخر وعميق مع نفحات الهيل والياسمين والأخشاب.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80"
    },
    { 
        name: "Creed Aventus", 
        category: "summer", 
        desc: "ملك عطور النيش بمزيج الأناناس والتفاح والأخشاب الفاخرة.",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500&q=80"
    },
    { 
        name: "Baccarat Rouge 540", 
        category: "strong", 
        desc: "مزيج شرقي ساحر بين الزعفران والياسمين والعنبر.",
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&q=80"
    },
    { 
        name: "Parfums de Marly Delina", 
        category: "winter", 
        desc: "عطر نسائي ملكي برائحة الورد التركي والفلورال.",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80"
    },
    { 
        name: "Paco Rabanne Invictus", 
        category: "summer", 
        desc: "انتعاش قوي مع الفانيليا الدافئة والليمون.",
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=80"
    },
    { 
        name: "Giorgio Armani Acqua Di Gio", 
        category: "summer", 
        desc: "انتعاش البحر العميق والأعشاب العطرية.",
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500&q=80"
    },
    { 
        name: "Versace Eros", 
        category: "strong", 
        desc: "عطر مثير يجمع النعناع المنعش، التفاح الأخضر والفانيليا.",
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&q=80"
    },
    { 
        name: "Tom Ford Tobacco Vanille", 
        category: "winter", 
        desc: "دفء التبغ الفاخر الممزوج بالفانيليا والكاكاو.",
        image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=500&q=80"
    }
];

function displayPerfumes(items) {
    const grid = document.getElementById('perfumeGrid');
    grid.innerHTML = '';
    items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}" style="width:100%; height:220px; object-fit:cover; border-radius:12px; margin-bottom:12px;">
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

window.onload = () => displayPerfumes(perfumes);
