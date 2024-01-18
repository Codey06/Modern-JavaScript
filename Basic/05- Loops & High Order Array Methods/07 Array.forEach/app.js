const socials = ["twit", "face", "link", "ints"]
// console.log(socials.__proto__)

// socials.forEach(function (ite) {
//   console.log(ite)
// })
// socials.forEach((ite) => {
//   console.log(ite)
// })

// socials.forEach((item, index, arr) => console.log(`${index}-${item}`, arr))
// function logSocials(social) {
//   console.log(social)
// }
// socials.forEach(logSocials)

const socialObjec = [
  {
    name: "twit",
    link: "https://twitter.com/mustaf_sharma",
  },
  {
    name: "face",
    link: "https://facebook.com/mustaf.sharma",
  },
  {
    name: "link",
    link: "https://linkedin.com/in/mustaf-sharma",
  },
  {
    name: "ints",
    link: "https://instagram.com/mustaf.sharma",
  },
  {
    name: "twit",
    link: "https://twitter.com/mustaf_sharma",
  },
]
socialObjec.forEach((item) => console.log(item.link))
