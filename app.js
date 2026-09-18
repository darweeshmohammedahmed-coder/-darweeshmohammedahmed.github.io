<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Darweesh Fragrances</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, Tahoma, sans-serif;
            background: #f5f3ef;
            color: #222;
        }

        header {
            background: #111;
            color: white;
            padding: 35px 20px;
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-size: 2.5rem;
            letter-spacing: 1px;
        }

        header p {
            color: #ccc;
            margin-bottom: 0;
        }

        .search-box {
            max-width: 700px;
            margin: 25px auto;
            padding: 0 15px;
        }

        #searchInput {
            width: 100%;
            padding: 16px 20px;
            border: none;
            border-radius: 14px;
            font-size: 1rem;
            outline: none;
            box-shadow: 0 4px 20px rgba(0,0,0,.08);
        }

        .filters {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
            padding: 10px 15px 25px;
        }

        .filters button {
            border: none;
            padding: 11px 18px;
            border-radius: 25px;
            background: white;
            cursor: pointer;
            font-weight: bold;
            transition: .2s;
        }

        .filters button:hover {
            background: #111;
            color: white;
            transform: translateY(-2px);
        }

        #perfumeGrid {
            max-width: 1300px;
            margin: auto;
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 22px;
        }

        .card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 5px 25px rgba(0,0,0,.08);
            transition: .25s;
            display: flex;
            flex-direction: column;
        }

        .card:hover {
            transform: translateY(-7px);
            box-shadow: 0 12px 35px rgba(0,0,0,.15);
        }

        .perfume-image {
            width: 100%;
            height: 300px;
            object-fit: contain;
            background: #fafafa;
            padding: 15px;
        }

        .content {
            padding: 18px;
        }

        .brand {
            display: inline-block;
            background: #eee;
            padding: 5px 10px;
            border-radius: 7px;
            color: #555;
            font-size: .8rem;
        }

        .card h2 {
            margin: 10px 0 5px;
            font-size: 1.2rem;
        }

        .desc {
            color: #666;
            line-height: 1.6;
            font-size: .9rem;
        }

        .info {
            background: #f7f7f7;
            border-radius: 12px;
            padding: 10px;
            margin-top: 12px;
            font-size: .85rem;
            line-height: 1.8;
        }

        .favorite {
            width: calc(100% - 36px);
            margin: 0 18px 18px;
            padding: 12px;
            border: none;
            border-radius: 10px;
            background: #111;
            color: white;
            cursor: pointer;
            font-weight: bold;
            font-size: .95rem;
        }

        .favorite:hover {
            background: #333;
        }

        .fav-bar {
            position: fixed;
            left: 20px;
            bottom: 20px;
            background: #111;
            color: white;
            padding: 12px 18px;
            border-radius: 30px;
            box-shadow: 0 5px 20px rgba(0,0,0,.25);
            z-index: 20;
        }

        footer {
            text-align: center;
            padding: 40px 20px;
            color: #777;
        }

        @media(max-width:600px) {

            header h1 {
                font-size: 2rem;
            }

            #perfumeGrid {
                grid-template-columns: 1fr;
                padding: 15px;
            }

            .perfume-image {
                height: 280px;
            }
        }
    </style>
</head>

<body>

<header>

    <h1>Darweesh Fragrances</h1>

    <p>اكتشف عالم العطور الفاخرة 🌹</p>

    <div class="search-box">
        <input
            id="searchInput"
            type="text"
            placeholder="ابحث عن عطر أو ماركة أو نوتة..."
            oninput="searchPerfumes()"
        >
    </div>

</header>

<div class="filters">

    <button onclick="filterPerfumes('all')">
        الكل
    </button>

    <button onclick="filterPerfumes('winter')">
        ❄️ شتوي
    </button>

    <button onclick="filterPerfumes('summer')">
        ☀️ صيفي
    </button>

    <button onclick="filterPerfumes('strong')">
        🔥 قوي
    </button>

    <button onclick="filterPerfumes('daily')">
        👔 يومي
    </button>

</div>

<div id="perfumeGrid"></div>

<div class="fav-bar">
    ❤️ المفضلة:
    <span id="favCount">0</span>
</div>

<footer>
    © 2026 Darweesh Fragrances
</footer>

<script>

const perfumes = [

    {
        id: 1,

        name: "Dior Sauvage Elixir",

        brand: "Dior",

        category: "winter",

        notes:
        "جريب فروت، قرفة، جوزة الطيب، هيل، لافندر، أخشاب غنية",

        concentration:
        "Elixir",

        season:
        "شتاء / ليل / مناسبات",

        rating:
        "4.8 / 5",

        desc:
        "عطر شديد التركيز بطابع حار وخشبي مع لافندر وأخشاب غنية.",

        image:
        "images/sauvage-elixir.jpg"
    },

    {
        id: 2,

        name: "Bleu de Chanel Eau de Parfum",

        brand: "Chanel",

        category: "summer",

        notes:
        "جريب فروت، ليمون، نعناع، بخور، خشب الأرز",

        concentration:
        "Eau de Parfum",

        season:
        "صيف / يومي / رسمي",

        rating:
        "4.7 / 5",

        desc:
        "تركيبة منعشة وخشبية تجمع الحمضيات مع البخور والأخشاب.",

        image:
        "images/bleu-de-chanel-edp.jpg"
    },

    {
        id: 3,

        name: "Tom Ford Ombré Leather",

        brand: "Tom Ford",

        category: "winter",

        notes:
        "هيل، ياسمين سامباك، جلد أسود، باتشولي، عنبر",

        concentration:
        "Eau de Parfum",

        season:
        "شتاء / رسمي / ليل",

        rating:
        "4.6 / 5",

        desc:
        "عطر جلدي داكن بطابع فاخر مستوحى من الغرب الأمريكي.",

        image:
        "images/ombre-leather.jpg"
    },

    {
        id: 4,

        name: "Creed Aventus",

        brand: "Creed",

        category: "summer",

        notes:
        "أناناس، برغموت، كشمش أسود، أخشاب، مسك",

        concentration:
        "Eau de Parfum",

        season:
        "جميع الفصول",

        rating:
        "4.9 / 5",

        desc:
        "تركيبة تجمع الفواكه المنعشة مع الأخشاب والمسك.",

        image:
        "images/creed-aventus.jpg"
    },

    {
        id: 5,

        name: "Baccarat Rouge 540",

        brand:
        "Maison Francis Kurkdjian",

        category:
        "strong",

        notes:
        "زعفران، ياسمين، أخشاب، عنبر",

        concentration:
        "Eau de Parfum",

        season:
        "شتاء / مناسبات",

        rating:
        "4.9 / 5",

        desc:
        "عطر شرقي خشبي بطابع مميز يجمع الزعفران والزهور والأخشاب.",

        image:
        "images/baccarat-rouge-540.jpg"
    },

    {
        id: 6,

        name: "Parfums de Marly Delina",

        brand:
        "Parfums de Marly",

        category:
        "winter",

        notes:
        "ورد تركي، ليتشي، ريفند، فانيليا، مسك",

        concentration:
        "Eau de Parfum",

        season:
        "ربيع / مناسبات",

        rating:
        "4.7 / 5",

        desc:
        "عطر زهري فاخر يتمحور حول الورد والليتشي والفانيليا.",

        image:
        "images/delina.jpg"
    },

    {
        id: 7,

        name: "Invictus Victory Elixir",

        brand:
        "Rabanne",

        category:
        "strong",

        notes:
        "لافندر، تونكا، فانيليا، أخشاب",

        concentration:
        "Elixir",

        season:
        "شتاء / ليل",

        rating:
        "4.5 / 5",

        desc:
        "تركيبة حلوة ودافئة بطابع قوي ومناسب للأجواء الباردة.",

        image:
        "images/invictus-victory-elixir.jpg"
    },

    {
        id: 8,

        name: "Acqua di Giò Profondo",

        brand:
        "Giorgio Armani",

        category:
        "summer",

        notes:
        "نوتات بحرية، برغموت، إكليل الجبل، باتشولي",

        concentration:
        "Eau de Parfum",

        season:
        "صيف / يومي",

        rating:
        "4.8 / 5",

        desc:
        "رائحة بحرية منعشة مع الحمضيات والأخشاب.",

        image:
        "images/acqua-di-gio-profondo.jpg"
    }

];


function displayPerfumes(items) {

    const grid =
        document.getElementById("perfumeGrid");

    grid.innerHTML = "";

    if (items.length === 0) {

        grid.innerHTML = `
            <p style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
                color:#777;
            ">
                لم يتم العثور على عطور 🔍
            </p>
        `;

        return;
    }

    items.forEach(p => {

        const card =
            document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <img
                class="perfume-image"
                src="${p.image}"
                alt="${p.name}"
                loading="lazy"
                onerror="this.src='images/placeholder.jpg'"
            >

            <div class="content">

                <span class="brand">
                    ${p.brand}
                </span>

                <h2>
                    ${p.name}
                </h2>

                <p class="desc">
                    ${p.desc}
                </p>

                <div class="info">

                    🌿 <b>النوتات:</b>
                    ${p.notes}

                    <br>

                    💧 <b>التركيز:</b>
                    ${p.concentration}

                    <br>

                    🌡️ <b>الموسم:</b>
                    ${p.season}

                    <br>

                    ⭐ <b>التقييم:</b>
                    ${p.rating}

                </div>

            </div>

            <button
                class="favorite"
                onclick="addFav(${p.id})"
            >
                ❤️ إضافة للمفضلة
            </button>
        `;

        grid.appendChild(card);

    });

}


function filterPerfumes(category) {

    if (category === "all") {

        displayPerfumes(perfumes);

        return;
    }

    const filtered =
        perfumes.filter(
            p => p.category === category
        );

    displayPerfumes(filtered);
}


function searchPerfumes() {

    const query =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const filtered =
        perfumes.filter(p =>

            p.name
            .toLowerCase()
            .includes(query)

            ||

            p.brand
            .toLowerCase()
            .includes(query)

            ||

            p.notes
            .toLowerCase()
            .includes(query)

        );

    displayPerfumes(filtered);
}


let favorites = [];

function addFav(id) {

    if (!favorites.includes(id)) {

        favorites.push(id);

        document
        .getElementById("favCount")
        .innerText =
        favorites.length;

    }

}


window.onload = function() {

    displayPerfumes(perfumes);

};

</script>

</body>
</html>
