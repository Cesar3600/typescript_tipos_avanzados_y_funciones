function parseStr(input: string | string[]): string | string[] {
	if (Array.isArray(input)) {
		return input.join('') // transforma a string
	} else {
		return input.split('') // transforma a cadena
	}
}

const rtaArray = parseStr('nico')

if (Array.isArray(rtaArray)) {
	rtaArray.reverse()
}

console.log('rtaArray', rtaArray)

const rtaStr = parseStr(['n', 'i', 'c', 'o'])

if (typeof rtaStr === 'string') {
	rtaStr.toLowerCase()
}

console.log('rtaStr', rtaStr)
