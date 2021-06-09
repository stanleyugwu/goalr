const styleInliner = (styleObject, inlineStyles) => {
    let a = inlineStyles[0].split(' ');
    let st = styleObject
    let [first,...rest] = a
    return st[first] ? st[first] +' '+rest.join(' ') : a.join(' ')
}

export default styleInliner