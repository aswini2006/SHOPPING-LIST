const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const filter = document.getElementById('filter');

// Add item
itemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = itemInput.value.trim();
  if (newItem !== '') {
    addItem(newItem);
    itemInput.value = '';
  }
});

function addItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${item}
    <button class="remove-item"><i class="fa-solid fa-xmark"></i></button>
  `;
  itemList.appendChild(li);
}

// Delete item
itemList.addEventListener('click', (e) => {
  if (e.target.closest('.remove-item')) {
    e.target.closest('li').remove();
  }
});

// Filter items
filter.addEventListener('input', (e) => {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('#item-list li').forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();
    item.style.display = itemText.includes(text) ? 'flex' : 'none';
  });
});
