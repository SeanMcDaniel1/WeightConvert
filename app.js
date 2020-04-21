document.querySelector('#lbsInput').addEventListener('input', (e) => { //Adds an event listener to the inputTag, then invokes the function 
   let lbs = e.target.value; // the pounds input references the object that it is in and give it a value 
   document.querySelector('#gramsOutput').innerHTML = lbs/0.0022046; // returns number and changes the html to the output 
   document.querySelector('#kgOutput').innerHTML = lbs/2.2046; // returns number and changes the html to the output 
   document.querySelector('#ozOutput').innerHTML = lbs*16; // returns number and changes the html to the output 

})

// WRONG WAY // 
//UPDATE UI 
//Get Input from user
// document.querySelectorAll('#gramsOutput', '#kgOutput', '#ozOutput').addEventListener('input', (e) => {
//     const pounds = document.querySelector('lbsInput').value;
//     const gramsOutput = document.querySelector('gramsOutput').value;


//     convertGrams = () =>{
//     // CONVERT to grams
//     let grams = pounds/0.0022046;
//     return grams;
//     }

//     convertOz = () => {
//     // CONVERT to ounces
//     let oz = pounds*16;
//     return oz;
//     }
    
//     convertKg = () => {
//     // CONVERT to Kilograms
//     let kg = pounds/2.246;
//     return kg;
//     }
// });