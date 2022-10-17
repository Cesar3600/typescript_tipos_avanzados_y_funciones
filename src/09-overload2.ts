export function parseStr(input: string): string[]
export function parseStr(input: string[]): string
export function parseStr(input: number): boolean

/* export function parseStr(input: string | string[]): string | string[] {
	if (Array.isArray(input)) {
		return input.join('') // transforma a string
	} else {
		return input.split('') // transforma a cadena
	}
} */

export function parseStr(input: unknown): unknown {
	if (Array.isArray(input)) {
		return input.join('') // transforma a string
	} else if (typeof input === 'string') {
		return input.split('') // transforma a cadena
	} else if (typeof input === 'number') {
		return true // devuelve true si es un number
	}
}

const rtaArray = parseStr('nico')
rtaArray.reverse()

/* if (Array.isArray(rtaArray)) {
	rtaArray.reverse()
} */

console.log('rtaArray', rtaArray)

const rtaStr = parseStr(['n', 'i', 'c', 'o'])
rtaStr.toLowerCase()

/* if (typeof rtaStr === 'string') {
	rtaStr.toLowerCase()
} */

console.log('rtaStr', rtaStr)
