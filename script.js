//your code here
function addItem() {
      const nameInput = document.getElementById('item-name-input');
      const priceInput = document.getElementById('item-price-input');
      const name = nameInput.value.trim();
      const price = parseFloat(priceInput.value.trim());

      if (!name || isNaN(price) || price < 0) return;

      const tr = document.createElement('tr');
      
      const nameTd = document.createElement('td');
      nameTd.setAttribute('data-ns-test', 'item-name');
      nameTd.innerText = name;

      const priceTd = document.createElement('td');
      priceTd.setAttribute('data-ns-test', 'item-price');
      priceTd.innerText = price.toFixed(2);

      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      document.getElementById('item-list').appendChild(tr);

      const grandTotalEl = document.querySelector('[data-ns-test="grandTotal"]');
      const currentTotal = parseFloat(grandTotalEl.innerText);
      grandTotalEl.innerText = (currentTotal + price).toFixed(2);

      nameInput.value = '';
      priceInput.value = '';
    }
