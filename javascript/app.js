/*

  holds roman numerals one four five nine and ten for
  the different number Places one, tens, hundreds, thousands,
  tenThousands, hundredThousands, millions, ten millions
  each place is a key "1" - "8" that holds the object

  with keys "one", "four", "five", "nine" with values that depend on
  the number placed being used.
*/

const rNumerals = {
  "1": {
    one: "I",
    four: "IV",
    five: "V",
    nine: "IX",
    ten: "X"
  } ,
  "2": {
    ten: "X",
    four: "XV",
    five: "L",
    nine: "XC"
  },
  "3": {
    ten: "C",
    four: "CD",
    five: "D",
    nine: "CM"
  },
  "4": {
    ten: "M",
    four: "M-v",
    five: "-v",
    nine: "M-x"
  },
  "5": {
    ten: "-x",
    four: "-x-l",
    five: "-l",
    nine: "-x-c"
  },
  "6": {
    ten: "-c",
    four: "-c-d",
    five: "-d",
    nine: "-c-m"
  }

}




const input = document.getElementById("numberInputValue");
const submitUserNum = document.getElementById("userNum");
const inputDiv = document.getElementById("inputDiv");
const outputRomanNumeralDiv = document.getElementById("romanNumeral");


const showErrMessage = () => {
  const errMessage = document.createElement("h3");


  errMessage.textContent = "Invalid input";
  inputDiv.appendChild(errMessage);
}


const convertNumToNumeral = (num, place, roman) => {

  let number = "";
  if (num > 5 && num < 9){
    if (num === 4){
      number += roman[place].four;
    } else {
      for (let i = 0; i < num; i++) {
        number += roman[place].one;
      }
    }
  } else {
    if (num === 9) {

      number += roman[place].nine;
    } else if (num === 5) {
      number += roman[place].five;
    } else {
      number += roman[place].five;
      for (let i = 0; i < num; i++) {
        number += roman[place].one;
      }
    }


    return number;
}

input.addEventListener("input", (event) => {

  let eventValArr = event.target.value;
  for (let i = 0; i < eventValArr.length; i++) {
    if (typeof(eventValArr[i]) !== "Number"){
      showErrMessage();
      event.target.value = "";
      return;
    }
  }



  inputDiv.removeChild(inputDiv.childNodes[1]);

})


submitUserNum.addEventListener("click", (event) => {
  const number = input.value;
  const numberArray = number.split("");
  let numberLen = numberArray.length;


  outputRomanNumeralDiv.removeChild(outputRomanNumeralDiv.childNodes[0]);
  let convertedNumber = "";

  for (let i = 0; i < numberArray.length; i++) {
    convertedNumber += convertNumToNumeral(Number(numberArray[i]), String(numberLen), rNumerals);
    numberLen -= 1;
  }



  const romanNumeral = document.createElement("h3");
  romanNumeral.textContent = convertedNumber;
  outputRomanNumeralDiv.appendChild(romanNumeral);
})
