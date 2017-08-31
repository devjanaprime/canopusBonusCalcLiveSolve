var verbose = false;

var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

if( verbose ) console.log(employees);

//function that receives a single employee
function evalEmployee( employee ){
    if( verbose ) console.log( 'in evalEmployee:', employee );
    var bonusPercentage = 0;
    var totalComp = 0;
    var totalBonus = 0;
    // ratings calc
    if( employee.reviewRating === 3 ){
        if( verbose ) console.log( 'rating of 3, adjusting');
        bonusPercentage += 0.04;
    } // end rating of 3
    else if( employee.reviewRating === 4 ){
        if( verbose ) console.log( 'rating of 4, adjusting');
        bonusPercentage += 0.06;
    } // end rating of 4
    else if( employee.reviewRating === 5 ){
        if( verbose ) console.log( 'rating of 5, adjusting');
        bonusPercentage += 0.1;
    } // end rating of 5
    else{
        if( verbose ) console.log( 'rating of 5, not adjusting');
        bonusPercentage += 0;
    }  // end default rating bonus  
    // emp# calc
    if( employee.employeeNumber.length === 4 ){
        if( verbose ) console.log( 'dino');
        bonusPercentage += 0.05;
    } // old people get PAID
    else{
        if( verbose ) console.log( 'noob' );
        bonusPercentage += 0;
    } // I hope hunter feels better now
    // salary calc
    if( Number( employee.annualSalary ) > 65000 ){
        if( verbose ) console.log( 'already rich');
        bonusPercentage -= 0.01;
    }
    else{
        if( verbose ) console.log( 'needs the loot' );
        bonusPercentage += 0;
    } // you're kinda welcome
    // max bonus adjustment
    if( bonusPercentage > 0.13 ){
        if( verbose ) console.log( 'too high');
        bonusPercentage = 0.13;
    } // too much $
    else if( bonusPercentage < 0 ){
        if( verbose ) console.log( 'too low');
        bonusPercentage = 0;
    } // too little
    else{
        // literally do NOTHING
    } // default
    // return a new object

    // calc total comp
    totalComp = Number( employee.annualSalary ) + bonusPercentage * Number( employee.annualSalary );

    // calc total bonus as an int
    totalBonus = Math.round( bonusPercentage * Number( employee.annualSalary ) );
    var objectToReturn = {
        name: employee.name,
        bonusPercentage: bonusPercentage,
        totalCompensation: totalComp,
        totalBonus: totalBonus
    }; // end objectToReturn
    return objectToReturn; // I'm an idiot
} // end funk

// loop through employees 
for( var i=0; i< employees.length; i++ ){
    console.log( evalEmployee( employees[ i ] ) );
} // end for