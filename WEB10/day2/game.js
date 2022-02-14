//game 1
var game1= ((2 == 2) && (2!=2) && !(2 == 2) || (2>3));
console.log(game1)//it must be false

var game2= (true || !(false) && (true || false));
console.log(game2)//this must be true

var game3= (false || (true && false) || true);
console.log(game3)//this must be true;

var game4= (true || (false && true || true));
console.log(game4)//this must be true;


 /* lets play one more game (game 2)
  in this game you have to answer it first write in comments 
  then run it in the powershell
 */

"game2"
 
 var game10= (true && !(false) && (!true) || true || false)//it must be true//

 var game11= (false && true || !(false) && (!true || !false))// it must be true;

 var game12= (true && false && (!false || !false) && true)// it must be false;

 var game13= (!(false && !false || (false && !true || !true)))// it must be true;

 console.log(game10, game11 ,game12 ,game13 )


