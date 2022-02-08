function asyncGetElementOnObserver(selector, timeout=-1, observeOn=document){
    return new Promise((resolve, reject) => {
        const element = document.querySelector(selector);
        let id,
            observer;
        if (element) return resolve(element);
        if (timeout > 0) {
            id = setTimeout(() => {
                return reject(new Error('timeout'));
            }, timeout);
        }
        observer = new MutationObserver(mutationRecords => {
            mutationRecords.forEach(record => {
                record.addedNodes.forEach(node => {
                    let elem = node.querySelector?.(selector) || node.parentNode?.querySelector?.(selector);
                    if (elem) {id && clearInterval(id); resolve(elem);}
                });
            });
        });
        observer.observe(observeOn, {childList: true, subtree: true});
    });
}
