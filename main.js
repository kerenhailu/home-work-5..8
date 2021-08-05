// ---- להדפיס מינימום מרשימה ----------

// var ages = [12 , 47 , 55 , 25 , 30 , 22];
// var min = ages[0];
// for (i = 1 ; i < ages.length;i++) {
//     if (ages[i]<min){
//         min = ages[i]
//     }
// }
// console.log(min);
// ------ להדפיס מקסימום מרשימה -----------
// var max = ages[0];
// for (i = 1 ; i < ages.length;i++) {
//     if (ages[i]>max){
//         max = ages[i]
//     }
// }
// console.log(max);
// ------xסכום מערך----------------
// var sum = 0
// for (i=0;i<ages.length;i++){
//     sum = sum+ages[i]
// }
// console.log(sum);
// ------- ממוצע מערך --------------------------
// var averge = 0
// for (i=0;i<ages.length;i++) {
//     averge = sum/ages.length
// }
// console.log(averge);
// -------------------------------------------
// var num = prompt("number");
// for (i=0;i<ages.length;i++) {
//     if(num == ages[i]){
//         console.log("yes")
//     }
// }
// -----------------------------------------------
// var cefel = 1;
// for (i=0;i<ages.length;i++) {
//     cefel = cefel*ages[i];
// }
// console.log(cefel);
// ----------------------------------------------------
// for (i=0;i<ages.length;i++) {
//     for(j=0;j<10;j++){
//         console.log(`${[i]} , ${ages[i]}`)
//     }
// }
// -----------------------------------------------------
// var stuff = []
// for (i=0;i<5;i++) {
//     stuff[i] = Number (prompt("stuff numbers"))
// }
// console.log(stuff);
// var SUM = 0 ;
// for (i=0;i<5;i++) {
//     SUM = SUM+stuff[i]
// }
// console.log(SUM)
// ----------שאלה 2----------------
// var marachone, marachtwo;
// marachone = [5, 4, 7, 9, 8]
// marachtwo = ["keren", "hailu", "hi", "you", "hellow"]

// ------------- שאלה 3 ------------------------
// var eight = [5, 7, 6, 8, 4, 2, 12, 84]
// var a = eight[0] 
// var b = eight[1]
// eight[0] = b , eight[1] = a
// console.log(eight[0], eight[1]);
// var c  = eight[7]
// eight[7]=a
// eight[0]=c
// console.log(eight[0], eight[7]);

// ----------------------שאלה 4-----------------
// var num = [ 5,3,7,8,11]
// sum = 0
// for (i=0;i<num.length;i++){
//     sum = sum+num[i]
// }
// console.log(`sum , ${sum}`)

// averge = 0
// for (i=0;i<num.length;i++){
//     averge = sum/num.length
// }
// console.log (`averge , ${averge}`)
// ----------------- שאלה 5 -----------------------------
// var names = ["keren", "hailu" , "yosef" , "eden" , "yafit"]
// for(i=0;i<5;i++){

// }console.log(names)
// -------------- שאלה 6 -----------------------------------
// var Numes = []
// for(i=0;i<5;i++){
//     Numes[i] = prompt("names ")
// }
// console.log(Numes);
// ----------- שאלה 7 -------------------------------
// var namesEight = ["ke", "re", "n" ,"keren" , "hailu ", "beyonce", "aviv" , "shay"]
// for(i=0;i<namesEight.length;i++){
//     user = prompt("namess ?")
//     namesEight.push(user)
//     console.log(namesEight)
// }
// ---------- שאלה 8 ----------------------------------

var threeNum = []
for (i=0;i<3;i++) {
    threeNum[i] = Number(prompt("three number"));
}
sumThree = 0
console.log(threeNum)
for (i=0;i<3;i++) {
    sumThree = threeNum[0]*threeNum[1]*threeNum[2]
}
console.log(sumThree)
var cefal = 0
console.log(sumThree)
for (i=0;i<3;i++) {
    cefal = cefal+threeNum[i]
}
console.log(cefal)

for (i=0;i<3;i++) {
if (threeNum[i]%2==0){
    console.log("זוגי")
}
else {
    console.log("אי זוגי")
}
}
// ------------------- שאלה 9 ----------------------------
// for (i=0;i<10;i++){
//     for(j=0;j<10;j++){
//         console.log(j*i)
//     }
// }
// --------------------- שאלה 10 ----------------------------
// var namesA = ["keren", "hailu", "yosef", "eden", "yafit"]
// var numbersA = []
// for (i = 0; i < 5; i++) {
//     numbersA[i] = Number(prompt("numbers ?"))

//     console.log(`${namesA }-${numbersA.length}`)
// }

// --------------- שאלה 11 ----------------------------------------
// var i = 1;
// while (i < 70) {

//     if (i / 7 || i == 7) {
//         console.log("boom")
//     }
//     i++
//     else {
//         console.log(`${i}`)
//     }
// }









