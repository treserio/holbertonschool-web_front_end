let availableItems = [
  'Shampoo',
  'Soap',
  'Sponge',
  'Water',
];

function addItemToCart(item) {
  // console.log(item);
  sessionStorage.setItem(item, true);
}

function createStore() {
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
  if (sessionStorage.length) {
    let p = document.createElement('p');
    p.innerText = `You previously had ${sessionStorage.length} items in your cart`;
    document.body.append(p);
  }
}

window.onload = () => {
  if (!sessionStorage) {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
    throw new Error("No storage");
  } else {
    createStore();
    displayCart();
  }
}
