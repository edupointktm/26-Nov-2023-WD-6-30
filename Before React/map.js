let num = [4, 5, 7, 9, 16]
// let l = num.length
// let num_new=[]
// for(i=0;i<l;i++){
// num_new[i]=num[i]*2
// }
// console.log(num_new)

let num_new = num.filter((n) => n>7)
console.log(num_new)