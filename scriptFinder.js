function scriptFinder(args){
    Array.from(f('script', true)).forEach(async function(s){
        let text = s.src ? await me.request(s.src) : s.textContent;
        if (text.includesAll(args)){
            console.log(s);
        }
    });
}
