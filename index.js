// 1. create an InstagramPost() constructor function

function InstagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}


// 2. Create 2 Instagram post objects from the constructor function you created above
// i. Creating instagram post objects for stutern
let stutern = new InstagramPost('Stuternhq', 'Election Season', 'https://www.instagram.com/p/CpDFVpONlMm/', 15, 14);
console.log(stutern);

// ii. Creating instagram post objects for Mark Zuckerberg
let markZuckerberg = new InstagramPost('zuck', 'Happy Birthday', 'https://www.instagram.com/p/CpDQfjBLWay/?utm_source=ig_web_copy_link', 8145, 8140);
console.log(markZuckerberg);


// 3(a) Using the factory method to create an object representing Musa
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location
    }
}
let musa = createPerson('Musa', 24, 'Abuja');
console.log(musa);

//3(b) Implementing a factory function createJambScores() that takes eng, govt, lit, crk as arguments.
//Then create an object representing Musa’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function createJambScores(ENG, GOVT, LIT, CRK) {
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK
    }
}
let musaJambScores = createJambScores(70, 85, 82, 94);

musa.jambScores = musaJambScores;
console.log(musa);


//4. Different ways to clone an object with example

const firstCar = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2014,
}
//CLONING
//a. option 1 - using object.assign()
const secondCar = Object.assign({}, firstCar);
secondCar.model = 'Lexus';

console.log(firstCar);
console.log(secondCar);

//b. option 2 - using spread syntax
const thirdCar = {...firstCar};
thirdCar.model = 'Corolla';

console.log(thirdCar);

//b. option 3 - using the method JSON.parse()
const fourthCar = JSON.parse(JSON.stringify(firstCar));
fourthCar.model = 'Hilux';

console.log(fourthCar);


// 5. ENUMERATION
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }

 for( let key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + ' is the presidential candiate of ' + [key]);
 }
