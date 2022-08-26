const str = `
010-5454-54545
asher1225@gmail.com
https://www.omdbapi.com/?i=tt3896198&apikey=aa9f19ac&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd
http://www.omdbapi.com/?i=tt3896198&apikey=aa9f19ac&s=frozen
동해물과 백두산이 마g르고g 닯도록
`

// const regExp = new RegExp('the', 'gi')
// const regExp = /the/gi
// console.log(str.match(regExp))

// const regExp = /fox/gi
// console.log(regExp.test(str))
// console.log(str.replace(regExp, 'AAA'))
// console.log(str)

// console.log(
//   str.match(/d$/gm)
// )

// console.log(
//   str.match(/^t/gmi)
// )

// console.log(
//   str.match(/h..p/g)
// )

// console.log(
//   str.match(/fox|dog/g)
// )

// console.log(
//   str.match(/https?/g)
// )

// console.log(
//   str.match(/d{2}/g)
// )

// console.log(
//   str.match(/d{2,}/g)
// )

// console.log(
//   str.match(/d{2,3}/g)
// )

// console.log(
//   str.match(/\w{2,3}/g)
// )

// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//   str.match(/[fox]/g)
// )
// console.log(
//   str.match(/[0-9]/g)
// )
// console.log(
//   str.match(/[0-5]{1,}/g)
// )
// console.log(
//   str.match(/[가-힣]{1,}/g)
// )

// console.log(
//   str.match(/\b/g)
// )
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )
// console.log(
//   str.match(/\d{1,}/g)
// )
// console.log(
//   str.match(/\s/g)
// )
// const strTest = ` the hello  world   !

// `
// console.log(
//   strTest.match(/\s/g),
//   strTest.replace(/\s/g, '')
// )

console.log(
  str.match(/.{1,}(?=@)/g),
 
)

console.log(
  str.match(/(?<=@).{1,}/g),
 
)

console.log(
  str.match(/.{1,}(?=@)/g),
  // str.replace(/(?=@)/g)
)