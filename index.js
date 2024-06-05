
// პროექტი 35 - Blood Alcohol Calculator - სისხლში ალკოჰოლის შემცველობის კალკულატორი

//ზოგჯერ ჩახლართული გამოთვლები გვჭირდება, რომელიც არაერთი მოწოდებული მონაცემის საფუძველზე
// სრულდება და შედეგს სწორედ ასე ვიღებთ. შექმენით პროგრამა, რომელიც მოგთხოვთ თქვენს წონას, სქესს,
// ჭიქების რაოდენობას, დალეული სასმელის მოცულობის მიხედვით ალკოჰოლის რაოდენობას და ბოლო ჭიქის 
//მიღების შემდეგ გასული დროის მონაკვეთს. გამოთვალეთ თქვენს სისხლში ალკოჰოლის შემცველობა (BAC) შემდეგი 
//ფორმულის გამოყენებით:
// BAC = (A × 5.14 / W × r) − .015 × H

// სადაც:

// - A არის მთლიანი მოხმარებული ალკოჰოლი, უნციაში (oz).
// - W არის სხეულის წონა ფუნტებში.
// - r არის ალკოჰოლის განაწილების თანაფარდობა:
//   – 0,73 მამაკაცებისთვის
//   – 0,66 ქალებისთვის
// - H არის გასული საათების რაოდენობა ბოლო ჭიქის დალევის მერე.

// პროგრამამ უნდა დაბეჭდოს, შეიძლება თუ არა ავტომობილის მართვა, სისხლში ალკოჰოლის შემცველობის
//  0,08-სთან შედარებით.

// Example Output

// Prompt the user for inputs
// let weight = Number(prompt("Enter your weight in pounds:"));
// let gender = prompt("Enter your gender (male/female):").toLowerCase();
// let numGlasses = Number(prompt("Enter the number of glasses consumed:"));
// let amountAlcohol = Number(prompt("Enter the amount of alcohol per glass in ounces:"));
// let hoursSinceLastDrink = Number(prompt("Enter the number of hours since your last drink:"));
// let r;
// if (gender === "male") {
//     r = 0.73;
// } else if (gender === "female") {
//     r = 0.66;
// } else {
//     console.log("Invalid gender entered. Please enter 'male' or 'female'.");
// }
// let totalAlcohol = numGlasses * amountAlcohol;
// let BAC = (totalAlcohol * 5.14 / weight * r) - 0.015 * hoursSinceLastDrink;

// console.log(`Your BAC is ${BAC.toFixed(2)}`);
// if (BAC >= 0.08) {
//     console.log("It is not legal for you to drive.");
// } else {
//     console.log("It is legal for you to drive.");
// }

// ### პროექტი 36 - Temperature Converter - ტემპერატურის კონვერტაცია

// შექმენით პროგრამა, რომელიც გარდაქმნის ტემპერატურას ფარენჰეიტიდან ცელსიუსში ან ცელსიუსიდან ფარენჰეიტში.
// მოითხოვეთ საწყისი ტემპერატურა. პროგრამამ უნდა მოითხოვოს კონვერტაციის ტიპი და შემდეგ შეასრულოს
// კონვერტაცია.

// საჭირო ფორმულებია:
// C = (F − 32) × 5 / 9
// და
// F = (C × 9 / 5) + 32

// Example Output

// ```shell
// < Press C to convert from Fahrenheit to Celsius.
// < Press F to convert from Celsius to Fahrenheit.
// < Your choice: C

// < Please enter the temperature in Fahrenheit: 32
// < The temperature in Celsius is 0.
// ```
// const celsius = 30
// const farenheit = (celsius * 9 / 5 ) + 32
// console.log(`${celsius} celsius  in farenheit is ${farenheit} farenheit`)

// ### პროექტი 37 - BMI Calculator - სხეულის მასის ინდექსის კალკულატორი

// შექმენით პროგრამა სხეულის მასის ინდექსის (BMI) გამოთვლისთვის. ადამიანის სიმაღლე დუიმებში უნდა იყოს,
// // ხოლო წონა - ფუნტებში. პროგრამამ უნდა სთხოვოს მომხმარებელს წონის და სიმაღლის მითითება. გამოთვალეთ 
// //BMI შემდეგი ფორმულის გამოყენებით:

// - bmi = (weight / (height × height))\* 703

// თუ BMI არის 18,5-დან 25-მდე, აჩვენეთ, რომ ადამიანის წონა ნორმაშია. თუ BMI ამ შუალედს სცილდება, 
// //დაბეჭდეთ, ადამიანს მცირე წონა აქვს თუ ჭარბი და მიუთითეთ, რომ მიმართოს ექიმს.

// Example Output

// ```shell
// < Your BMI is 19.5.
// < You are within the ideal weight range.

// < Your BMI is 32.5.
// < You are overweight. You should see your doctor.
// ```
// let height = 1.20462  //1 sm
// let weight = 1.2046  // 1kg
// let bmi = (weight / (height * height))
// if(bmi >= 18.5 && bmi <= 25){
//     console.log('wona normashia')
// }else{
//     console.log('wona araa normashi')
// }
//wona araa normashi
// ### პროექტი 38 - Multistate Sales Tax Calculator - შტატშორისი გაყიდვების გადასახადის კალკულატორი

// კომპლექსურ პროგრამებს შეიძლება გადაწყვეტილებებში კიდევ სხვა გადაწყვეტილებები ჰქონდეთ ჩაშენებული,
//  ასე რომ, როდესაც ერთი გადაწყვეტილება მიიღება, დამატებითი გადაწყვეტილებებიც უნდა იქნას მიღებული.
//   შექმენით საგადასახადო კალკულატორი, რომელიც ამუშავებს მრავალ შტატს და მრავალ დაბას თითოეულ შტატში.
//    პროგრამა მოუწოდებს მომხმარებელს შეკვეთის ოდენობას და შტატს, სადაც შეკვეთა გაიგზავნება. ვისკონსინის
//     მკვიდრთათვის, მოითხოვეთ საცხოვრებელი ადგილი.

// • Eau Claire-ის მცხოვრებლებს დამატებით დააკისრეთ 0.005 გადასახადი.
// • Dunn-ის მცხოვრებლების კი დამატებით დააკისრეთ 0.004 გადასახადი.

// ილინოისის მცხოვრებლებს 8% გაყიდვების გადასახადი უნდა დაეკისროთ, დაბის დონის დამატებითი 
// გადასახადის გარეშე. არც ერთ სხვა შტატს გადასახადი არ ეკისრება. შესაბამისად, პროგრამა აჩვენებს გადასახადს 
// (tax) და ჯამს (total - (საწყისი ფასი + გადასახადი)) ვისკონსინისა და ილინოისის მცხოვრებლებისთვის, ყველა
//  დანარჩენი შტატისთვის კი - მხოლოდ ჯამს.

// Example Output

// ```shell
// < What is the order amount? $100
// < What state do you live in? Wisconsin
// < What county do you live in? Dunn
// < The tax is $0.40.
// < The total is $100.40.

// < What is the order amount? $75
// < What state do you live in? Illinois
// < The tax is 8%.
// < The total is $81.00.

// < What is the order amount? 200
// < What state do you live in? California
// < The total is $200.00.
// ```

// const amount = Number(prompt('enter the number'))
// const state = prompt('enter your state')
// const live = prompt('where do you live in?')
// let tax = 0
// let total = 0
// if(live === 'Illinois'){
//     tax = 8
//     total =  tax + amount
// }else if(live === 'Wisconsin'){
//     tax = 0.4
//     total = tax + amount
// }else if(live !== 'Illinois' && live !== 'Wisconsin'){
//     tax = 0
//     total = tax + amount
// }
// console.log(`the tax is ${tax} total is ${total}`)

// ### პროექტი 39 - Numbers to Names - რიცხვები სიტყვებში

// ბევრი პროგრამა ინფორმაციას მომხმარებლისთვის ერთი ფორმით აჩვენებს, მაგრამ იყენებს სხვა ფორმას პროგრამის 
// შიგნით. მაგალითად, შეგიძლიათ აჩვენოთ სიტყვა Blue ეკრანზე, მაგრამ ეკრანს მიღმა გექნებათ ამ ფერის რიცხვითი 
// ან ტექსტუალური მნიშვნელობა, რადგან შეიძლება, სიტყვიერი აღწერილობის წარმოდგენა სხვა ენაზე - ესპანურენოვანი
//  ვიზიტორებისთვის გჭირდებოდეთ. დაწერეთ პროგრამა, რომელიც გადააქცევს რიცხვს 1-დან 12-მდე შესაბამის თვეში.
//   მოითხოვეთ ნომერი და აჩვენეთ შესაბამისი კალენდარული თვე, სადაც 1 იქნება იანვარი, ხოლო 12 - დეკემბერი.
//    ამ დიაპაზონის გარეთ ნებისმიერი მნიშვნელობისთვის დაბეჭდეთ შესაბამისი შეცდომის შეტყობინება.

// Example Output

// ```shell
// < Please enter the number of the month: 3
// < The name of the month is March.
// ```

// - ამ პროგრამისთვის გამოიყენეთ switch/case statement.
// const month = Number(prompt('what is the month'))
// switch(month){
//     case 1:
//         console.log('january');
//         break;
//     case 2:
//         console.log('february');
//         break;
//     case 3:
//         console.log('march');
//         break;
//     case 4:
//         console.log('april');
//         break;
//     case 5:
//         console.log('may');
//         break;
//     case 6:
//         console.log('june');
//         break;
//     case 7:
//         console.log('july');
//         break;
//     case 8:
//         console.log('august');
//         break;
//     case 9:
//         console.log('september');
//         break;
//     case 10:
//         console.log('october');
//         break;
//     case 11:
//         console.log('november');
//         break;
//     case 12:
//         console.log('december');
//         break;
//         default:
//         console.log('Invalid month. Please enter a number between 1 and 12.');

// }
// ### პროექტი 40 - Comparing Numbers - რიცხვების შედარება

// ერთი Input მნიშვნელობის შედარება ცნობილ მნიშვნელობასთან საკმაოდ ხშირია, მაგრამ ასევე ხშირად 
//დაგჭირდებათ input-ების კრებულის დამუშავება. დაწერეთ პროგრამა, რომელიც ითხოვს სამ რიცხვს. 
//ჯერ დარწმუნდით, რომ ყველა რიცხვი განსხვავებულია და თუ ისინი არ განსხვავდებიან, მაშინ პროგრამის 
//მუშაობა შეჩერდეს. წინააღმდეგ შემთხვევაში, აჩვენეთ ამ სამიდან ყველაზე დიდი რიცხვი.

// Example Output

// ```shell
// < Enter the first number: 1
// < Enter the second number: 51
// < Enter the third number: 2
// < The largest number is 51.
// ```
// -    
// Prompt the user for three numbers
// const num1 = Number(prompt('Enter the first number:'));
// const num2 = Number(prompt('Enter the second number:'));
// const num3 = Number(prompt('Enter the third number:'));

// if (num1 === num2 || num1 === num3 || num2 === num3) {
//     console.log('All numbers must be different.');
// } else {
//     let bigNumber = num1;

//     if (num2 > bigNumber) {
//         bigNumber = num2;
//     }
//     if (num3 > bigNumber) {
//         bigNumber = num3;
//     }
//     console.log(`The largest number is ${bigNumber}.`);
// }

// ### პროექტი 41 - Troubleshooting Car Issues - მანქანის პრობლემების მოგვარება

// საექსპერტო სისტემა (expert system) ხელოვნური ინტელექტის პროგრამის ტიპია, რომელიც იყენებს გარკვეული
// ცოდნის ბაზას და წესების ერთობლიობას იმ დავალების შესასრულებლად, რომელიც შეიძლება შეასრულოს
// ადამიანმა ექსპერტმა. მაგალითად, ბევრი ისეთი ვებსაიტია ხელმისაწვდომი, რომელიც კითხვებზე პასუხების 
//გაცემით გარკვეული სამედიცინო პრობლემის თვითდიაგნოსტიკაში გვეხმარებიან; ტექნიკისა და პროგრამული 
//უზრუნველყოფის მრავალი კომპანია გვთავაზობს პრობლემების მოგვარების ონლაინ ინსტრუმენტებს, რომელიც 
//ადამიანებს მარტივი ტექნიკური საკითხების გადაჭრაში სხვა ადამიანთან დარეკვამდე ეხმარება. შექმენით პროგრამა, 
//რომელიც მომხმარებელს მანქანის პრობლემების მოგვარებაში ეხმარება. თითოეულ კითხვაზე მომხმარებელს "კი/არა"
// პასუხის გაცემა შეეძლება, პროგრამა კი შესაბამისი კითხვების დასმას ამ პასუხების მიხედვით განაგრძობს.

// Example Output

// ```shell
// < Is the car silent when you turn the key? y
// < Are the battery terminals corroded? n
// < The battery cables may be damaged.
// < Replace cables and try again.
// ```
// const   question1 = prompt('Does your stomach hurt? ')
// const question2 = prompt('Do your feet hurt?')
// const question3 = prompt('Does your head hurt?')
// if(question1 === 'y'){
//     console.log('drink stomach cure')
// }
// if(question2 === 'y'){
//     console.log('drink feet cure')
// }
//     if(question3 === 'y'){
//     console.log('   drink head cure')
// }
