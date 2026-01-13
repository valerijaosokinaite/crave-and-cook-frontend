document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main > section");
  const navLinks = document.querySelectorAll("[data-target]");
  const recipeList = document.getElementById("recipe-list");
  const loadMoreBtn = document.getElementById("load-more");
  const clearFiltersBtn = document.getElementById("clear-filters");
  const searchInput = document.getElementById("search-input");
  const logo = document.querySelector(".logo");
  const testSection = document.getElementById("naujienlaiskis");
console.log("Ar egzistuoja naujienlaiskis sekcija?", !!testSection);


  const recipes = [
    {
      title: "Sultingas kepsnys",
      desc: "Jautienos kepsnys su žolelėmis.",
      portions: 4,
      time: "30 min.",
      author: "Greta",
      date: "2025-04-11",
      likes: 26,
      comments: 3,
      tips: "Neperkepk – vidus turi likti šiek tiek rausvas.",
      ingredients: ["Jautiena (2 kepsniai)", "Druska", "Pipirai", "Rozmarinas", "Alyvuogių aliejus"],
      instructions: [
        "Įkaitink grilį arba keptuvę.",
        "Pagardink kepsnius druska, pipirais ir rozmarinu.",
        "Apkepk po 3–4 min. iš kiekvienos pusės.",
        "Leisk pailsėti 5 minutes prieš patiekdami."
      ],
      photos: [
        "images/kepsnys.jpg",
        "images/kepsnys1.webp",
        "images/kepsnys2.webp"
      ],
      meal: "Vakarienė",
      type: "Pagrindiniai patiekalai",
      diet: "Sveika mityba",
      cuisine: "Lietuvių"
    },    
    {
      img: "images/makaronai.jpg",
      title: "Makaronai su vištiena",
      desc: "Greiti ir sotūs pietūs su saulėje džiovintais pomidorais.",
      meal: "Pietūs",
      type: "Pagrindiniai patiekalai",
      diet: "Pietūs",
      cuisine: "Italų"
    },
    {
      img: "images/sriubaa.jpg",
      title: "Moliūgų sriuba",
      desc: "Kreminė trinta moliūgų sriuba su kokosų pienu.",
      meal: "Pietūs",
      type: "Sriubos",
      diet: "Sveika mityba",
      cuisine: "Lietuvių"
    },
    {
      img: "images/avokadas.jpg",
      title: "Avokado skrebutis",
      desc: "Avokadų skrebutis su įvairiais pagardais – paprasta ir skanu.",
      meal: "Pusryčiai",
      type: "Pusryčiai",
      diet: "Veganiški patiekalai",
      cuisine: "Lietuvių"
    },
    {
      img: "images/bandeless.jpg",
      title: "Cinamoninės bandelės",
      desc: "Minkštos bandelės - Skanus desertas prie kavos.",
      meal: "Desertai",
      type: "Desertai",
      diet: "Vaikams",
      cuisine: "Lietuvių"
    },
    {
      img: "images/kosee.jpg",
      title: "Avižinė košė",
      desc: "Sveiki pusryčiai su uogomis.",
      meal: "Pusryčiai",
      type: "Pusryčiai",
      diet: "Sveika mityba",
      cuisine: "Lietuvių"
    },
    {
      img: "images/pietus.jpg",
      title: "Bulvių apkepas",
      desc: "Kreminis bulvių apkepas su česnaku, grietinėle ir traškia sūrio plutele .",
      meal: "Pietūs",
      type: "Pagrindiniai patiekalai",
      diet: "Be glitimo",
      cuisine: "Lietuvių"
    },
    {
      img: "images/makaronai_veganiskai.jpg",
      title: "Veganiški makaronai",
      desc: "Daržovėmis pagardinti makaronai su alyvuogėmis ir artišokais.",
      meal: "Pietūs",
      type: "Pagrindiniai patiekalai",
      diet: "Veganiški patiekalai",
      cuisine: "Italų"
    },
    {
      img: "images/aguonpienis.jpg",
      title: "Aguonų pienas",
      desc: "Tradicinis šventinis gėrimas su aguonomis ir medumi.",
      meal: "Gėrimai",
      type: "Gėrimai",
      diet: "Veganiški patiekalai",
      cuisine: "Lietuvių"
    },
    {
      img: "images/avinzirniai.jpg",
      title: "Saldžiarūgščiai avinžirniai",
      desc: "Avinžirnių troškinys su saldžiarūgščiu padažu ir ryžiais.",
      meal: "Pietūs",
      type: "Pagrindiniai patiekalai",
      diet: "Veganiški patiekalai",
      cuisine: "Japonų"
    },
    {
      img: "images/cesario_salotos.jpg",
      title: "Cezario salotos",
      desc: "Klasikinės salotos su parmezanu ir traškiais skrebučiais.",
      meal: "Pietūs",
      type: "Salotos",
      diet: "Sveika mityba",
      cuisine: "Italų"
    },
    {
      img: "images/gaivios_salotos.jpg",
      title: "Gaivios daržovių salotos",
      desc: "Agurkų, pomidorų ir svogūnų salotos su grietinės užpilu.",
      meal: "Salotos",
      type: "Salotos",
      diet: "Vegetariški patiekalai",
      cuisine: "Lietuvių"
    },
    {
      img: "images/kepta duona.jpg",
      title: "Kepta duona su sūrio padažu",
      desc: "Traški kepta duona su česnakiniu sūrio padažu.",
      meal: "Užkandžiai",
      type: "Užkandžiai",
      diet: "Be glitimo",
      cuisine: "Lietuvių"
    },
    {
      img: "images/kisielius.jpg",
      title: "Spanguolių kisielius",
      desc: "Tradicinis šventinis saldus gėrimas iš spanguolių.",
      meal: "Gėrimai",
      type: "Gėrimai",
      diet: "Vaikams",
      cuisine: "Lietuvių"
    },
    {
      img: "images/lazanija.jpg",
      title: "Klasikinė lazanija",
      desc: "Sotus ir greitas patiekalas su bolonese padažu.",
      meal: "Vakarienė",
      type: "Pagrindiniai patiekalai",
      diet: "Vaikams",
      cuisine: "Italų"
    },
    {
      img: "images/limonadas.jpg",
      title: "Gaivus limonadas",
      desc: "Citrinų gėrimas su mėtų lapeliais karštai dienai.",
      meal: "Užkandžiai",
      type: "Gėrimai",
      diet: "Vaikams",
      cuisine: "Lietuvių"
    },
    {
      img: "images/makaronai_kinietiskai.jpg",
      title: "Makaronai kinietiškai",
      desc: "Apkepti makaronai su daržovėmis ir sojos padažu.",
      meal: "Vakarienė",
      type: "Pagrindiniai patiekalai",
      diet: "Veganiški patiekalai",
      cuisine: "Kiniečių"
    },
    {
      img: "images/takos.jpg",
      title: "Takos su jautiena",
      desc: "Traškūs takos su malta jautiena, daržovėmis ir sūriu.",
      meal: "Vakarienė",
      type: "Pagrindiniai patiekalai",
      diet: "Be glitimo",
      cuisine: "Meksikiečių"
    },
    {
      img: "images/tiramisu.webp",
      title: "Tiramisu",
      desc: "Itališkas desertas su kava ir maskarponės kremu.",
      meal: "Desertai",
      type: "Desertai",
      diet: "Vegetariški patiekalai",
      cuisine: "Italų"
    },
    {
      img: "images/Makaronu-salotos-su-kepta-vistiena.jpg",
      title: "Makaronų salotos su kepta vištiena",
      desc: "Sočios salotos su makaronais, vištiena ir daržovėmis.",
      meal: "Pietūs",
      type: "Salotos",
      diet: "Vaikams",
      cuisine: "Lietuvių"
    },
    {
      img: "images/meksikietiska_sriuba.jpg",
      title: "Meksikietiška sriuba",
      desc: "Aštri pomidorinė sriuba su kukurūzais ir prieskoniais.",
      meal: "Vakarienė",
      type: "Sriubos",
      diet: "Be glitimo",
      cuisine: "Meksikiečių"
    },
    {
      img: "images/mini_burgeriai.jpg",
      title: "Mini burgeriai",
      desc: "Mini mėsainių rinkinys vakarėliams ar užkandžiams.",
      meal: "Užkandžiai",
      type: "Užkandžiai",
      diet: "Vaikams",
      cuisine: "Amerikiečių"
    },
    {
      img: "images/naminiai_sushi.jpg",
      title: "Naminiai suši",
      desc: "Lengvai paruošiami suši su lašiša ir daržovėmis.",
      meal: "Vakarienė",
      type: "Pagrindiniai patiekalai",
      diet: "Vegetariški patiekalai",
      cuisine: "Japonų"
    },
    {
      img: "images/naminiai-varskes-sureliai-receptas.jpg",
      title: "Naminiai varškės sūreliai",
      desc: "Skanūs ir sveikesni varškės sūreliai aplieti šokoladu.",
      meal: "Desertai",
      type: "Desertai",
      diet: "Be glitimo",
      cuisine: "Lietuvių"
    },
    {
      img: "images/ramenas.jpg",
      title: "Ramen sriuba",
      desc: "Tradicinė japoniška sriuba su makaronais ir daržovėmis.",
      meal: "Vakarienė",
      type: "Sriubos",
      diet: "Veganiški patiekalai",
      cuisine: "Japonų"
    },
    {
      img: "images/ryziu_bowlas.jpg",
      title: "Ryžių dubenėlis su lašiša",
      desc: "Sveikas ir sotus ryžių bowlas su avokadu ir daržovėmis.",
      meal: "Pietūs",
      type: "Pagrindiniai patiekalai",
      diet: "Sveika mityba",
      cuisine: "Japonų"
    },
    {
      img: "images/smoothie.jpg",
      title: "Braškių ir bananų glotnutis",
      desc: "Švelnus vaisių kokteilis su chia sėklomis pusryčiams.",
      meal: "Pusryčiai",
      type: "Gėrimai",
      diet: "Vegetariški patiekalai",
      cuisine: "Amerikiečių"
    },
    {
      img: "images/uzkandis.jpg",
      title: "Užkandukai su lašiša",
      desc: "Traškūs užkandžiai su kreminiu sūriu ir rūkyta lašiša.",
      meal: "Užkandžiai",
      type: "Užkandžiai",
      diet: "Sveika mityba",
      cuisine: "Italų"
    },
    {
      img: "images/vegetariski_pusryciai.jpg",
      title: "Vegetariškas pusryčių dubenėlis",
      desc: "Subalansuoti pusryčiai su kiaušiniu ir daržovėmis.",
      meal: "Pusryčiai",
      type: "Salotos",
      diet: "Vegetariški patiekalai",
      cuisine: "Kiniečių"
    },
    {
      img: "images/vistiena_kinietiskai.jpg",
      title: "Kinietiškai apkepta vištiena",
      desc: "Traški vištiena saldžiarūgščiame padaže.",
      meal: "Pietūs",
      type: "Pagrindiniai patiekalai",
      diet: "Be glitimo",
      cuisine: "Kiniečių"
    },
    {
      img: "images/sveikas maistas.jpeg",
      title: "Salotos su lašiša",
      desc: "Gaivios ir maistingos salotos su lašiša.",
      meal: "Pietūs",
      type: "Pagrindiniai patiekalai",
      diet: "Vegetariški patiekalai",
      cuisine: "Japonų"
    }
    
  ];
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const meal = btn.getAttribute("data-meal");
  
      showSection(targetId);
  
      setTimeout(() => {
        const mealSection = document.getElementById("meal-" + meal.toLowerCase());
        if (mealSection) {
          mealSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    });
  });
  
  let filteredRecipes = [...recipes];
  let currentIndex = 0;
  const recipesPerPage = 6;

  function renderRecipes(list, from = 0, count = recipesPerPage) {
    const sliced = list.slice(from, from + count);
    sliced.forEach(r => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      const imgSrc = r.img || (r.photos?.length ? r.photos[0] : "images/default.jpg");
      card.innerHTML = `
        <img src="${imgSrc}" alt="${r.title}">
      
      <p><strong>${r.title}</strong><br><small>${r.desc}</small></p>
      <button>Peržiūrėti receptą</button>
    `;      
      recipeList.appendChild(card);
    });
  }

  function applyFilters() {
    const checkboxes = document.querySelectorAll(".filter");
    const selected = { meal: [], type: [], diet: [], cuisine: [] };

    checkboxes.forEach(c => {
      if (c.checked) selected[c.dataset.type].push(c.value);
    });

    filteredRecipes = recipes.filter(r => {
      return (!selected.meal.length || selected.meal.includes(r.meal)) &&
             (!selected.type.length || selected.type.includes(r.type)) &&
             (!selected.diet.length || selected.diet.includes(r.diet)) &&
             (!selected.cuisine.length || selected.cuisine.includes(r.cuisine));
    });

    currentIndex = 0;
    recipeList.innerHTML = "";
    applySearch();
  }

  function applySearch() {
    const query = searchInput?.value.toLowerCase() || "";
    const result = filteredRecipes.filter(r =>
      r.title.toLowerCase().includes(query) ||
      r.desc.toLowerCase().includes(query)
    );

    recipeList.innerHTML = "";
    currentIndex = 0;
    renderRecipes(result, currentIndex, recipesPerPage);
    currentIndex += recipesPerPage;

    loadMoreBtn.style.display = result.length > currentIndex ? "inline-block" : "none";
  }

  function renderMealRecipes(meal, count = 4) {
    const container = document.getElementById("meal-" + meal.toLowerCase());
    const existingCount = container?.childElementCount || 0;

    const filtered = recipes.filter(r => r.meal === meal);
    const toRender = filtered.slice(existingCount, existingCount + count);

    toRender.forEach(r => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
      <img src="${r.img}" alt="${r.title}">
      <p><strong>${r.title}</strong><br><small>${r.desc}</small></p>
      <button>Peržiūrėti receptą</button>
    `;               
      container.appendChild(card);
    });
  }

  loadMoreBtn?.addEventListener("click", () => {
    renderRecipes(filteredRecipes, currentIndex, recipesPerPage);
    currentIndex += recipesPerPage;
    if (currentIndex >= filteredRecipes.length) {
      loadMoreBtn.style.display = "none";
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      // Apsauga: jeigu paspausta ant akutės ar jos viduje – nieko nedaryti
      if (e.target.classList.contains("toggle-password") || e.target.closest(".toggle-password")) {
        return;
      }
  
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      console.log("Paspausta ant nuorodos:", targetId);
  
      const allSections = document.querySelectorAll("section");
      allSections.forEach(sec => {
        console.log("Sekcija:", sec.id, "→", sec.id === targetId ? "RODYTI" : "SLEPTI");
        sec.style.display = sec.id === targetId ? "block" : "none";
      });
  
      if (targetId === "visi-receptai") {
        recipeList.innerHTML = "";
        currentIndex = 0;
        filteredRecipes = [...recipes];
        renderRecipes(filteredRecipes, currentIndex, recipesPerPage);
        currentIndex += recipesPerPage;
        loadMoreBtn.style.display = "inline-block";
      }
  
      if (targetId === "valgymo-metas") {
        document.querySelectorAll("[id^='meal-']").forEach(el => el.innerHTML = "");
        const mealTypes = ["Pusryčiai", "Pietūs", "Vakarienė", "Užkandžiai", "Desertai"];
        mealTypes.forEach(meal => renderMealRecipes(meal, 4));
        document.querySelectorAll(".load-more-btn[data-meal]").forEach(btn => {
          btn.onclick = () => renderMealRecipes(btn.dataset.meal, 4);
        });
      }
  
      window.scrollTo(0, 0);
    });
  });     

  logo?.addEventListener("click", () => {
    sections.forEach(sec => {
      sec.style.display = (sec.id === "home" || sec.id === "home-kategorijos") ? "block" : "none";
    });
    window.scrollTo(0, 0);
  });    

  document.querySelectorAll(".filter").forEach(cb =>
    cb.addEventListener("change", applyFilters)
  );

  clearFiltersBtn?.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(cb => cb.checked = false);
    filteredRecipes = [...recipes];
    currentIndex = 0;
    recipeList.innerHTML = "";
    renderRecipes(filteredRecipes, currentIndex, recipesPerPage);
    currentIndex += recipesPerPage;
    loadMoreBtn.style.display = "inline-block";
  });

  searchInput?.addEventListener("input", applySearch);

// Ingredientų pridėjimas
function addIngredientRow() {
const container = document.getElementById("ingredients-list");
const row = document.createElement("div");
row.className = "ingredient-row";
row.innerHTML = `
  <input type="text" placeholder="Ingrediento pavadinimas" required>
  <input type="text" placeholder="Kiekis" required>
  <input type="text" placeholder="Matavimo vnt." required>
  <button type="button" class="remove">✖</button>
`;
container.appendChild(row);
}

// Rodyti peržiūrą įkeltos nuotraukos
document.getElementById("image-upload")?.addEventListener("change", (e) => {
const previewContainer = document.getElementById("photo-preview");
previewContainer.innerHTML = "";

[...e.target.files].forEach(file => {
  const reader = new FileReader();
  reader.onload = event => {
    const img = document.createElement("img");
    img.src = event.target.result;
    previewContainer.appendChild(img);
  };
  reader.readAsDataURL(file);
});
});

// Pirmi 3 ingredientai automatiškai
for (let i = 0; i < 3; i++) addIngredientRow();

// Pridėti naują ingredientą
document.querySelector(".add-ingredient")?.addEventListener("click", () => {
addIngredientRow();
});

// Šalinti ingredientą
document.getElementById("ingredients-list")?.addEventListener("click", (e) => {
if (e.target.classList.contains("remove")) {
  e.target.parentElement.remove();
}
});

// Validacija prieš įkėlimą
document.getElementById("recipe-form")?.addEventListener("submit", (e) => {
e.preventDefault();

const inputs = e.target.querySelectorAll("input, textarea");
let allFilled = true;
inputs.forEach(input => {
  if (!input.value.trim()) allFilled = false;
});

if (!allFilled) {
  alert("Prašome užpildyti visus laukus.");
  return;
}

alert("Receptas sėkmingai įkeltas!");
// Toliau gali būti siunčiama į serverį ar duomenų bazę
});
// Kontaktų forma: rodyti žinutę „Žinutė išsiųsta“
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
e.preventDefault();
document.getElementById("contact-success").style.display = "block";

// Išvalome laukus (neprivaloma)
this.reset();

// Po 5 sekundžių paslepiame žinutę
setTimeout(() => {
  document.getElementById("contact-success").style.display = "none";
}, 5000);
});

let isLoggedIn = false;

// Sekcijų valdymas
function showSection(id) {
console.log(">> showSection(", id, ")");

// Jei paspausta ant akutės, nesukelia netyčinio hide
if (!id || typeof id !== "string") {
  console.warn("⚠️ Netinkamas sekcijos ID:", id);
  return;
}

const sections = document.querySelectorAll("section");
sections.forEach(sec => {
  if (sec.id === id) {
    sec.style.display = "block";
    console.log(`Sekcija: ${sec.id} → RODOMA ✅`);
  } else {
    sec.style.display = "none";
    console.log(`Sekcija: ${sec.id} → SLEPTI`);
  }
});
}


// Prisijungimas
document.getElementById("login-form")?.addEventListener("submit", (e) => {
e.preventDefault();
isLoggedIn = true;
showSection("home"); // arba kita sekcija
});

// Registracija
document.getElementById("register-form")?.addEventListener("submit", (e) => {
e.preventDefault();
alert("Registracija sėkminga!");
document.getElementById("register-form").classList.remove("active");
document.getElementById("login-form").classList.add("active");
});

// Formų perjungimas be peradresavimo
document.getElementById("switch-to-register")?.addEventListener("click", function (e) {
e.preventDefault();
document.getElementById("login-form")?.classList.remove("active");
document.getElementById("register-form")?.classList.add("active");
});

document.getElementById("switch-to-login")?.addEventListener("click", function (e) {
e.preventDefault();
document.getElementById("register-form")?.classList.remove("active");
document.getElementById("login-form")?.classList.add("active");
});

// Prisijungimo parodymas paspaudus mygtuką viršuje
document.querySelector(".login-btn")?.addEventListener("click", () => {
showSection("prisijungti");
document.getElementById("login-form")?.classList.add("active");
document.getElementById("register-form")?.classList.remove("active");
});

// Parodyti/Slėpti slaptažodį paspaudus ant akutės
document.querySelectorAll(".toggle-password").forEach(span => {
span.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation(); // labai svarbu
  e.stopPropagation();

  console.log("👁 Akutė paspausta");

  const targetId = span.getAttribute("data-target");
  const input = document.getElementById(targetId);

  if (input) {
    const newType = input.type === "password" ? "text" : "password";
    input.type = newType;
    console.log("🔁 Tipas pakeistas iš password į", newType);
  } else {
    console.warn("⚠️ Nerastas input su ID:", targetId);
  }

  // Papildomai išloginam ar forma paslėpta
  const loginForm = document.getElementById("login-form");
  const computed = window.getComputedStyle(loginForm).display;
  console.log("📦 formos display:", computed);
});
});

// Prisijungimas: rodyti širdelę, profilį ir slėpti prisijungimo mygtuką
document.getElementById("login-form")?.addEventListener("submit", (e) => {
e.preventDefault();
isLoggedIn = true;

// Parodyti elementus prisijungus
document.querySelector(".top-heart")?.classList.remove("d-none");
document.querySelector(".top-profile")?.classList.remove("d-none");
document.querySelector(".login-btn")?.classList.add("d-none");

showSection("home");
});

// Atsijungimas
document.getElementById("logout")?.addEventListener("click", () => {
isLoggedIn = false;

// Grąžinti pradinius mygtukus
document.querySelector(".top-heart")?.classList.add("d-none");
document.querySelector(".top-profile")?.classList.add("d-none");
document.querySelector(".login-btn")?.classList.remove("d-none");

showSection("home");
});

// Širdelės paspaudimas – rodyti megstamiausius
document.querySelector(".top-heart")?.addEventListener("click", () => {
  showSection("megstamiausi");

  const favoritesList = document.getElementById("favorites-list");
  const noMsg = document.getElementById("no-favorites-msg");

  // DEMO: kol kas tiesiog 1 receptas
  favoritesList.innerHTML = "";
  const sampleCard = document.createElement("div");
  sampleCard.className = "recipe-card";
  sampleCard.innerHTML = `
    <img src="images/sriubaa.jpg" alt="Mėgstamiausias">
    <p><strong>Mėgstamiausias receptas</strong><br><small>Kreminė trinta moliūgų sriuba.</small></p>
    <button>Peržiūrėti receptą</button>
  `;
  favoritesList.appendChild(sampleCard);

  // Jei nėra, parodyti pranešimą
  noMsg.style.display = favoritesList.children.length === 0 ? "block" : "none";
});

// Dinaminis recepto atvaizdavimas
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("view-recipe-btn")) {
    const title = e.target.getAttribute("data-title");
    const recipe = recipes.find(r => r.title === title);
    if (!recipe) return alert("Receptas nerastas!");

    // UŽPILDOM DUOMENIS
    document.getElementById("receptas-pavadinimas").innerText = recipe.title;
    document.getElementById("receptas-aprasymas").innerText = recipe.desc;
    document.getElementById("receptas-porcijos").innerText = recipe.portions || "-";
    document.getElementById("receptas-laikas").innerText = recipe.time || "-";
    document.getElementById("receptas-author").innerText = `Publikavo: ${recipe.author || "Greta"}`;
    document.getElementById("receptas-date").innerText = `Data: ${recipe.date || "2025-04-11"}`;
    document.getElementById("receptas-likes").innerText = recipe.likes || "0";
    document.getElementById("receptas-comments").innerText = recipe.comments || "0";

    const ingredientList = document.getElementById("receptas-ingredientai");
    ingredientList.innerHTML = "";
    (recipe.ingredients || []).forEach(i => {
      const li = document.createElement("li");
      li.textContent = i;
      ingredientList.appendChild(li);
    });

    const stepsList = document.getElementById("receptas-instrukcijos");
    stepsList.innerHTML = "";
    (recipe.instructions || []).forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });

    document.getElementById("receptas-patarimai").innerText = recipe.tips || "-";

    // Karuselė
    const carousel = document.querySelector(".carousel-track");
    carousel.innerHTML = "";
    const images = recipe.photos || [recipe.img];
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      carousel.appendChild(img);
    });

    let index = 0;
    const updateCarousel = () => {
      const width = carousel.offsetWidth;
      carousel.style.transform = `translateX(-${index * width}px)`;
    };

    document.querySelector(".carousel-btn.prev").onclick = () => {
      if (index > 0) {
        index--;
        updateCarousel();
      }
    };

    document.querySelector(".carousel-btn.next").onclick = () => {
      if (index < images.length - 1) {
        index++;
        updateCarousel();
      }
    };

    // Rodyti puslapį
    showSection("receptas");
    window.scrollTo(0, 0);
  }
});

})
