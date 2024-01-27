class Weather {
  constructor(city, state) {
    this.apikey = "99dfe35fcb7de1ee"
    this.city = city
    this.state = state
    }
    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.wunderground.com/data
        /2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`)
        const data = await response.json()
        return data
    }
}
