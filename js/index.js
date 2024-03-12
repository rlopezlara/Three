// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

const output = document.getElementById('output');

function Hamburger(name,hamburgerName, hamburgerSize, typeCheese, sauces,hamburgerType,vegetables, extra){
    this.name = name,
    this.hamburgerName =hamburgerName,      
    this.hamburgerSize = hamburgerSize,
    this.typeCheese = typeCheese,
    this.sauces = sauces;
    this.hamburgerType =hamburgerType,
    this.vegetables = vegetables,
    this.extra = extra,
    this.summary = function(){
        output.textContent = `Hello ${name}, your order summary is ${this.hamburgerName} your size ${this.hamburgerSize
        } you type of cheese ${this.typeCheese} your sauce chose is ${this.sauces} your type of hamburger is
         ${hamburgerType} you picked these vegetables ${vegetables} and finally your extra ${extra}.`;
    }
}

let person1 = new Hamburger("Rodrigo", "regular","large", "cheddar","mustard", "vegetarian", ["tomato", "lettuce", "avocado"],"Onion");