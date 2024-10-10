export const SplitIntoWords = (sentense: string) => {
    return sentense.toLowerCase().split(' ').map(w => w.replace('!', ''))
}

export const sum = (a: number, b: number) => {
    return a + b
}

export const mult = (a: number, b: number) => {
    return a * b
}