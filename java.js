let search = window.location.search;

   if (search) {
    userName = window.location.search.split('=')[1];
   } else {
     userName = 'voytov93';
   }
    fetch('https://api.github.com/users/'+ userName)
      .then(res => res.json())
      .then(json => {

        if (json.login) {

          if (!json.bio) {
            json.bio= 'Пользователь не указал био';
          }

          if (!json.name) {
            json.name= 'Пользователь не указал имя';
          }
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
      } else {
        alert('Пользователь не найден')
      }
    });
