function setCookies() {
    const firstname  = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    console.log(firstname, email);
    document.cookie = `firstname=${firstname};SameSite=Lax`;
    document.cookie = `email=${email};SameSite=Lax`;
}

function showCookies() {
  const par = document.createElement('p');
  par.innerHTML = `Cookies: ${document.cookie}`;
  console.log(document.cookie);
  document.body.append(par);
}
