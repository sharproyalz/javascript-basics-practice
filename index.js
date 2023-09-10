// Q1: Assign your name to the variable name.
let name = "Vonn";

// Q2: Assign your age (real or fake) to the variable age.
let age = "18";

// Q3: Assign a boolean value to the variable hasAndroidPhone.
let hasAndroidPhone = true;

// Q4: Create an object person with keys "Name", "Age", "HasAndroidPhone"
// and values using the variables defined above.
let person = {
    Name: name,
    Age: age,
    HasAndroidPhone: hasAndroidPhone,
};
// Let's use the person object to print a nice message.
if (hasAndroidPhone) {
    console.log(
        `${person["Name"]} is aged ${person["Age"]}, and owns an Android phone.`
    );
} else {
    console.log(
        `${person["Name"]} is aged ${person["Age"]}, and owns an iPhone.`
    );
}

// Q5: Create an array containing the following 3 elements:
//     your favorite color
//     the number of pets you have
//     a boolean value describing whether you have previous programming experience
let myArray = ["black", "1", true];

// Q6: Complete the following console.log and if statements by accessing the appropriate elements from myArra
console.log("My favorite color is", myArray[0]);
console.log(`I have ${myArray[1]} pet(s).`);
if (myArray[2]) {
    console.log("I have previous programming experience");
} else {
    console.log("I do not have previous programming experience");
}

// Q7: Add your favorite single digit number to the end of the array using the appropriate array method.
myArray.push(8);

// Q8: Remove the first element of the array, using the appropriate array method.
myArray.shift();

// Q9: Complete the console.log statement below to display the number of elements in myArray.
console.log(`The array has ${myArray.length} elements.`);

// Q10: Calculate and display the sum of all the numbers divisible by 7 between 18 and 534 i.e. 21+28+35+...+525+532
sumOfNumbers = 0;

for (let i = 18; sumOfNumbers < 532; i++) {
    if (i % 7 == 0) {
        sumOfNumbers += i;
    }
}
console.log(
    "The sum of all the numbers divisible by 7 between 18 and 534 is",
    sumOfNumbers
);

// Q11: A travel company wants to fly a plane to the Bahamas. Flying the plane costs 5000 dollars.
// So far, 29 people have signed up for the trip. If the company charges 200 dollars per ticket,
// what is the profit made by the company?
costOfFlyingPlane = 5000;
numberOfPassengers = 29;
priceOfTicket = 200;
profit = numberOfPassengers * priceOfTicket - costOfFlyingPlane;

console.log(`The company makes of a profit of ${profit} dollars`);

tweets = [
    "Wow, what a great day today!! #sunshine",
    "I feel sad about the things going on around us. #covid19",
    "I'm really excited to learn JavaScript with @JovianHQ #fsdbootcamp",
    "This is a really nice song. #linkinpark",
    "The JavaScript programming language is useful for full stack development",
    "Why do bad things happen to me?",
    "Apple announces the release of the new iPhone 15. Fans are excited.",
    "Spent my day with family!! #happy",
    "Check out my blog post on common string operations in JavaScript. #fsdbootcamp",
    "Freecodecamp has great coding tutorials. #skillup",
];
// Q12: How many tweets does the dataset contain?
numberOfTweets = tweets.length;

happyWords = [
    "great",
    "excited",
    "happy",
    "nice",
    "wonderful",
    "amazing",
    "good",
    "best",
];
sadWords = ["sad", "bad", "tragic", "unhappy", "worst"];
sampleTweet = tweets[0];
isTweetHappy = false;

happyWords.forEach((word) => {
    if (sampleTweet.includes(word)) {
        isTweetHappy = true;
    }
});

// Q13: Determine the number of tweets in the dataset that can be classified as happy.
numberOfHappyTweets = 0;

for (let i = 0; i < tweets.length; i++) {
    happyWords.forEach((word) => {
        if (tweets[i].includes(word)) {
            numberOfHappyTweets += 1;
        }
    });
}
console.log("Number of happy tweets:", numberOfHappyTweets);

// Q14: What fraction of the total number of tweets are happy?
happyFraction = numberOfHappyTweets / tweets.length;
console.log("The fraction of happy tweets is:", happyFraction);

// Q15: Determine the number of tweets in the dataset that can be classified as sad.
numberOfSadTweets = 0;

for (let i = 0; i < tweets.length; i++) {
    sadWords.forEach((word) => {
        if (tweets[i].includes(word)) {
            numberOfSadTweets += 1;
        }
    });
}

console.log("Number of sad tweets:", numberOfSadTweets);

// Q16: What fraction of the total number of tweets are sad?
sadFraction = numberOfSadTweets / tweets.length;
console.log("The fraction of sad tweets is:", sadFraction);
