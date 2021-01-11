const contactFormBtn = document.getElementById('formBtn')

contactFormBtn.addEventListener('submit', (e) => {
  e.preventDefault()

  const userName = document.getElementById('username').value
  const userEmail = document.getElementById('userEmail').value
  const userProject = document.getElementById('userProject').value
  const userMessage = document.getElementById('userMessage').value

  let dataClient = {
    userName,
    userEmail,
    userProject,
    userMessage,
  }

  let userLetter = fetch('/', {
    method: 'POST',
    body: dataClient,
  })
  console.log(userLetter.body.dataClient)

  /* let userLetter = await fetch('/', {
    method: 'POST',
    body: 1,
  })
    .then((res) => res.json())
    .then((dataClient) => {
      console.log('SERVER ')
      console.log(userLetter)
    })
  */
})
