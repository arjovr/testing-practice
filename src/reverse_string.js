const reverseString = (str) => {
    const ret = []
    for (const s of str.toString()) {
        ret.push(s)
    }
    ret.reverse()
    return ret.join('')
}

export default reverseString
