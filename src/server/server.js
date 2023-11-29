
const ipv4 = '192.168.10.201'

export default async function GetData() {
    const res = await fetch('http://' + ipv4 + ':8000/data')
    const data = await res.json()
    return data
}