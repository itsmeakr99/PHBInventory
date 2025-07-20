const categories = {
    Produce: [],
    Dairy: [],
    Meat: [],
    "Packing Materials": [],
    "Dry Groceries": [],
    "Cleaning Materials": [],
    "Can Sodas": [],
    Miscellaneous: [],
    Preparations: [],
    "Frozen Items": []
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
