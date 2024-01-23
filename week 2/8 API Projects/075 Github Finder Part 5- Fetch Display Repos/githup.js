class Github {
  constructor() {
    this.client_id = "ee05fd7345736adac2ad"
    this.client_secret = "f02d0627d7429934bef9ea5b1169798bb84315b3"
    this.repos_count = 5
    this.repos_sort = "created: asc"
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}
      /repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=
      ${this.client_secret}`
    )
    const profile = await profileResponse.json()
    const repos = await reposResponse.json()
    return {
      profile,
      repos,
    }
  }
}
// class Github {
//   constructor() {
//     this.client_id = "ee05fd7345736adac2ad"
//     this.client_secret = "f02d0627d7429934bef9ea5b1169798bb84315b3"
//   }

//   async getUser(user) {
//     const profileResponse = await fetch(
//       `https://api.github.com/users/${user}?client_id=${this.client_id}
//       &client_secret=${this.client_secret}`
//     )
//     const profile = await profileResponse.json()
//     return {
//       profile,
//     }
//   }
// }
