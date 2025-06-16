// 從 localStorage 取得json字串再轉成物件
  const cartData = JSON.parse(localStorage.getItem('cartData'));
// 設總金額初始值設為0
  let total = 0;
  // 遍歷購物車資料陣列
  cartData.forEach(item => {
    const li = document.createElement('li');
    // 設定商品名稱 與 價格（total）
    li.textContent = `${item.name} - ${item.total} 元`;
    // 把 li 加入購物車列表 ul 中
    cartList.append(li);
    // 累加該項商品的總價到 total
    total += item.total;
  });
  // 將計算好的總金額顯示在頁面指定的元素中
  document.getElementById('totalAmount').innerText = `總金額：${total} 元`;