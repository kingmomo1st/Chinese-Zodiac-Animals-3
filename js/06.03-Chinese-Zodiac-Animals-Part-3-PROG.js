// Lesson 06.03 - PROG

// Chinese Zodiac Animals - Part 3

const backupAnimals= animals.slice ();  // or  [...animals]; // copy array of animal obj, so as not to change original



// 1. Get the DOM elements
// - copy array of animal obj, so as not to change original
// - get section that holds animals
// - get menu for choosing sort order
// - call function on menu change
// - get Descending checkbox

const AnimalSection= document.querySelector("section"); // get section that holds animals
const sortMenu= document.querySelector("select"); // get menu for choosing sort order
const desCheckBox= document.querySelector("#cb"); // get Descending checkbox


desCheckBox.addEventListener('change', function () { // 2. Have the checkbox call a function on change; this function is short, so we can just write it as an anonymous inline callback function:
    animals.reverse(); // 3. Reverse the order of the animals
    AnimalSection.innerHTML = "";
    renderAnimals(); // 4. Re-render the animals
});

sortMenu.addEventListener("change", function () { // 5. Define the renderAnimals function that makes and outputs the 12 animal divs)

    AnimalSection.innerHTML = ""; // 6. clear section to make way for fresh output

    const sortMethod= sortMenu.value; // 7. Loop the array of animal objects
    if (sortMethod === "eng") { // 8. sort in ascending order
        animals.sort((a, b) => (a.eng > b.eng) ? 1 : -1);// 8. sort in ascending order
    } else if (sortMethod === "chi") {
        animals.sort((a, b) => (a.chi > b.chi) ? 1 : -1);
    } else if (sortMethod === "year") {
        animals.sort((a, b) => (a.year > b.year) ? 1 : -1);
    }


    renderAnimals();

});



function renderAnimals (){ // 6. clear section to make way for fresh output
    for (const animal of animals) { // 7. Loop the array of animal objects

        const divvy= document.createElement("div"); // 8. Make a div
        divvy.className= "divvy"; // 9. Assign class to div
        AnimalSection.appendChild(divvy); // 10. Output div to section

        const animalImage= new Image ();
        animalImage.src=`images/animals/${animal.eng}.jpg`; // 11. make an image to hold the animal pic
        animalImage.className= "animal-pic"; // 12. Assign class to animal img
        divvy.appendChild(animalImage); // 13. Output the animal image to the div

        const charImage= new Image ();
        charImage.src= `images/chars/char-${animal.chi}.jpg`; // 14. Make image to hold Chinese character
        charImage.className= "chinese-char"; // 15. Set the source by concatenating the path to the character jpg
        divvy.appendChild(charImage); // 16. Output the Chinese character image to the div

        const englishSpan= document.createElement("span"); // 17. Make a span
        englishSpan.className= "english"; // 18. Assign class to span tag
        englishSpan.textContent=animal.eng;
        divvy.appendChild(englishSpan); // 19. Output span to div

        const pinyinSpan= document.createElement("span"); // 20. Make a span
        pinyinSpan.className= "pinyin"; // 21. Assign class to span tag
        pinyinSpan.innerHTML= animal.pin;
        divvy.appendChild(pinyinSpan); // 22. Output span to div

        const yearParagraph= document.createElement("p"); // 23. Make a p tag to hold a string of animal years in 12 year intervals
        yearParagraph.className= "zodiac-year"; // 24. Assign class to p tag
        let yearsString= `<span>${animal.year}</span><br><br>`; // 25. Run a loop that starts w current year, and concats 12 years
        for (let y= 12; y<=120; y+=12) {
            yearsString+= animal.year - y + '<br>';
        }
        yearParagraph.innerHTML= yearsString;
        divvy.appendChild(yearParagraph); // 26. Output p tag to div


        const infoDiv= document.createElement('div'); // 27. Make a div
        infoDiv.className= 'divvy animal-info'; // 28. Assign class to div
        infoDiv.innerHTML= `<p class='animal-name'>${animal.eng}</p>
        <p>Partners:<br>${animal.partners}</p>
        <p>Characteristics:<br>${animal.traits}</p>`; // 29. Output div to section
        divvy.appendChild(infoDiv); // 30. Output div to section

        infoDiv.addEventListener('click', toggleInfoVisibility); // 31. Add event listener to div
    }


}

renderAnimals();

let infoShowing= false;
function toggleInfoVisibility(){
    /*
    let infoOpacity= 1;
    if (infoShowing) {
        infoOpacity= 0;
    }
    this.style.opacity= infoOpacity;
    infoShowing= !infoShowing; // flip boolean
*/
if (this.style.opacity == ""|| this.style.opacity == 0) {
    this.style.opacity = 1;
} else {
    this.style.opacity = 0;

}

}

// function toggleInfoVisibility() {
   // infoShowing ? (infoOpacity = 0) : (infoOpacity = 1);
   // this.style.opacity = infoOpacity;
   // infoShowing = !infoShowing; // flip boolean
   //or
   // infoShowing = !infoShowing; // flip boolean
//  this.style.opacity = infoOpacity ?1:0;
// }


// 2. Have the checkbox call a function on change; this function is short, so we
// can just write it as an anonymous inline callback function:

// 3. Reverse the order of the animals

// 4. Re-render the animals

// 5. Define the renderAnimals function that makes and outputs the 12 animal divs

// output the 12 animals to the section

// 6. clear section to make way for fresh output

// 7. Loop the array of animal objects

// 8. Make a div

// 9. Assign class to div
// 'divvy'

// 10. Output div to section

// 11. make an image to hold the animal pic

// 12. Concat path to jpg
`images/animals/ .jpg`;

// 13. Assign class to animal img
// 'animal-pic'

// 14. Output the animal image to the div

// 15. Make image to hold Chinese character

// 16. Set the source by concatenating the path to the character jpg
// `images/chars/char- .jpg`;

// 17. Sssign class to character img
// 'chinese-char'

// 18. Give divvy an eng property

// 19. Output the character image to the div

// 20. Make a span tag to hold the english name of the animal

// 'english' // assign class to span tag

// output Pinyin text to span (HTML entities require innerHTML)
// engSpan.i = i; // output English name text to span tag
// output span tag to divvy

// 21. Make a span tag to hold Pinyin name of animal
// make a span tag
// 'pinyin' // assign class to span tag

// output Pinyin text to span (HTML entities require innerHTML)
// output Pinyin span name to divvy

// 22. Make a p tag to hold a string of animal years in 12 year intervals
// make a p tag
// 'zodiac-year; // assign class to p tag
// append p tag to divvy

// 23. Run a loop that starts w current year, and concats
// years backwards in time, in increments of 12 years
// `<span> </span><br><br>`; // string of years begins w current year
// loop from 12-168 in increments of 12
// concat next year in the cycle

// output animal yr string to p-tag

// 24. Make info div, which sits on top of divvy and appears-disappears on click
// `<p class="animal-name"></p>
// <p>Partners:<br></p>
// <p>Characteristics:<br></p>`;
// 'divvy animal-info';

// end forEach()
// end renderAnimals() function

// 25. Call the renderAnimals function
// render animals on page load; default order is by Eng, asc

// 26. Define the sortAnimals() which runs on change to select menu:

// 27. Clear the animal divs to make way  for fresh output

// 28. Get sort menu value: "eng", "chi" or "yr"

// 29. Do a big ternary:
// if sort key is "yr" (year), do a number sort in ascending order
// if sort key is "eng" or "chi", do a string sort in ascending order
// use dynamic obj key accessor, where a[k] is either "eng" or "chi":

// 30. If checkbox is checked, reverse the sort
// if Descending is checked; reverse sort

// 31. Re-render the freshly sorted animals
// re-render the sorted animals
// orderWheelSlices();

// 32. Define a function that shows-hides content

// flip boolean

// END: Lesson 06.03
// NEXT: Lesson 06.04
