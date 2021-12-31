function autoAge() {
  const today = new Date()
  const currentMonth = today.getMonth() + 1
  const currentYear = today.getFullYear()
  const currentDay = today.getDay()

  function setAge(DD, MM, YYYY) {
    let age = currentYear - YYYY

    if (currentDay <= DD && currentMonth <= MM) age--

    if (age < 0) age = 'Cadê o neném?'

    return `${age} years-old male (he/him). Computer Engineer student at UFMS.`
  }

  /*Set it to your birth day so it will change yearly.
  If you don't want your age into your bio, just comment it.*/
  userBio.textContent = setAge(19, 06, 2002)
}

/*Here you can link your social networks' profiles.
Just change your username.*/
const userLinks = {
  github: 'JotaRoland',
  twitter: 'JosehRoland',
  instagram: 'joseh.roland'
}

function changeUserLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].children[0].href = `https://www.${social}.com/${userLinks[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userLinks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      // userBio.textContent = data.bio
      userPFP.src = data.avatar_url
      userURL.href = data.html_url
      userLogin.textContent = data.login
      mainTitle.textContent = `${data.name} - DoWhile 2021`
    })
}

autoAge()
changeUserLinks()
getGitHubProfileInfos()
