// Assignment # 21-25
// Question:1
// var firstName=prompt();
// var lastName=prompt();
// var name=firstName+" " +lastName;
// alert("hello "+name);
// // Question:2
// var mobile=prompt("Enter favorite mobile phone model ");
// document.write("My favourite phone is: ",mobile,"<br>");
// document.write("Length of String: ",mobile.length);
 // Question:3
//  var name="Pakistani";
//  document.write("String: ",name);
//  document.write("<br>","Index of 'n':",name.indexOf('n'));
 // Question:4
//  var name="Hello World";
//  document.write("String: ",name);
//  document.write("<br>","Last index of 'l':",name.lastIndexOf('l'));
  // Question:5
//   var name="Pakistani";
//   document.write("String: ",name);
//   document.write("<br>","Character at index 3: ",name[3]);
  // Question:6
//   var firstName=prompt();
// var lastName=prompt();
// var name=firstName.concat(" ",lastName);
// alert("hello "+name);
// Question:7
// var name="Hyderabad";
// document.write("City: ",name);
// name=name.replace("Hyder","Islam");
// document.write("<br>","After replacement: ",name);
// Question:8
// var message = " Ali and Sami are best friends. They play cricket and football together."
// document.write("Before replacement: ",message);

// message=message.replace(/and/g,"&");
// document.write("<br>","After replacement: ",message);
// Question:9
// var str ="472";
// var num=str.toString();
// document.write("Value:",str,"<br>","Type: ","string","<br>","Value:",num,"<br>","Type: ","number");
// Question:10
// var input=prompt();
// document.write("User input: ",input);
// input=input.toUpperCase();
// document.write("<br>","Upper case: ",input);
// Question:11
// var a=prompt();
// document.write("User input: ",a,"<br>");
// a=a.replace(a[0],a[0].toUpperCase());
// for(var i=1;i<a.length;i++)
// {
//   if(a[i]==" ")
//   a= a.replace(a[i+1],a[i+1].toUpperCase());
// }
// document.write("Title case: ",a);
// Question:12
// var a=35.36;
// document.write("Number: ",a,"<br>");
// var b=a.toString();
// b=b.replace(".","");

// document.write("Result: ",b);
// Question:13
// var username=prompt("Enter username");
// var b=true;

// for(var i=0;i<username.length;i++)
// {
//   if(username[i]=="!"||username[i]=="@"||username[i]==","||username[i]==".")
//   {
//     username=prompt("Please enter a valid username");
//     i=0;
//   }}
// Question:14
// var a=["cake","apple pie","cookie" ,"chips","patties"];
// var b=prompt("Welcom to ABC Bakery. What do you want to order sir/ma'am");
// b=b.toLowerCase();
// var i=0
// for(;i<a.length;i++)
// {
//   if(b==a[i])
//   {
//     document.write(b ," is available at index ", i  ," in our bakery" );
//     break;
//   }
  
// }
// if(i==a.length)
// {
//   document.write("We are sorry. ",b, " is not available in our bakery")
// }
// Question:15
//  var password=prompt();


// if(password.length>=6)
// {
//   if(password[0]==0||password[0]==1||password[0]==2||password[0]==3||password[0]==4||password[0]==5||password[0]==6||password[0]==7||password[0]==8||password[0]==9)
//   {
//     document.write("Entered password: ",password,"<br>");
//     document.write("Password can not begin with a number","<br>");
//     document.write("Please enter a valid password")
//   }
//   for(var i=1;i<password.length;i++)
//   {
//     if(password[i]==0||password[i]==1||password[i]==2||password[i]==3||password[i]==4||password[i]==5||password[i]==6||password[i]==7||password[i]==8||password[i]==9||password[i]=='a'||password[i]=='b'||password[i]=='c'||password[i]=='d'||password[i]=='e'||password[i]=='f'||password[i]=='i'||password[i]=='j'||password[i]=='k'||password[i]=='l'||password[i]=='m'||password[i]=='n'||password[i]=='o'||password[i]=='p'||password[i]=='q'||password[i]=='r'||password[i]=='s'||password[i]=='t'||password[i]=='u'||password[i]=='v'||password[i]=='w'||password[i]=='x'||password[i]=='y'||password[i]=='z')
//   {

//   }
//   else{
//     document.write("Entered password: ",password,"<br>");
//     document.write("Please enter a valid password")
//   }
//   }

// }
// else
// {
//   document.write("Entered password: ",password,"<br>");
//   document.write("Password length must be greater than and equal to 6","<br>");
//   document.write("Please enter a valid password")
// }
// if(password.length<6)
// {
//   document.write("Entered password: ",password,"<br>");
//     document.write("Password length must be greater than and equal to 6","<br>");
//     document.write("Please enter a valid password")
// }
// elseif(password[0]==0||password[0]==1||password[0]==2||password[0]==3||password[0]==4||password[0]==5||password[0]==6||password[0]==7||password[0]==8||password[0]==9)

// {
//   document.write("Entered password: ",password,"<br>");
//     document.write("Password can not begin with a number","<br>");
//     document.write("Please enter a valid password")
// }
// elseif(password.search(/[0-9]/ )==-1)
// { document.write("Entered password: ",password,"<br>");
//   document.write("Please enter a valid password")

// }
// elseif(password.search(/[A-Z]/)==-1)
// { document.write("Entered password: ",password,"<br>");
//   document.write("Please enter a valid password")

// }
// elseif(password.search(/[a-z]/)==-1)
// { document.write("Entered password: ",password,"<br>");
//   document.write("Please enter a valid password")

// }
// // elseif(password.search(/[]))
// Question:16
// var university = "University of Karachi";
// var a=university.split(" ");
// for(var i=0;i<a.length;i++)
// {var b=a[i];
//   for(var j=0;j<b.length;j++)
//   {
//     document.write(b[j],"<br>");
//   }
//   document.write("<br>");
// }
// Question:17
// var input=prompt();
// var l=input.length;
// document.write("User input: ",input,"<br>");
// document.write("Last character of input: ",input[l-1]);
// Question:18

// var a="The quick brown fox jumps over the lazy dog";
// a=a.toLowerCase();

// var c=0;
// var b=a.indexOf("the");
// while(b!=-1)
// {c=c+1;
//   b=a.indexOf("the",b+1);
  

//   }

// document.write(c);
// Assignment # 26-30
// Question:1
// var num=+prompt();
// document.write("number: ",num,"<br>");
// document.write("round off value: ",Math.round(num),"<br>");
// document.write("floor value: ",Math.floor(num),"<br>");
// document.write("ceil value: ",Math.ceil(num));
// Question:2

// var num=+prompt("Enter a negative value");
// document.write("number: ",num,"<br>");
// document.write("round off value: ",Math.round(num),"<br>");
// document.write("floor value: ",Math.floor(num),"<br>");
// document.write("ceil value: ",Math.ceil(num));
// Question:3
// var num=+prompt();
// if(num<0)
// {
//   num=num*-1;
// }
// document.write(" absolute value of ",num," is: ",num);
// Question:4
// var dice=Math.random()*7+1;
// dice=Math.floor(dice);
// document.write("random dice value: ",dice);
// Question:5
// var coin=Math.random()*2+1;
// coin=Math.floor(coin);
// if(coin==2)
// {
//   document.write(coin,"<br>","random coin value: Heads");

// }
// else{
//   document.write(coin,"<br>","random coin value: Tails");
// }
// Question:6
// var numb=Math.random()*101+1
// numb=Math.floor(numb);

// document.write("random number between 1 and 100: ",numb);
// Question:7
// var num=prompt("Enter your weight in kilograms");
// num=parseFloat(num);
// document.write("The weight of user is ",num," kilograms");
// Question:8
// var num=Math.random()*11+1;
// var a=+prompt("Enter a number between 1 and 10");
// if(num==a)
// {
//   alert("Congratulations!");
// }
// else{
//   alert("Try again!");
// }
// Assignment # 31-34
//QUESTION #1
// var date1=new Date();
// document.write(date1);
//QUESTION #2
// var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var b=new Date();
// var c=a.toString();
// var d=c.slice(0,3);
// switch(d)
// {
//   case "Sun":
//     document.write("Current month: ",a[0]);
//     break;
//     case "Mon":
//     document.write("Current month: ",a[1]);
//     break;
//     case "Tue":
//     document.write("Current month: ",a[2]);
//     break;
//     case "Wed":
//     document.write("Current month: ",a[3]);
//     break;
//     case "Thu":
//     document.write("Current month: ",a[4]);
//     break;
//     case "Fri":
//     document.write("Current month: ",a[5]);
//     break;
//     case "Sat":
//     document.write("Current month: ",a[6]);
//     break;
    
// }

//QUESTION #3
// var a=new Date();
// var b=a.toString();
// var c=b.slice(0,3);
// alert("Today is "+c);
//QUESTION #4
// var a=new Date();
// var b=a.toString();
// var c=b.slice(0,3);
// if(c=="Sat"||c=="Sun")
// {
//   document.write("It's Fun day");
// }
//QUESTION #5
// var d=new Date();
// var n=d.getDate();
// if(n<16)
// {
//   document.write("First fifteen days of the month");
// }
// else{
//   document.write("Last days of the month");
// }
//QUESTION #6
// var a=new Date();
// document.write("Current Date: ",a,"<br>");
// var b=a.getTime();
// document.write("Elapsed miliseconds since January 1,1970: ",b,"<br>");
// var c=b/(1000*60*60);
// document.write("Elapsed minutes since January 1,1970: ",c);
//QUESTION #7
// var a=new Date();
// var b=a.getHours();
// if(b<=12)
// alert("It's AM");
// else{
//   alert("It's PM");
// }
//QUESTION #8

// var d = new Date("Thu Dec 31, 2020 00:00:00");
// laterDate=d;

// document.write("Later date: ",laterDate);
//QUESTION #9
// var dob=new Date("Jun 18,2015");
// var a=dob.getTime();
// var today=new Date();
// var dobtoday=today.getTime();
// var diff=dobtoday-a;
// var convert=diff/(1000*60*60*24);
// var acc=Math.floor(convert);
// document.write(acc," days have passed since 1st Ramadan, 2015");
//QUESTION #10
// var a=new Date("Sat Dec 05,2015 22:50:16");
// var b=new Date("Thu Jan 01,2015 00:00:00");
// var c=a.getTime();
// var d=b.getTime();
// var diff=c-d;
// diff=diff/(1000*60);
// diff=Math.round(diff);
// document.write("On reference date ",a,"<br>");
// document.write(diff," seconds had passed since beginning of 2015");
//QUESTION #11
// var a=new Date();
// var b=a.getHours();
// document.write("current date: ",a,"<br>");
// a.setHours(b-1);

// document.write("1 hour ago, it was ",a);
//QUESTION #12
// var a=new Date();
// var b=a.getFullYear();
// var c=a;

// a.setFullYear(b-100);
// alert("current date: "+c);
// alert("100 Years ago, it was "+a);
//QUESTION #13
// var age=+prompt("Enter your age ");
// var a=new Date();
// var b=a.getFullYear();
// var c=b-age;
// document.write("Your age is ",age,"<br>");
// document.write("Your birth year is ",c);
//QUESTION #14
// var a="Knooz fatima"
// var month="February"
// var numOfUnits=410;
// var charges=16;
// document.write("Customer Name: ",a,"<br>","Month: ",month,"<br>","Number of units: ",numOfUnits,"<br>","Charges per unit: ",charges);
// document.write("<br>","<br>","Net Amount Payable (within Due Date): ",numOfUnits*charges,"<br>","Late payment surcharge: ",350,"<br>","Gross Amount Payable (after Due Date): ",numOfUnits*charges+350);
// Assignment # 35-38
//QUESTION #1
// function fun()
// {
//   var a=new Date();
//   document.write(a);
// }
// fun();
//QUESTION #2
// function name(first,last)
// {
//   alert("Hello "+first+" "+last);
// }
// name("knooz","fatima");
//QUESTION #3
// function add(a,b)
// {
//   return a+b;
// }
// var a=+prompt();
// var b=+prompt();
// var c=add(a,b);
// alert(c);
//QUESTION #4
// function comp(num1,num2,operator)
// {
//   switch(operator)
//   {
//     case '+':
//       return num1+num2;
      
//       case '*':
//       return num1*num2;
      
//       case '-':
//       return num1-num2;
     
//       case '/':
//       return num1/num2;
      
//       case '%':
//       return num1%num2;
      

//   }
// }
// var a=comp(2,3,'*');
// document.write(a);
//QUESTION #5
// function sq(num)
// {
//   return num*num;
// }
// var a=sq(2);
// document.write(a);
//QUESTION #6
// function fac(num)
// {if(num==1||num==0)
//   {
//     return 1;
//   }

//   else
//   {var f=num;
//     for(var i=1;i<num;i++)
//     {
// f=f*i;
//     }
//     return f;
//   }

// }
// var a=fac(4);
// document.write(a);
//QUESTION #7
// function count(start,end)
// {
// for(var i=start;i<=end;i++)
// {
//   document.write(i,"<br>");
// }
// }
// var a=+prompt();
// var b=+prompt();
// count(a,b);
//QUESTION #8
// var hypo;
// function hyp(perp,base)
// {
//    hypo=Math.sqrt(perp*perp+base*base);
//  function sqr()
//  {
//    hypo= hypo*hypo;
//  } 
//  sqr();
//  return hypo;
// }
// var a=+prompt();
// var b=+prompt();
// var c=hyp(a,b);
// alert(c);
//QUESTION #9
// function area(a,b)
// {
//   var ar=a*b;
//   document.write(ar,"<br>");
// }
// var width=2;
// var height=3;
// area(2,3);
// area(width,height);
//QUESTION #10
// function pal(string)
// {var str="";
// for(var i=string.length-1;i>=0;i--)
// {
// str=str+string[i];
// }
// if(str==string)
// {
//   document.write("palindrome");
// }
// else
// {
//   document.write("not palindrome");
// }
// }
// pal("madam");
//QUESTION #11
// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     document .write(str.join(" "));
// }
// capital_letter("knooz fatima")
//Question #12
// function findLongestWord(str) {

//   var strSplit = str.split(' ');
 
//   var longestWord = 0;
// var word;
  
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){ 
// 	longestWord = strSplit[i].length; 
// word=strSplit[i];
//      }
//   }
// document.write(word);
// }
//   findLongestWord("corona virus");
//QUESTION #13
// function count(str,let)
// {
//   var a=0;
//   for(var i=0;i<str.length;i++)
//   {
//     if(str[i]==let)
//     {
//       a++;
//     }
//   }
//   document.write(a);
// }
// count("knooz",'o');
//QUESTION #14
// function circum(radius)
// {
// var a=2*3.14*radius;
// document.write("The circumference is: ",a);
// }
// function area(radius)
// {
//   var b=3.14*radius*radius;
//   document.write("<br>","The area is: ",b)
// }
// circum(2);

