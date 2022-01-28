function isArraysTheSame(array1, array2){
    return array1.length !== array2.length ? false : !array1.some((el, i) => el !== array2[i]);
}
