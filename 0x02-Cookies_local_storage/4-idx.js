function setCookies() {
  const firstname  = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  let expires = new Date(Date.now() + 10000 * 86400);
  document.cookie = `firstname=${firstname};SameSite=Lax;expires=${expires.toGMTString()}`;
  document.cookie = `email=${email};SameSite=Lax;expires=${expires.toGMTString()}`;
  elem = document.getElementsByClassName('welcome')[0].firstElementChild;
  elem.innerHTML = `Welcome ${firstname} <a href=# onclick="deleteCookiesAndShowForm()"><i>(logout)</i></a>`;
  showForm();
}

function showCookies() {
  const par = document.createElement('p');
  par.innerHTML = `Email: ${Cookies.get('email')} - Firstname: ${Cookies.get('firstname')}`;
  document.body.append(par);
}

// function getCookie(name) {
//   if (document.cookie) {
//     return `${document.cookie}`.split(`${name}=`)[1].split(';')[0];
//   } else {
//     return null;
//   }
// }

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

function showWelcomeMessageOrForm() {
  // check for cookies, if they don't exist hideForm
  if (Cookies.get('firstname') != null && Cookies.get('email') != null) {
    hideForm();
  }
  elem = document.getElementsByClassName('welcome')[0].firstElementChild;
  elem.innerHTML = `Welcome ${Cookies.get('firstname')} <a href=# onclick="deleteCookiesAndShowForm()"><i>(logout)</i></a>`;
}

function deleteCookiesAndShowForm() {
  Cookies.remove('firstname');
  Cookies.remove('email');
  showForm();
}

function setCookiesAndShowWelcomeMessage() {
  const firstname  = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  Cookies.set('firstname', firstname, {expires: 10, SameSite: 'Lax'});
  Cookies.set('email', email, {expires: 10, SameSite: 'Lax'});
  showWelcomeMessageOrForm();
}

window.onload = () => {
  showWelcomeMessageOrForm();
}

