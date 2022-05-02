function setCookies() {
  const firstname  = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  let expires = new Date(Date.now() + 10000 * 86400);
  document.cookie = `firstname=${firstname};SameSite=Lax;expires=${expires.toGMTString()}`;
  document.cookie = `email=${email};SameSite=Lax;expires=${expires.toGMTString()}`;
  showForm();
}

function showCookies() {
  const par = document.createElement('p');
  par.innerHTML = `Email: ${getCookie('email')} - Firstname: ${getCookie('firstname')}`;
  document.body.append(par);
}

function getCookie(name) {
  if (document.cookie) {
    return `${document.cookie}`.split(`${name}=`)[1].split(';')[0];
  } else {
    return null;
  }
}

function showForm() {
  let elem = document.getElementsByClassName('form');
  // console.log(elem[0]);
  if (elem[0].style.display === 'none') {
    elem[0].style.display = 'block';
  } else {
    elem[0].style.display = 'none';
  }
  elem = document.getElementsByClassName('welcome');
  // console.log(elem[0]);
  if (elem[0].style.display === 'none') {
    elem[0].style.display = 'block';
  } else {
    elem[0].style.display = 'none';
  }
}

function hideForm() {
  showForm();
}

// Welcome FIRSTNAME (logout)
function showWelcomeMessageOrForm() {
  document.body.innerHTML = '';
}

function deleteCookiesAndShowForm() {
  let expires = new Date(Date.now());
  document.cookie = `firstname= ;SameSite=Lax;expires=${expires.toGMTString()}`;
  document.cookie = `email= ;SameSite=Lax;expires=${expires.toGMTString()}`;
  showForm();
}

window.onload = () => {
  // check for cookies, if they don't exist hideForm
  if (getCookie('firstname') != null && getCookie('email') != null) {
    hideForm();
  }
}

