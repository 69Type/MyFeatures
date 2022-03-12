let observer = new MutationObserver(mutationRecords => {
    mutationRecords.forEach(record => {
        record.addedNode.forEach(node => {
            console.log(node);
        });
    });
});

observer.observe(elem, {
    childList: true, // наблюдать за непосредственными детьми
    subtree: true, // и более глубокими потомками
    characterDataOldValue: true // передавать старое значение в колбэк
});
