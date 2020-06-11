/********************
 * YOUR CODE BELOW! *
 ********************/

iGetTheJoke = false

havingFun = false

learning = false

killingIt = iGetTheJoke && learning

const returnFalse = function (par){

 return par = false
}

const isOpposite = function(par){

return !par
}

const both = function(par1,par2){
return par1 && par2

}

const either = function (bool1,bool2){

  return bool1 || bool2
}

const firstOnly = function (par1,par2){

  return par1 && !par2
}
const secondOnly = function (par1, par2){

  return !par1 && par2
}

const neither = function (par1,par2){

  return !par1 && !par2
}

const itsComplicated = function (par1,par2,par3){

return !par1 || par2 && par3
}



/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}