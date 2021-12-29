// * set current age at project's descriptionSET PERSON'S*
function autoAge() {
  var today = new Date()
  var currentMonth = today.getMonth() + 1
  var currentYear = today.getFullYear()
  var currentDay = today.getDay()
  var age = 0

  function setAge(DD, MM, YYYY) {
    age = currentYear - YYYY
    if (currentDay <= DD && currentMonth <= MM) {
      age--
    }
    return age
  }

  /*Set it to your birth day so it will change yearly.
  If you don't want your age into your bio, just comment it.*/
  userBio.textContent = `${setAge(
    19,
    06,
    2002
  )} years-old male (he/him). Computer Engineer student at UFMS.`
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
    li.children[0].href = `https://www.${social}.com/${userLinks[social]}`
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
    })
}

autoAge()
changeUserLinks()
getGitHubProfileInfos()
