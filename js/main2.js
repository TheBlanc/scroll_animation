
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');

var fl = 10;
var fn = 8;
var q = fl*fn
addEventListener('scroll', kittyrun)


length = 100;


// Create an 2D array with 10 columns and 100 rows. Each cell is i++ starting from 0 and ending at 999
var cat = new Array();
for(var i = 0; i < length; i++)
{
    cat[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (cat[i] == null)
            cat[i] = j;
        else
            cat[i].push(j);
}





console.log(cat);





















function kittyrun(){
  console.log(window.scrollY);

// Trial of loop method to replace repetative if-else tree

var y = true;
//----------- cat1--------------//
  for (var i = 0; y == true; i+=8) {
    if (window.scrollY >= cat[i][0] && window.scrollY <= cat[i][9]) {
      one.style.display = "inline-block";
      y = false;
    }  else {
      one.style.display = "none";
      y = false;
    }

  }



// if-else tree with cat array method

    // if (window.scrollY >= cat[0][0] && window.scrollY <= cat[0][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[8][0] && window.scrollY <= cat[8][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[16][0] && window.scrollY <= cat[16][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[24][0] && window.scrollY <= cat[24][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[32][0] && window.scrollY <= cat[32][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[40][0] && window.scrollY <= cat[40][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[48][0] && window.scrollY <= cat[48][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[56][0] && window.scrollY <= cat[56][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[64][0] && window.scrollY <= cat[64][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[72][0] && window.scrollY <= cat[72][9]) {
    //   one.style.display = "inline-block";
    // }
    // else if (window.scrollY >= cat[80][0] && window.scrollY <= cat[80][9]) {
    //   one.style.display = "inline-block";
    // }
    // else
    //   one.style.display = "none";


//----------- cat2--------------//

    if (window.scrollY >= fl && window.scrollY < (2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (q + fl) && window.scrollY < (q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (2*q + fl) && window.scrollY < (2*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (3*q + fl) && window.scrollY < (3*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (4*q + fl) && window.scrollY < (4*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (5*q + fl) && window.scrollY < (5*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (6*q + fl) && window.scrollY < (6*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (7*q + fl) && window.scrollY < (7*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (8*q + fl) && window.scrollY < (8*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (9*q + fl) && window.scrollY < (9*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else if (window.scrollY >= (10*q + fl) && window.scrollY < (10*q + 2*fl) ) {
      two.style.display = "inline-block";
    }
    else
      two.style.display = "none";


//----------- cat3--------------//

    if (window.scrollY >= (2*fl) && window.scrollY < (3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (q + 2*fl) && window.scrollY < (q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (2*q + 2*fl) && window.scrollY < (2*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (3*q + 2*fl) && window.scrollY < (3*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (4*q + 2*fl) && window.scrollY < (4*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (5*q + 2*fl) && window.scrollY < (5*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (6*q + 2*fl) && window.scrollY < (6*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (7*q + 2*fl) && window.scrollY < (7*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (8*q + 2*fl) && window.scrollY < (8*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (9*q + 2*fl) && window.scrollY < (9*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else if (window.scrollY >= (10*q + 2*fl) && window.scrollY < (10*q + 3*fl) ) {
      three.style.display = "inline-block";
    }
    else
      three.style.display = "none";


//----------- cat4--------------//

    if (window.scrollY >= (3*fl) && window.scrollY < (4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (q + 3*fl) && window.scrollY < (q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (2*q + 3*fl) && window.scrollY < (2*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (3*q + 3*fl) && window.scrollY < (3*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (4*q + 3*fl) && window.scrollY < (4*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (5*q + 3*fl) && window.scrollY < (5*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (6*q + 3*fl) && window.scrollY < (6*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (7*q + 3*fl) && window.scrollY < (7*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (8*q + 3*fl) && window.scrollY < (8*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (9*q + 3*fl) && window.scrollY < (9*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else if (window.scrollY >= (10*q + 3*fl) && window.scrollY < (10*q + 4*fl) ) {
      four.style.display = "inline-block";
    }
    else
      four.style.display = "none";


//----------- cat5--------------//

    if (window.scrollY >= (4*fl) && window.scrollY < (5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (q + 4*fl) && window.scrollY < (q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (2*q + 4*fl) && window.scrollY < (2*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (3*q + 4*fl) && window.scrollY < (3*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (4*q + 4*fl) && window.scrollY < (4*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (5*q + 4*fl) && window.scrollY < (5*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (6*q + 4*fl) && window.scrollY < (6*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (7*q + 4*fl) && window.scrollY < (7*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (8*q + 4*fl) && window.scrollY < (8*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (9*q + 4*fl) && window.scrollY < (9*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else if (window.scrollY >= (10*q + 4*fl) && window.scrollY < (10*q + 5*fl) ) {
      five.style.display = "inline-block";
    }
    else
      five.style.display = "none";


//----------- cat6--------------//

    if (window.scrollY >= (5*fl) && window.scrollY < (6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (q + 5*fl) && window.scrollY < (q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (2*q + 5*fl) && window.scrollY < (2*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (3*q + 5*fl) && window.scrollY < (3*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (4*q + 5*fl) && window.scrollY < (4*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (5*q + 5*fl) && window.scrollY < (5*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (6*q + 5*fl) && window.scrollY < (6*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (7*q + 5*fl) && window.scrollY < (7*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (8*q + 5*fl) && window.scrollY < (8*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (9*q + 5*fl) && window.scrollY < (9*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else if (window.scrollY >= (10*q + 5*fl) && window.scrollY < (10*q + 6*fl) ) {
      six.style.display = "inline-block";
    }
    else
      six.style.display = "none";


//----------- cat7--------------//

    if (window.scrollY >= (6*fl) && window.scrollY < (7*fl)) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (q + 6*fl) && window.scrollY < (q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (2*q + 6*fl) && window.scrollY < (2*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (3*q + 6*fl) && window.scrollY < (3*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (4*q + 6*fl) && window.scrollY < (4*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (5*q + 6*fl) && window.scrollY < (5*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (6*q + 6*fl) && window.scrollY < (6*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (7*q + 6*fl) && window.scrollY < (7*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (8*q + 6*fl) && window.scrollY < (8*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (9*q + 6*fl) && window.scrollY < (9*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else if (window.scrollY >= (10*q + 6*fl) && window.scrollY < (10*q + 7*fl) ) {
      seven.style.display = "inline-block";
    }
    else
      seven.style.display = "none";



//----------- cat8--------------//

    if (window.scrollY >= (7*fl) && window.scrollY < (8*fl)) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (q + 7*fl) && window.scrollY < (q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (2*q + 7*fl) && window.scrollY < (2*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (3*q + 7*fl) && window.scrollY < (3*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (4*q + 7*fl) && window.scrollY < (4*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (5*q + 7*fl) && window.scrollY < (5*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (6*q + 7*fl) && window.scrollY < (6*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (7*q + 7*fl) && window.scrollY < (7*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (8*q + 7*fl) && window.scrollY < (8*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (9*q + 7*fl) && window.scrollY < (9*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else if (window.scrollY >= (10*q + 7*fl) && window.scrollY < (10*q + 8*fl) ) {
      eight.style.display = "inline-block";
    }
    else
      eight.style.display = "none";

}
