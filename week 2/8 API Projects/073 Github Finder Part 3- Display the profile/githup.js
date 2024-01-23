class Github {
  constructor() {
    this.client_id = "ee05fd7345736adac2ad"
    this.client_secret = "f02d0627d7429934bef9ea5b1169798bb84315b3"
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}
      &client_secret=${this.client_secret}`
    )
    const profile = await profileResponse.json()
    return {
      profile,
    }
  }
}
