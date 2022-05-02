function setCookies() {
  const firstname  = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  let expires = new Date(Date.now() + 10000 * 86400);
  document.cookie = `firstname=${firstname};SameSite=Lax;expires=${expires.toGMTString()}`;
  document.cookie = `email=${email};SameSite=Lax;expires=${expires.toGMTString()}`;
}

function showCookies() {
  const par = document.createElement('p');
  par.innerHTML = `Email: ${getCookie('email')} - Firstname: ${getCookie('firstname')}`;
  document.body.append(par);
}

function getCookie(name) {
  return `${document.cookie}`.split(`${name}=`)[1].split(';')[0];
}
