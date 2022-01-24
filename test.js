// // // function pigLatin(string){
// // //     let str = string.toLowerCase();
// // //     let words = str.split('');
// // //     if(str.match(/^[a-z]+$/)){
// // //         let first = words[0];
// // //         if (first==='a'|| first==='e'||first==='i' || first==='o' || first==='u'){
// // //            return  str + 'way'
// // //         }
// // //         else{
// // //             let new_string = "";
// // //             words.forEach(character => {
// // //                 if (!(character==='a'|| character==='e'||character==='i' || character==='o' || character==='u')){
// // //                     let newWord = str.replace(character , "");
// // //                     new_string = newWord+ character;
//
// // //                 }
// // //                 else{
// // //                     new_string +='ay';
// // //                 }
//
// // //             });
// // //             return new_string;
// // //         }
// // //     }
// // //     else return null;
// // //     }
//
// // //     let str = 'smahfdfd';
// // // console.log(pigLatin(str));
// // let arr = [17, 17, 3, 17, 17, 17, 17];
//
// // function stray(numbers) {
// //     let diff = [];
// //     // let count = 0;
// // for(let i = 0 ; i< numbers.length; i++){
// //     if (numbers[i] !== diff[0]){
// //         diff.push( numbers[i]);
//
// //     }
//
// // }
// // return diff[1];
// // }
//
//
// // console.log(stray(arr));
//
//
//
//
// // const arry = [1, 2, 1, 3, 4, 3, 5];
//
// // function tofindDuplicates(arry) {
// //   return  arry.filter((item, index) => arr.indexOf(item) !== index);
// // }
// // const duplicateElements = tofindDuplicates(arry);
// // console.log(duplicateElements);
//
//
// function wordCount(s) {
//     let count =0;
//         s.toLowerCase();
//         let words = s.split('');
//         words.forEach(word => {
//             if(str.match(/^[a-z]+$/)){
//         console.log('dfgdfgdfgdfg');
//                 count++
//             }
//
//         });
//
//
// return count;
// }
//
// let str="Hello there, little user5453 374 ())$. I’d been using my sphere as a stool. Slow-moving target 839342 was hit by OMGd-63 or K4mp. contain";
// str.toLowerCase;
// console.log(wordCount(str));





function likes(names) {
    let length = names.length;
    let str = "";
    if(length ===0){
        str = "no one likes this";
    }
    else if (length === 1){
        str = `${names} likes this`;
    }
    else if(length === 2){
        str = `${names[0]} and ${names[1]} like this`;
    }
    else if(length === 3){
        str = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    else {
        str = `${names[0]}, ${names[1]} and ${length-2} like this`;
    }
    return str;


}

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

snail = function(array) {
    let rarray = [];
    for(let i = 0 ; i < array[0].length ;i++){
        rarray.push(array[0][i]);
    }
    for (let j = 1 ; j <array.length ; j++){
        rarray.push(array[j][array[j].length-1])
    }
    for (let x = (array[array.length-1].length)-1; x > 0  ; x--){
        rarray.push(array[array.length-1][x-1]);
    }
    return rarray;
};
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));




//
// let marks = [2, 2, 2, 2];
//
// function avg(marks) {
//     let sum = 0;
//     for (let i in marks) {
//         sum += marks[i];
//     }
//     let total = sum / marks.length;
//     return Math.floor(total);
// }
//
// str = "my name is ! saleh";
//
// function pigIt(str) {
//     let words = str.split(' ');
//     let new_string = "";
//     for (let i in words) {
//         let first = words[i].slice(0, 1);
//         let new_words = words[i].replace(first, '');
//         if (words[i] === '!') {
//             new_words += '!';
//         } else if (words[i] === '!') {
//             new_words += '!';
//         } else if (words[i] === '?') {
//             new_words += '?';
//         } else if (words[i] === ';') {
//             new_words += ';';
//         } else if (words[i] === '.') {
//             new_words += '.';
//         } else if (words[i] === ':') {
//             new_words += ':';
//         } else {
//             new_words += first + "ay";
//         }
//         new_string += new_words + " ";
//         var newStr = new_string.substring(0, new_string.length - 1);
//     }
//     return newStr;
// }
//
// console.log(pigIt(str));
// console.log(4 || 4);
//
// function rgb(r, g, b) {
//     let first = r.toString(16);
//     let sac = g.toString(16);
//     let thier = b.toString(16);
//     if (255 < r) {
//         first = 'f';
//     }
//     if (255 < g) {
//         sac = 'f';
//     }
//     if (255 < b) {
//         thier = 'f';
//     }
//     if (r < 0) {
//         first = '0';
//     }
//     if (g < 0) {
//         sac = '0';
//     }
//     if (b < 0) {
//         thier = '0';
//     }
//
//     let rgp = first + sac + thier;
//     return rgp;
//
// }
//
// console.log(rgb(0, 0, -20));
//
// function f(s) {
//     let ara = [];
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     for (let j = 0 ; j < s.length ;j++){
//         if(vowels.includes(s[j])){
//             ara[j]=0;
//         }
//         else {
//             for (let i = 0 ; i < s.length ;i++){
//                 if(ara[i] ===0){
//                     ara[i-1]=1;
//                     ara[i+1]=1;
//                 }
//                 else if(ara[i]!==0){
//                     ara[i]- ara.indexOf(0);
//                 }
//             }
//         }
//      }
//     // for (let i = 0; i < vowels.length; i++) {
//     //     if (s.includes(vowels[i])) {
//     //         ara[s.indexOf(vowels[i])]=0;
//     //     }
//     // }
//     return ara;
//
// }
// // str = "my name is ! saleh"
// console.log(f(str));
//
//
// // function anagrams(word, words) {
// //     // let result=true;
// //     // let wordsplit = word.split();
// //     // let wosdss = words.split();
// //     // return wordsplit.includes(wosdss);
// //     let word_Array = word.split('').sort();
// //     let rusult = true;
// //     for (let x = 0; x<words.length; x++) {
// //         if(words[x].split('').sort() === word_Array) {
// //             rusult&=true
// //         }else {
// //             rusult &=false;
// //         }
// //         return rusult;
// //     }
// // }
// // console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
//

function anagrams(word, words) {
    let total = [];
    let word_Array = word.split('').sort();
    console.log(word_Array);
    words.forEach(function (wd) {
        if(wd.split('').sort().toString()===word_Array.toString()){
            console.log('dsfsdfsdfgdfgdfhdfghfghd');
            total.push(wd);

        }
    });
    return total;

}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

function incrementer(nums) {
    let count = 1;
    let arr = [];
    nums.forEach(function (num) {
        arr.push(num+count);
        count++
    });
    return arr;
}
let it = [ 1 , 2 , 3];
console.log(incrementer(it));


// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript


function oddOrEven(array) {
    let sum = 0;
    array.forEach(function (num) {
        sum +=num;
    });
    if (sum%2 === 0 ){
        return 'even';
    }
    else
        return 'odd';
}


function pigLatin(str){
    let words = str.split('');
    if(str.match(/^[a-z]+$/)){
        let first = words[0];
        let new_string = "";
        if (first==='a'|| first==='e'||first==='i' || first==='o' || first==='u'){
            new_string = str + 'way'
        }
        else{
            let newWord = str.replace(first , "");
            new_string = newWord+ first +'ay';
        }

    }
    else


        return new_string;
}

console.log(pigLatin('sal3eh'))