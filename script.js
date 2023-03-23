
function awake() {
    let question = prompt("Is the sun still up where you are?  Type Y if it is, or N if it is not");
    console.log(question);

    if (question == "") {
        question = prompt("You didn't type anything!  Do you want to try again?  Type Y if it's daytime right now or type N if it's night.");
    }
    else if (question != 'Y' && question != 'N') {
        question = prompt ("That's not a valid response! Please try again. Type Y if it's daylight hours or type N if it is nighttime.");
     }    

     
    if (question == 'Y') {
        document.write("It's time to take Tux for a walk!  ");
    } else if (question == 'N') {
        document.write('Puppies go to sleep now. Zzzzz...  ');
    } else {
        document.write("Uh oh! Tux just chewed up your favorite shoes because you didn't follow the instructions!   ");
    }
}

awake ()

let introtext = '       That means it is time to learn more about Boston terriers!'
document.write(introtext);
