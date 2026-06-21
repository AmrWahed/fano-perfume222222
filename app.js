import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById("products");
const input = document.getElementById("search");
const resultBox = document.getElementById("results");

// هنا هنخزن المنتجات بعد تحميلها
let products = [];

async function loadProducts() {

  container.innerHTML = `
    <div class="skeleton"></div>
    <div class="skeleton"></div>
    <div class="skeleton"></div>
    <div class="skeleton"></div>
  `;

  try {
    const querySnapshot = await getDocs(collection(db, "products"));

    products = []; // reset

    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data()
      });
    });

    renderProducts(products);

  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <h3 style="text-align:center">
        حدث خطأ أثناء تحميل المنتجات
      </h3>
    `;
  }
}

// عرض المنتجات
function renderProducts(list) {
  container.innerHTML = list.map(product => `
    <div class="card">

        <img src="${product.img || 'https://via.placeholder.com/300'}">

        <h3>${product.name}</h3>

        <p>${product.description || "عطر فاخر من مجموعة فانو"}</p>

        <strong>${product.price} ج.م</strong>

        <button onclick="addToCart('${product.id}')">
            أضف للسلة
        </button>

    </div>
  `).join("");
}

// 🔎 البحث الاحترافي
function searchProducts(query) {
  query = query.toLowerCase().trim();

  return products.filter(p => {
    return (
      p.name?.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query)
    );
  });
}

// input search
input.addEventListener("input", function () {
  const value = this.value;

  const filtered = searchProducts(value);

  // لو في بحث نعرض النتائج، لو فاضي نعرض الكل
  renderProducts(filtered);
});

// سلة
window.addToCart = function(id){
  alert("تم إضافة المنتج للسلة: " + id);
};



loadProducts();