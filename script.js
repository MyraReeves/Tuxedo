//Double quotation marks are occassionally used to allow for easier/faster writing of contractions

function leashes() {
    let LeashGuesses = prompt('Your entry is blocked by an excited Tux! He wants to play a game! Can you guess what color Tux wears most often?');

    while (LeashGuesses != 'teal') {
        LeashGuesses = prompt("Doggie farts! That's not it. Keep guessing!  Hint: It's the name for color code #008080 written without any capitalization.");
    }
}




function awake() {
    let question = prompt("Huzzah!  You got it! Now that you've played with him, it's time for Tux to do something else. Is the sun still up where you are?  Type Y if it is, or N if it is not");
    console.log(question);
    
    if (question == "") {
        question = prompt("You didn't type anything!  Do you want to try again?  Type Y if it's daytime right now or type N if it's night.");
    }    
    else if (question != 'Y' && question != 'N') {
        question = prompt("That's not a valid response! Please try again. Type Y if it's daylight hours or type N if it is nighttime.");
    }    
    
    
    if (question == 'Y') {
        document.write("It's time to take Tux for a walk!");
    } else if (question == 'N') {
        document.write('Puppies go to sleep now. Zzzzz...');
    } else {
        document.write("Uh oh! Tux just chewed up your favorite shoes because you didn't follow the instructions!   ");
    }    
    let introtext = '       That means it is time to learn more about Boston terriers!'
    document.write(introtext);

}    





function displayAdopted() {
    let AdoptPic = +prompt('One last question. After you learn about Boston terriers, you have the option of virtual ones waiting for you at the bottom of the screen. How many virtual Boston terriers do you want to virtually adopt?');
console.log (AdoptPic)    
    for (let i = 0; i < AdoptPic; i++) {
        document.write("<img src='adoptme.gif' alt='cartoon image of a Boston terrier with the word Adopted above it'>");
    }    
}    

