// 選取所有 "menu_item"，在裡面放入ctrl
document.querySelectorAll(".menu_item").forEach(item => {
  // 在這個 menu_item 裡面，找出第一個 <p> 標籤
  p = item.querySelector("p");
  // 建立一個新的 <p> 標籤
  ctrl = document.createElement("p");
  //ctrl 的 HTML 內容：一個減號按鈕、一個輸入框、一個加號按鈕
  ctrl.innerHTML = 
  ` <button onclick="changeQty(this, -1)">−</button>
    <input type="text" value="0">
    <button onclick="changeQty(this, 1)">＋</button>`;
    p.after(ctrl);
});


// 點擊加減按鈕時呼叫
function changeQty(button, change) {
  item = button.closest('.menu_item'); // 找到整個菜的區塊
  input = item.querySelector('input'); // 找數量 input 欄位
  let qty = parseInt(input.value) + change; // 商品數量
  input.value = qty;
  unit = parseInt(item.querySelector('.price').innerText); // 單價
  item.querySelector('.total').innerText = qty * unit; // 總價 = 商品數量*單價
}

// 菜名和價錢的抓取,傳送到cart.html
function handleCheckout() {
  // 建立購物車陣列，存放菜名和價錢
  const cart = [];
  items = document.querySelectorAll('.menu_item');
  items.forEach(e => {
    // 取得商品名稱
    const name = e.querySelector('span').childNodes[0].nodeValue;

    // 取得總價
    const total = parseInt(e.querySelector('.total').innerText);

    // 如果總價 > 0，加入 cart 陣列中
    if (total > 0) {
      cart.push({ name, total });
    }
  });

  // 將 cart 陣列轉為 JSON 字串，存進 localStorage
  localStorage.setItem('cartData', JSON.stringify(cart));

  // 導向到購物車頁面
  window.location.href = 'cart.html';
}



