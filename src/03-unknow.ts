let anyVar: any

anyVar = true
anyVar = undefined
anyVar = null
anyVar = 1
anyVar = []
anyVar = {}

let isNew: boolean = anyVar

anyVar.toUppercase()
anyVar.doSomethingLoqueSea()

let unknowVar: unknown

unknowVar = true
unknowVar = undefined
unknowVar = null
unknowVar = 1
unknowVar = []
unknowVar = 12
//unknowVar = 'cesar'

unknowVar.doSomething()
unknowVar.toUpperCase()
unknowVar.create()

if (typeof unknowVar === 'string') {
	console.log(unknowVar.toUpperCase())
}

if (typeof unknowVar === 'boolean') {
	let isNew: boolean = unknowVar
}

const parse = (str: string): unknown => {
	return JSON.parse(str)
}

JSON.parse('fkjsndfks')
