// chapter5
var num1 = 3
var num2 = 5
var Add = num1+num2
var Sub = num1-num2
var Mul = num1*num2
var Division = num1/num2
var Modulus = num2% num1

document.write("Sum of <b>"+num1+"</b> and <b>"+num2+"</b> is <b>"+Add+"</b><br>")
document.write("Subtraction of <b>"+num1+"</b> and <b>"+num2+"</b> is <b>"+Sub+"</b><br>")
document.write("Multipliacation of <b>"+num1+"</b> and <b>"+num2+"</b> is <b>"+Mul+"</b><br>")
document.write("Division of <b>"+num1+"</b> and <b>"+num2+"</b> is <b>"+Division+"</b><br>")
document.write("Modulus of <b>"+num1+"</b> and <b>"+num2+"</b> is <b>"+Modulus+"</b><br><br><br>")


var MaExprs;
document.write("Value after variable declaration is:<b>"+MaExprs+"</b><br>")
MaExprs=23
document.write("Initial Value of Variable is <b>"+MaExprs+"</b><br>")
MaExprs++
document.write("Value After Increment <b>"+MaExprs+"</b><br>")
MaExprs+=7
document.write("Value after addition is <b>"+MaExprs+"</b><br>")
MaExprs--
document.write("Value after decrement is <b>"+MaExprs+"</b><br>")
MaExprs%=3
document.write("The Reminder Value is <b>"+MaExprs+"</b><br><br><br>")

var movieTicket = 600
movieTicket*=5
document.write("Total cost to buy 5 tickets to a movie is <b>"+movieTicket+"</b><br><br><br>")

var table = 4
var value = 1
document.write(table+" X "+value++ +" = "+(table)+"<br>"+
               table+" X "+value++ +" = "+(table*2)+"<br>"+
               table+" X "+value++ +" = "+(table*3)+"<br>"+
               table+" X "+value++ +" = "+(table*4)+"<br>"+
               table+" X "+value++ +" = "+(table*5)+"<br>"+
               table+" X "+value++ +" = "+(table*6)+"<br>"+
               table+" X "+value++ +" = "+(table*7)+"<br>"+
               table+" X "+value++ +" = "+(table*8)+"<br>"+
               table+" X "+value++ +" = "+(table*9)+"<br>"+
               table+" X "+value++ +" = "+(table*10)+"<br><br><br>")

var Celsius = 25
var Fahrenheit = (Celsius*9/5)+32
document.write("<b>"+Celsius+"</b><sup>0</sup>C is "+Fahrenheit+"</b><sup>0</sup>C <br>")

var Fahrenheit = 70
var Celsius = (Fahrenheit-32)*5/9
document.write("<b>"+Fahrenheit+"</b><sup>0</sup>C is "+Celsius+"</b><sup>0</sup>C<br><br><br>")


var item1 = 650
var item2 = 100
var QItem1 = 3
var QItem2 = 7
var ShpCharges = 100
document.write("<h1>Shopping Cart</h1><br>Price of Item1 is "+item1
                +"<br>Quantity of Item1 is "+QItem1+"<br>Price of Item2 is "+item2+"<br>Quantity of Item2 is "+QItem2+"<br>Shiping Charges "+ShpCharges+"<br><br><br>Total Cost of your order is "+((item1*QItem1)+(item2*QItem2)+ShpCharges+"<br><br><br>")
)


var totalMarks = 980
var obtainedMarks = 804
document.write("TotalMarks:"+totalMarks+"<br>MarksObtained:"+obtainedMarks+"<br> Percentage:"+(obtainedMarks/totalMarks*100)+"%<br><br><br>")

var USDollar = 10
var SauiRiyals = 25

document.write("<h1>Currency in PKR</h1>Total Currency of PKR: "+((USDollar*104.80)+(SauiRiyals*28))+"<br><br><br>")

var ten = 11
document.write("Initial Value is "+ten+" Then Add 5, Multiply by 10 and Result Divide By 2 is <b>"+((ten+5*10)/2)+"</b><br><br><br>")


var currentYear = 2023
var birthYear = 2000

document.write(`Current Year <b>`+currentYear+`</b><br>
                Birth Year <b>`+birthYear+`</b><br>Your Age is <b>`+(currentYear-birthYear+`</b><br><br>`)
                )

var FSnack = `PopCorn`
var currentAge = 23
var MaxAge = 50
var EAmount = 4
document.write('<h1>The LifeTime Supply Calculator</h1><br>Favourite Snake: '+FSnack+'<br>Current age: '+currentAge+`<br>Estimated Maximum Age: `+MaxAge+`<br>Amount of Snake Per day: `+EAmount+`<br>`)
document.write(`You will Need <b>`+((MaxAge-currentAge)*365*EAmount)+`</b> Popcorn's to last you until the ripe old age of <b>`+MaxAge+`</b><br><br><br><br>`)

// Chapter 6
var a = 13
document.write(`The Value of a is `+a+`<br><br>
                The Value of ++a is `+ ++a +`<br>Now a value of a is `+a+
                `<br><br>The Value of a++ is `+ a++ +`<br>Now a value of a is `+a+`<br><br>The Value of --a is `+ --a +`<br>Now a value of a is `+a+`<br><br>The Value of a-- is `+ a-- +`<br>Now a value of a is `+a+`<br>`
)

var a = 2;
var b = 1;
document.write(`a is `+a+`<br>b is `+b)

            // 1 -  0  +  1 + 1
var result = --a - --b + ++b + b--

// --a (value of a is 1)
// --a - --b(value of a is 1 and value of b is 0 result 1-0=1)
// --a - --b + ++b(value of a is 1 and value of b is 1 result is 1 + 1 =2)
// --a - --b + ++b + b--(value of a is 1 and value of b is 2 result is 1+2=3)

document.write(`<br><h1>Result is `+result+`</h1>`)


var userName  = prompt("Enter Your Name")
document.write(userName+`<br>`)

var InpNumber = prompt("Enter Number")
var Value = 1

if(InpNumber == 0){
    document.write(5+`X`+Value++ +`=`+(5*1)+`<br>`+
5+`X`+Value++ +`=`+(5*2)+`<br>`+
5+`X`+Value++ +`=`+(5*3)+`<br>`+
5+`X`+Value++ +`=`+(5*4)+`<br>`+
5+`X`+Value++ +`=`+(5*5)+`<br>`+
5+`X`+Value++ +`=`+(5*6)+`<br>`+
5+`X`+Value++ +`=`+(5*7)+`<br>`+
5+`X`+Value++ +`=`+(5*8)+`<br>`+
5+`X`+Value++ +`=`+(5*9)+`<br>`+
5+`X`+Value++ +`=`+(5*10)+`<br>`)
}
else{
document.write(InpNumber+`X`+Value++ +`=`+(InpNumber*1)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*2)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*3)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*4)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*5)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*6)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*7)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*8)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*9)+`<br>`+
InpNumber+`X`+Value++ +`=`+(InpNumber*10)+`<br>`)
}

var Subject1 = prompt("Enter Subject 1")
var Subject2 = prompt("Enter Subject 2")
var Subject3 = prompt("Enter Subject 3")
var Sub1Marks = parseInt(prompt(`Enter Your `+Subject1+` Marks`))
var Sub2Marks = parseInt(prompt(`Enter Your `+Subject2+` Marks`))
var Sub3Marks = parseInt(prompt(`Enter Your `+Subject3+` Marks`))

var TMSub1 = 100
var TMSub2 = 100
var TMSub3 = 100

var OMSub1 = Sub1Marks
var OMSub2 = Sub2Marks
var OMSub3 = Sub3Marks

var obtainedMarks = OMSub1 + OMSub2 +OMSub3
var TotalMarks = TMSub1 + TMSub2 + TMSub3
var Percentage = obtainedMarks/TotalMarks*100

document.write(
    `<table>
    <tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
    </tr>
    <tr>
    <td>`+Subject1+`</td>
    <td>`+TMSub1+`</td>
    <td>`+OMSub1+`</td>
    <td>`+(OMSub1/TMSub1*100)+`%</td>
    </tr>
    <tr>
    <td>`+Subject2+`</td>
    <td>`+TMSub2+`</td>
    <td>`+OMSub2+`</td>
    <td>`+(OMSub2/TMSub2*100)+`%</td>
    </tr>
    <tr>
    <td>`+Subject3+`</td>
    <td>`+TMSub3+`</td>
    <td>`+OMSub3+`</td>
    <td>`+(OMSub3/TMSub3*100)+`%</td>
    </tr>
    <tr>
    <td></td>
    <td><b>`+TotalMarks+`</b></td>
    <td><b>`+obtainedMarks+`</b></td>
    <td><b>`+Percentage+`%</b></td>
    </tr></table>`
)