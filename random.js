function range(a, b, step=1){
    return Array(b - a).fill().map((_, i) => i + a).filter(k => k % step === 0);
}

function randNumStr(length){
    return Array(length).fill().map(_ => String(Math.random())[2]).join('');
}
