let availableItems = [
  'Shampoo',
  'Soap',
  'Sponge',
  'Water',
];

function addItemToCart(item) {
  cart = getCartFromStorage();
  if (cart[item]) {
    cart[item]++;
  } else {
    cart[item] = 1;
  }
  // console.log(cart);
  for (let [key, val] of Object.entries(cart)) {
    sessionStorage.setItem(key, val);
  }
  displayCart();
}

function createStore() {
  document.body.innerHTML = '<h2>Available products:</h2>';
  let ul = document.createElement('ul');
  for (item of availableItems) {
    let li = document.createElement('li');
    li.innerText = item;
    li.setAttribute('onclick', 'addItemToCart(this.innerText);');
    ul.append(li);
  }
  document.body.append(ul);
}

function displayCart() {
  if (document.getElementsByTagName('h2').length < 2) {
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Your cart:';
    document.body.append(h2);
  }
  if (!document.getElementsByTagName('div').length) {
    document.body.append(document.createElement('div'));
  }
  updateCart();
}

window.onload = () => {
  if (!sessionStorage) {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
    throw new Error("No storage");
  } else {
    createStore();
    displayCart();
    getCartFromStorage();
  }
}

function getCartFromStorage() {
  cart = {};
  for (let [key, val] of Object.entries(sessionStorage)) {
    cart[key] = val;
  }
  // console.log('inGetCart=', cart);
  return cart;
}

function updateCart() {
  let div = document.getElementsByTagName('div')[0];
  div.innerHTML = '';
  let cart = getCartFromStorage();
  // console.log('inUpdate=', Object.entries(cart).length);
  if (!Object.entries(cart).length) {
    div.innerHTML = '<ul><li>Your cart is empty</li></ul>';
  } else {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.setAttribute('onclick', 'clearCart();');
    li.innerText = 'Clear my cart';
    ul.append(li);
    div.append(ul);

    for ([key, val] of Object.entries(cart)) {
      let li = document.createElement('li');
      li.innerHTML = `${key} x ${val} <span onclick="removeItemfromCart('${key}');">(remove)</span>`;
      ul.append(li);
    }
  }
}

function clearCart() {
  sessionStorage.clear();
  displayCart();
}

function removeItemfromCart(item) {
  sessionStorage.removeItem(item);
  displayCart();
}
