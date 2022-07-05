/***
 * INPUT:
 * cho người dùng nhập 3 số nguyên và xuất ra theo thứ tự tăng dần
 * 
 * PROGRESS:
 * nhập 3 số nguyên, viết chương trình theo thứ tự số tăng dần
 * 
 * OUTPUT:
 * xuất kết quả ra màn hình
 */

var num1 = 6;
var num2 = 35;
var num3 = 15;

console.log(num1,num3,num2)


/***
 * INPUT:
 * viết chương trình "chào hỏi", máy sẽ hỏi người nào đang dùng và đưa ra lời chào
 * 
 * PROGRESS:
 * gia đình có 4 thành viên gồm ba, mẹ, anh trai, em gái. viết chương trình và xuất kết quả ra màn hình
 * 
 * OUTPUT:
 * log lời chào ra màn hình
 */

var b = "dad";
var m = "mom";
var a = "brother";
var e = "sister";
var user = a;
var greeting;

if (user = a) {
    greeting = "Chào ba"
} else if (user = m) {
    greeting = "Chào mẹ"
} else if (user = a) {
    greeting = "Chào anh"
} else {
    greeting = "Chào em"
}

console.log(greeting)


/***
 * INPUT:
 * cho 3 số nguyên viết chương trình xuất ra có bao nhiêu số chẵn lẽ
 * 
 * PROGRESS:
 * nhập 3 số nguyên và viết chương trình
 * 
 * OUTPUT:
 * log kết quả ra màn hình
 */

var numb1 = 5;
var numb2 = 6;
var numb3 = 9;
var odd = 2;
var evenNumber = 1;


console.log("3 số nguyên bao gòm", numb1,numb2,numb3)
console.log("những con số lẻ là:", odd)
console.log("những con số chẵn là:", evenNumber)


/***
 * INPUT:
 * viết chương trình nhập 3 cạnh của tam giác và cho biết đó là tam giác gì
 * 
 * PROGRESS:
 * nhập 3 cạnh của tam giác, cho biết đó là loại tam giác gì
 * 
 * OUTPUT:
 * log kết quả ra màn hình
 */

var edge1 = 6;
var edge2 = 6;
var edge3 = 6;
var triangle;

if (edge1 = edge2 > edge3){
    triangle = "Tam giác cân"
} else if (edge1 = edge2 = edge3) {
    triangle = "Tam giác đều"
} else if (edge1 < edge2 < edge3) {
    triangle = "Tam giác vuông"
}

console.log(triangle)