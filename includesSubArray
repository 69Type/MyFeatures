Array.prototype.includesSubArray = function(array){
    return this.some(el => !Array.isArray(el) || el.length !== array.length ? false : !el.some((el, i) => el !== array[i]));
}
