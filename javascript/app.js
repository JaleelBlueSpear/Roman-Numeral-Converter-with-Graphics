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
    nine: "IX"
  } ,
  "2": {
    one: "X",
    four: "XV",
    five: "L",
    nine: "XC"
  },
  "3": {
    one: "C",
    four: "CD",
    five: "D",
    nine: "CM"
  },
  "4": {
    one: "M",
    four: "M-v",
    five: "-v",
    nine: "M-x"
  },
  "5": {
    one: "-x",
    four: "-x-l",
    five: "-l",
    nine: "-x-c"
  },
  "6": {
    one: "-c",
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
};


const convertNumToNumeral = (num, place, roman) => {

  let number = "";
  if (num === 0){
    number = "";
    return number;
  }
  if (num < 5){
    if (num === 4){
      number += roman[place].four;
    } else {
      for (let i = 0; i < num; i++) {
        number += roman[place].one;
      }
    }
  } else if (num > 5 && num < 9) {
    number += roman[place].five;

    for (let i = 0; i < num - 5; i++){
      number += roman[place].one;
    }
  } else if (num === 9) {
    number += roman[place].nine;

  } else {
    number += roman[place].five;
  }

    console.log(number);
    return number;
};

input.addEventListener("input", (event) => {

  let eventValArr = event.target.value;
  for (let i = 0; i < eventValArr.length; i++) {
    console.log(typeof(eventValArr[i]));
    if (typeof(Number(eventValArr[i])) !== "number"){
      showErrMessage();
      event.target.value = "";
      return;
    }


  }
});


submitUserNum.addEventListener("click", (event) => {
  const number = input.value;
  const numberArray = number.split("");
  let numberLen = numberArray.length;
  console.log(numberLen);

  outputRomanNumeralDiv.removeChild(outputRomanNumeralDiv.childNodes[0]);
  let convertedNumber = "";

  for (let i = 0; i < numberArray.length; i++) {
    convertedNumber += convertNumToNumeral(Number(numberArray[i]), String(numberLen), rNumerals);
    numberLen -= 1;
    console.log(convertedNumber);
  }

  const romanNumeral = document.createElement("h3");
  romanNumeral.textContent = convertedNumber;
  outputRomanNumeralDiv.appendChild(romanNumeral);
  input.value = "";
});
