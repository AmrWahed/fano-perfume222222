

//دالة تغير الخلفية



function handleClick(category) {
    changeBackgroundImage(category);  // تغيير صورة الخلفية للصفحة
    showCategory(category);           // توجيه المستخدم للصفحة المطلوبة
}

function changeBackgroundImage(category) {
    const images = {
    };

    // تغيير صورة الخلفية للصفحة
    document.body.style.backgroundImage = `url(${images[category]})`;
    document.body.style.backgroundSize = 'cover';  // تغطية الخلفية بالكامل
    document.body.style.backgroundPosition = 'center';  // تحديد مكان الصورة في المنتصف
    document.body.style.backgroundRepeat = 'no-repeat';  // تجنب تكرار الصورة
}

function showCategory(category) {
    window.location.href = category + ".html"; // فتح الصفحة المطلوبة
}


//دالة الدارك مود



function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
}
function showCategory(category) {
    document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
    document.getElementById(category).classList.add('active');
}
function openProductPage(productName) {
    window.location.href = `product.html?name=${encodeURIComponent(productName)}`;
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}






//o دالة للتنقل إلى صفحة العطور الشرقية
function o() {
window.location.href = "o.html";
}

//f دالة للتنقل إلى صفحة العطور الفرنسية
function f() {
window.location.href = "f.html";
}
//n دالة للتنقل إلى صفحة العطور نيش 
function n() {
window.location.href = "n.html";
}

//fano دالة للتنقل إلى صفحة العطور فانو
function fano() {
window.location.href = "fano.html";
}




// دالة للتنقل إلى صفحة العطور الشرقية
function French() {
window.location.href = "b.html";
}

// دالة للتنقل إلى صفحة العطور الفرنسية
function Oriental() {
window.location.href = "c.html";
}
// دالة للتنقل إلى صفحة العطور الشرقية
function French() {
window.location.href = "b.html";
}

// دالة للتنقل إلى صفحة العطور الفرنسية
function Oriental() {
window.location.href = "c.html";
}




// دالة للتنقل إلى صفحة العطور الشرقية
function French() {
window.location.href = "b.html";
}

// دالة للتنقل إلى صفحة العطور الفرنسية
function Oriental() {
window.location.href = "c.html";
}
// دالة للتنقل إلى صفحة العطور الشرقية
function French() {
window.location.href = "b.html";
}

// دالة للتنقل إلى صفحة العطور الفرنسية
function Oriental() {
window.location.href = "c.html";
}




//دالة البحث


function searchProducts() {
const input = document.getElementById('searchInput').value.toLowerCase();
const products = document.querySelectorAll('.product');

products.forEach(product => {
const name = product.querySelector('h3')?.textContent.toLowerCase() || '';
if (name.includes(input)) {
  product.style.display = 'block';
} else {
  product.style.display = 'none';
}
});
}


{
    document.getElementById("other").style
    ;display="noon"
}




