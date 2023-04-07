const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
const points = document.getElementById('points');
console.log(btnRed, btnBlue, points);

let compteur = 0;

btnRed.addEventListener('click', function() {
    // console.log('Btn red clicked');
    add ();
});

btnBlue.addEventListener('click', function() {
    // console.log('Btn blue clicked');
    add ();
});



function add () {
    compteur = compteur + 10;
    console.log(compteur, "compteur après incrémentation");
    points.innerHTML = compteur;
}






