export class AuthApi {
  static registerUser(user, pass) {
    fetch('/users/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
      .then(res => res.json())
      .then(result => console.log(result))
  }
}
