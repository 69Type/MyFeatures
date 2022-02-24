function asyncGetPropertyOnIntervals(object, prop, step=0, timeout=-1){
    return new Promise(function(resolve, reject){
        const cur = object[prop];
        if (typeof cur === 'object') return reject(new Error('current value is not a primitive'));

        let timeoutId;
        if (timeout >= 0) timeoutId = setTimeout(reject.bind(new Error('timeout')), timeout);
        const id = setInterval(function(){
            if (object[prop] !== cur){
                timeoutId && clearTimeout(timeoutId);
                clearInterval(id);
                return resolve({
                    oldValue: cur,
                    value: object[prop]
                });
            }
        }, step);
    });
}
