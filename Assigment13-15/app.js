var studentName = []

// var StudentNameObj = {
//     names:[]
// }

// var StringArray = ["Umer","Ahmed","Usman","Ali"]

// var NumArray = [1,2,3,4,5,6,7,8]
// var BoolArray = [true,false,true,true,false]
// var MixArr = ["Shayan",2,"Black",false,6]

// var educationList = ["SSC","HSC","BS","BCOM","MS","M.PHIL","PhD"]

// document.write("<h1>Qualification</h1>"+educationList+"<br>")

// var studentName=["Michael","John","Tony"]
// var studentMarks = [320,230,480]

// document.write("Score of "+studentName[0]+ " is "+studentMarks[0]+" Percentage is "+(studentMarks[0]/500*100)+"<br>Score of "+studentName[1]+ " is "+studentMarks[1]+" Percentage is "+(studentMarks[1]/500*100)+"<br>Score of "+studentName[2]+ " is "+studentMarks[2]+" Percentage is "+(studentMarks[2]/500*100))

// var color = ["Red","Black","Blue","White"]

// var colorAdd = prompt("what color he wants to add to the beginning??")
// color.unshift(colorAdd)
// console.log(color)
// var colorAddEnd = prompt("what color he wants to add to the ending of array??")
// color.push(colorAddEnd)
// console.log(color)
// color.unshift("Orange","Offwhite")
// console.log(color)
// color.shift([0])
// console.log(color)
// color.pop(color.length-1)
// console.log(color)
// var AddColorIndex = prompt("At which index do you have to add the color?")
// var AddColorName = prompt("Asssign Color Name which you decide the previous color Index")
// color.splice(AddColorIndex,0,AddColorName)
// console.log(color)
// var DelColorIndex = prompt("At which index do you have to delete the color?")
// var DelHowManyColor = prompt("how many number of index you delete??")
// color.splice(DelColorIndex,DelHowManyColor)
// console.log(color)

var StudentScore = [431,564,124,99,467,367,864,290,55,399,543,765,832,567]
console.log(StudentScore)                                                                  
StudentScore.sort()
console.log(StudentScore)
var Cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
console.log(Cities)
var SelectCities = Cities.splice(2,2)
console.log(SelectCities)
var arr = ["This","is","my","cat"]
console.log(arr.join(' '))

const FIFO = ["KeyBoard","Mouse","Printer","Monitor"];
console.log(FIFO.shift("Out"))
console.log(FIFO.shift("Out"))
console.log(FIFO.shift("Out"))
console.log(FIFO.shift("Out"))

const LILO = ["KeyBoard","Mouse","Printer","Monitor"];

console.log(LILO.pop(LILO.length-1))
console.log(LILO)
console.log(LILO.splice("Out"))
console.log(LILO.splice("Out"))
console.log(LILO.splice("Out"))

var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

document.write(phones.map())