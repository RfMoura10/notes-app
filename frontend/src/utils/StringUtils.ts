export function toCapitalize(s : string) : string {
    let words : string[] = s.split(' ').map(p => p[0].toUpperCase()+p.substring(1,p.length).toLowerCase())
    return words.join(' ')
}