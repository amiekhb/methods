//1. Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]

function addArr(arr, too) {
  arr.push(too);
  return arr;
}

let newArr = addArr([], 10);
console.log("NewArr:", newArr);
newArr = addArr([1, 2, 3, 4], 10);
console.log("NewArr:", newArr);
//2. Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]

// function createNewArr(len, min, max) {
//   let arr = [];
//   for (let i = 1; i < len; i++) {
//     let rndToo = 0;
//     while (rndToo < min) {
//       rndToo = Math.floor(Math.random() * max);
//     }
//     arr.push(rndToo);
//   }
//   return arr;
// }
// let a = createNewArr(5, 100, 300);
// console.log("Min Max:", 5, 100, 300);
// console.log("Arr:", a);
// //3. Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.
// let too = prompt("Toonuud oruul");
// let n = [];
// let x = too.split(",");
// console.log(x);
// for (i = 0; i < x.length; i++) {
//   n.push(Number(x[i]));
// }
// console.log(n);
// let arra = [23, 4, 5, 6, 76];
// function sum_avg(ugugdul) {
//   let mean = 0;
//   let sum = 0;
//   for (let i = 0; i < ugugdul.length; i++) {
//     sum += ugugdul[i];
//     mean = sum / ugugdul.length;
//   }
//   let obj = { mean: mean, sum: sum };
//   return obj;
// }
// let arrayDundaj = sum_avg(n);
// console.log("dundaj:", arrayDundaj);

//4. Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '
let Arr = "the quick brown fox";
console.log(Arr);
let words = Arr.split(" ");
console.log(words);
let array = [];
for (i = 0; i < words.length; i++) {
  let firstword = words[i];
  let firstletter = firstword[0].toUpperCase();
  let remain = firstword.slice(1);
  let result = firstletter + remain;
  //   console.log(firstword);
  //   console.log(result);
  array.push(result);
}
console.log(array.join(" "));

// console.log(firstletter);
// console.log(remain);
// console.log(firstletter + remain);
//5. Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
function reverseText(text) {
  return text.split("").reverse().join("");
}
const textArr = ["Hello", "World", "Pinecone"];
function reverseArray(inputArr) {
  let r = [];
  for (let i = 0; i < inputArr.length; i++) {
    r.push(reverseText(inputArr[i]));
  }
  return r;
}
let ra = reverseArray(textArr);
console.log(textArr);
console.log(ra);

//6. Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
// let main_text = "animal world";
// console.log(main_text);
// // let split_text = main_text.split(" ");
// // console.log(split_text);
// let haih_text = prompt("haih textee oruul");
// function text_search(hariu) {
//   if (main_text.includes(haih_text)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let result = text_search(main_text);
// console.log("hariu:", result);
//7
const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 100,
    totalPrice: 500.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Cake",
    unitPrice: 8000,
    amount: 10,
    totalPrice: 80.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Candy",
    unitPrice: 2000,
    amount: 16,
    totalPrice: 32.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Icecream",
    unitPrice: 6000,
    amount: 12,
    totalPrice: 72.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Macaron",
    unitPrice: 10000,
    amount: 20,
    totalPrice: 200.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Cookie",
    unitPrice: 9000,
    amount: 15,
    totalPrice: 135.0,
    casherId: 1,
    date: "2022-11-01",
  },
];

//1. Нийт борлуулалтын дүнг тооцоолох.
//2. Нийт борлуулагдсан барааны тоог тооцоолох.
function tootsoolol(data) {
  let price_sum = 0;
  let shirheg_sum = 0;
  for (i = 0; i < data.length; i++) {
    price_sum += data[i].totalPrice;
    shirheg_sum += data[i].amount;
  }
  let obj = { une: price_sum, too: shirheg_sum };
  return obj;
}
console.log("borluulaltiin dun:", tootsoolol(data));

//3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
//4. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
function jagsaalt(data) {
  for (i = 0; i < data.length; i++) {}
}
