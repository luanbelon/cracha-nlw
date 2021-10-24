const LinksSocialMedia = {
  github: 'luanbelon',
  youtube: 'luanbelon',
  facebook: 'luanbelon',
  instagram: 'luanbelon',
  twitter: 'oluanbelon'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()


function activeGreenTheme(){
  const mainContent = document.querySelector('main')
  const buttonGreenTheme = document.querySelector('#green-theme')
  const buttonDefaultTheme = document.querySelector('#default-theme')

  mainContent.style.backgroundImage='url(img/green-theme.svg)'
  mainContent.style.transitionDuration="2s"
  buttonGreenTheme.style.display='none'
  buttonDefaultTheme.style.display='block'
}

function activeDefaultTheme(){
  const mainContent = document.querySelector('main')
  const buttonGreenTheme = document.querySelector('#green-theme')
  const buttonDefaultTheme = document.querySelector('#default-theme')

  mainContent.style.backgroundImage='url(img/background.svg)'
  mainContent.style.transitionDuration="2s"
  buttonGreenTheme.style.display='block'
  buttonDefaultTheme.style.display='none'
}