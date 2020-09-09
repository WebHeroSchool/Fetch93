let search = new URLSearchParams(window.location.search);
//if (search.has('username')) {}
  let userName = search.get('username');
  console.log(userName);
  fetch('https://api.github.com/users/'+ userName)
    .then(res => res.json())
    .then(json => {
      if (!json.bio) {json.bio= 'Пользователь не указал био'};
      if (!json.name) {json.name= 'Пользователь не указал имя'};
      document.body.innerHTML=`
        <img src= ${json.avatar_url} alt="pic">
        <h1>
          <a href= ${json.html_url}>
            ${json.name}
          </a>
        </h1>
        <p>
          ${json.bio}
        </p>
      `;
    });   