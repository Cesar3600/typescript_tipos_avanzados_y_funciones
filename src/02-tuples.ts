const prices: (string | number)[] = [1, 3, 2, 2, 2, 'as']

prices.push(1)
prices.push('1')

let user: [string, number, boolean]
//user = ['nicobytes', 15]
//user = ['12', 15]

//user = []
//user = ['nico']
//user = ['nico', 12]

user = ['nico', 12, true]

const [userName, age] = user

console.log(userName)
console.log(age)
