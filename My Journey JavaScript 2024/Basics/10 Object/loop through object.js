const name1 = [
  {
    name: "app",
    template: `
        <div>
          <h1>{{ name }}</h1>
        </div>
      `,
    arr: [1, 2, 3, 6, 4, 8],
  },
  {
    name: "yasin",
    template: `
        <div>
          <h1>{{ name }}</h1>
        </div>
      `,
    arr: [1, 2, 3, 6, 4, 8],
  },
  {
    name: "ali",
    template: `
        <div>
          <h1>{{ name }}</h1>
        </div>
      `,
    arr: [1, 2, 3, 6, 4, 8],
  },
  {
    name: "moha",
    template: `
        <div>
          <h1>{{ name }}</h1>
        </div>
      `,
    arr: [1, 2, 3, 6, 4, 8],
  },
]

name1.forEach((item) => {
  console.log(item.name + item.arr)
})
