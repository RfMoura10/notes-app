export function toCapitalize(s : string) : string {
    let words : string[] = s.split(' ').map(p => p[0].toUpperCase()+p.substring(1,p.length).toLowerCase())
    return words.join(' ')
}

export function getNow(): string {
    const now = new Date()
    const date = `${fmt(now.getDate().toString())}/${fmt((now.getMonth() + 1).toString())}/${now.getFullYear().toString()}`
    const hour = `${fmt(now.getHours().toString())}:${fmt(now.getMinutes().toString())}`
    return `${date} ${hour}`
}

function fmt(s : string) : string {
    return ("0" + s).slice(-2);
}