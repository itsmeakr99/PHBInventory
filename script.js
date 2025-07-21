const categories = {
    Produce: [
    { name: "Bell Pepper", quantity: 0 },
    { name: "Cabbage", quantity: 0 },
    { name: "Carrot", quantity: 0 },
    { name: "Cilantro", quantity: 0 },
    { name: "Curry Leaves", quantity: 0 },
    { name: "Egg Plant", quantity: 0 },
    { name: "Garlic", quantity: 0 },
    { name: "Ginger", quantity: 0 },
    { name: "Green Beans", quantity: 0 },
    { name: "Lemon", quantity: 0 },
    { name: "Mint", quantity: 0 },
    { name: "Thai Chilli", quantity: 0 },
    { name: "Anhem Pakora Chilli", quantity: 0 },
    { name: "Fingerhot Chilli", quantity: 0 },
    { name: "Potatos", quantity: 0 },
    { name: "Yellow Onions", quantity: 0 },
    { name: "Red Onions", quantity: 0 },
    { name: "Spring Onions", quantity: 0 }
]
,
    Dairy: [
    { name: "Milk", quantity: 0 },
    { name: "Unsalted Butter", quantity: 0 },
    { name: "Paneer", quantity: 0 },
    { name: "Sour Cream", quantity: 0 },
    { name: "Cheese", quantity: 0 },
    { name: "Cream", quantity: 0 },
    { name: "Eggs", quantity: 0 }
]
,
    Meat: [
    { name: "Fish", quantity: 0 },
    { name: "Shrimp", quantity: 0 },
    { name: "Kheema", quantity: 0 },
    { name: "Haleem", quantity: 0 },
    { name: "Goat", quantity: 0 },
    { name: "Goat Leg", quantity: 0 },
    { name: "Quarters Leg Meat", quantity: 0 },
    { name: "Thighs", quantity: 0 },
    { name: "Whole Chicken", quantity: 0 },
    { name: "Nalli Gosh", quantity: 0 }
]
,
    "Packing Materials": [
    { name: "RO - 32", quantity: 0 },
    { name: "RO - 16", quantity: 0 },
    { name: "RE - 16", quantity: 0 },
    { name: "RE - 58", quantity: 0 },
    { name: "Foam Boxes (9*9)", quantity: 0 },
    { name: "Plates (9\")", quantity: 0 },
    { name: "Glasses (7Oz)", quantity: 0 },
    { name: "3.25 Oz Cups & Lids", quantity: 0 },
    { name: "8 Oz Deli Containers", quantity: 0 },
    { name: "16 Oz Deli Containers", quantity: 0 },
    { name: "24 Oz Deli Containers", quantity: 0 },
    { name: "32Oz Deli Containers", quantity: 0 },
    { name: "8 Oz Safe Seal Containers", quantity: 0 },
    { name: "Spoons", quantity: 0 },
    { name: "Forks", quantity: 0 },
    { name: "Nitrile Gloves (Medium)", quantity: 0 },
    { name: "Nitrile Gloves (Large)", quantity: 0 },
    { name: "Thankyou Covers", quantity: 0 },
    { name: "Knapkins", quantity: 0 },
    { name: "Aluminium Foil (18\")", quantity: 0 },
    { name: "Aluminium Foil (12\")", quantity: 0 },
    { name: "Food Service Film", quantity: 0 },
    { name: "Half Size Shallow", quantity: 0 },
    { name: "Half Size Small Medium", quantity: 0 },
    { name: "Half Size Deep", quantity: 0 },
    { name: "Long Shallow", quantity: 0 },
    { name: "Long Medium", quantity: 0 },
    { name: "Long Deep", quantity: 0 },
    { name: "Half Size Lids", quantity: 0 },
    { name: "Long Lids", quantity: 0 }
]
,
    "Dry Groceries": [
    { name: "Peanuts", quantity: 0 },
    { name: "Coconut Powder", quantity: 0 },
    { name: "Corn Starch", quantity: 0 },
    { name: "Rice Flour", quantity: 0 },
    { name: "All Purpose Floor", quantity: 0 },
    { name: "Baking Soda", quantity: 0 },
    { name: "Rice Bags", quantity: 0 },
    { name: "Salt", quantity: 0 },
    { name: "Tasting Salt", quantity: 0 },
    { name: "Chilli Powder", quantity: 0 },
    { name: "Degi Mirchi", quantity: 0 },
    { name: "Turmeric", quantity: 0 },
    { name: "Cumin Powder", quantity: 0 },
    { name: "Coriander Powder", quantity: 0 },
    { name: "Cumin Seeds", quantity: 0 },
    { name: "Coriander Seeds", quantity: 0 },
    { name: "Fennel Seeds", quantity: 0 },
    { name: "Sesame Seeds", quantity: 0 },
    { name: "Methi Seeds", quantity: 0 },
    { name: "Mustard Seeds", quantity: 0 },
    { name: "Poppy Seeds", quantity: 0 },
    { name: "Shah Jeera", quantity: 0 },
    { name: "Melon Seeds", quantity: 0 },
    { name: "Amchur", quantity: 0 },
    { name: "Kasuri Methi", quantity: 0 },
    { name: "Black Salt", quantity: 0 },
    { name: "Kalongi Seeds", quantity: 0 },
    { name: "Fried Chana Dal", quantity: 0 },
    { name: "Green Vatana", quantity: 0 },
    { name: "Meat Masala", quantity: 0 },
    { name: "Chat Masala", quantity: 0 },
    { name: "PHB Garam Masala", quantity: 0 },
    { name: "Soya Granules", quantity: 0 },
    { name: "Badam", quantity: 0 },
    { name: "Raisins", quantity: 0 },
    { name: "Pistachos", quantity: 0 },
    { name: "Cashwes", quantity: 0 },
    { name: "Apricots", quantity: 0 },
    { name: "Cardamom", quantity: 0 },
    { name: "Daggar Ka Phool", quantity: 0 },
    { name: "Chakka", quantity: 0 },
    { name: "Cloves", quantity: 0 },
    { name: "Lavanga", quantity: 0 },
    { name: "Whole Chilli", quantity: 0 },
    { name: "Bay Leaves", quantity: 0 },
    { name: "Star Anise", quantity: 0 },
    { name: "Jeera", quantity: 0 },
    { name: "Split Urad Dal", quantity: 0 },
    { name: "Kebab Chini", quantity: 0 },
    { name: "Ajwain Seeds", quantity: 0 },
    { name: "Lemon Juice", quantity: 0 },
    { name: "Ketchup", quantity: 0 },
    { name: "Oil", quantity: 0 },
    { name: "Sambal", quantity: 0 },
    { name: "Sriracha", quantity: 0 },
    { name: "Rose Water", quantity: 0 },
    { name: "Vannila Extract", quantity: 0 },
    { name: "Condensed Milk", quantity: 0 },
    { name: "Custard Powder", quantity: 0 },
    { name: "Black Pepper Powder", quantity: 0 },
    { name: "Mustard Oil", quantity: 0 },
    { name: "Wagh Bakri", quantity: 0 },
    { name: "Egg Yellow Color", quantity: 0 },
    { name: "Orange Color", quantity: 0 }
]
,
    "Cleaning Materials": [
    { name: "Green Soap", quantity: 0 },
    { name: "All Purpose Cleaner", quantity: 0 },
    { name: "Acid", quantity: 0 },
    { name: "Clorox", quantity: 0 },
    { name: "Aprons", quantity: 0 },
    { name: "Scrubbers", quantity: 0 },
    { name: "Green Scrubbers", quantity: 0 },
    { name: "Trash Bags (55 GAL)", quantity: 0 },
    { name: "Trash Bags (33 GAL)", quantity: 0 }
]
,
    "Can Sodas": [
    { name: "Coke Original", quantity: 0 },
    { name: "Diet Coke", quantity: 0 },
    { name: "Zero Sugar", quantity: 0 },
    { name: "Sprite", quantity: 0 },
    { name: "Fanta", quantity: 0 },
    { name: "ThumsUp", quantity: 0 },
    { name: "Bottle Coke", quantity: 0 },
    { name: "Topo Chico", quantity: 0 }
]
,
    "Frozen Items": [
    { name: "Onion Samosa", quantity: 0 },
    { name: "Jalapeno Samosa", quantity: 0 },
    { name: "Kheema Samosa", quantity: 0 },
    { name: "Punjabi Samosa", quantity: 0 },
    { name: "Veg Manchuria", quantity: 0 },
    { name: "Veg Cutlet", quantity: 0 },
    { name: "Hara Bhara Kebab", quantity: 0 },
    { name: "Malabar Parota", quantity: 0 },
    { name: "Malai Kofta Balls", quantity: 0 }
]
,
    "Preparations": [
    { name: "Biryani Masala", quantity: 0 },
    { name: "Fried Onions", quantity: 0 },
    { name: "Ginger Garlic Paste", quantity: 0 },
    { name: "Yogurt", quantity: 0 },
    { name: "Raita", quantity: 0 },
    { name: "Salan", quantity: 0 },
    { name: "Nalli Gosh", quantity: 0 },
    { name: "Kheema", quantity: 0 },
    { name: "Ghee", quantity: 0 },
    { name: "65 Sauce", quantity: 0 },
    { name: "Pepper Sauce", quantity: 0 },
    { name: "Chilli Sauce", quantity: 0 },
    { name: "Tikka Sauce", quantity: 0 },
    { name: "Tangdi Sauce", quantity: 0 },
    { name: "Haryali Sauce", quantity: 0 },
    { name: "Malai Sauce", quantity: 0 },
    { name: "Onion Sauce", quantity: 0 },
    { name: "Tomato Sauce", quantity: 0 },
    { name: "White Gravy", quantity: 0 },
    { name: "Cashew Paste", quantity: 0 },
    { name: "Dal Makhni", quantity: 0 },
    { name: "Apricot Paste", quantity: 0 },
    { name: "Custard", quantity: 0 },
    { name: "DKM", quantity: 0 },
    { name: "Rabdi", quantity: 0 },
    { name: "Pakora Mix", quantity: 0 },
    { name: "Curry Powder", quantity: 0 }
]
,
    "Miscellaneous": [],
};


let activeCategory = "Produce";
let editIndex = -1;

function $(id) {
    return document.getElementById(id);
}

function renderCategories() {
    const container = $("category-buttons");
    container.innerHTML = "";
    for (const cat in categories) {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.onclick = () => {
            activeCategory = cat;
            editIndex = -1;
            renderItems();
        };
        container.appendChild(btn);
    }
}

function renderItems() {
    $("category-title").textContent = activeCategory;
    const search = $("search").value.toLowerCase();
    const tbody = $("items-table").querySelector("tbody");
    tbody.innerHTML = "";

    categories[activeCategory].forEach((item, i) => {
        if (!item.name.toLowerCase().includes(search)) return;
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = i === editIndex ? "" : item.name;

        const qtyCell = document.createElement("td");
        qtyCell.textContent = item.quantity ?? "";

        const actions = document.createElement("td");
        actions.innerHTML = `
      <button onclick="editItem(${i})">✏️</button>
      <button onclick="deleteItem(${i})">🗑️</button>
    `;

        if (i === editIndex) {
            nameCell.innerHTML = `<input type="text" id="edit-name" value="${item.name}"/>`;
            qtyCell.innerHTML = `<input type="number" id="edit-qty" value="${item.quantity ?? ""}"/>`;
            actions.innerHTML = `<button onclick="saveEdit(${i})">💾 Save</button>`;
        }

        row.appendChild(nameCell);
        row.appendChild(qtyCell);
        row.appendChild(actions);
        tbody.appendChild(row);
    });
}

function addItem() {
    const name = $("new-item-name").value.trim();
    const qty = $("new-item-qty").value;
    if (!name) return;

    const entry = {
        name,
        quantity: activeCategory === "Preparations" ? null : Number(qty)
    };
    categories[activeCategory].push(entry);
    $("new-item-name").value = "";
    $("new-item-qty").value = "";
    renderItems();
}

function deleteItem(index) {
    categories[activeCategory].splice(index, 1);
    renderItems();
}

function editItem(index) {
    editIndex = index;
    renderItems();
}

function saveEdit(index) {
    const name = $("edit-name").value;
    const qty = $("edit-qty").value;
    categories[activeCategory][index].name = name;
    if (activeCategory !== "Preparations") {
        categories[activeCategory][index].quantity = Number(qty);
    }
    editIndex = -1;
    renderItems();
}

function exportCSV() {

    // Automatically trigger PDF download after CSV export
    const pdfLink = document.querySelector('.download-btn');
    if (pdfLink) {
        pdfLink.click();
    }

    let csv = "Category,Item,Quantity\n";
    for (const cat in categories) {
        categories[cat].forEach(({
            name,
            quantity
        }) => {
            csv += `"${cat}","${name}","${quantity ?? ""}"\n`;
        });
    }
    const blob = new Blob([csv], {
        type: "text/csv"
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "inventory.csv";
    link.click();
}

renderCategories();
renderItems();
