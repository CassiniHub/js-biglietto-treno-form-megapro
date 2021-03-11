var generateButton = document.getElementById('generate');
var undoButton     = document.getElementById('undo');
var priceForKm     = 0.21;
var totalPrice     = 0;

generateButton.addEventListener("click",
function() {

    var name         = document.getElementById('name').value;
    var km           = document.getElementById('km').value;
    var age          = document.getElementById('age').value;
    var specialOffer = document.getElementById('special-offer');

    console.log(name, km, age);
    
    if (name != '' && km > 0 && age != '') {
      
        totalPrice = priceForKm * km;

        if (age == 'minorenne') {
            
            totalPrice = totalPrice * 0.80;
            specialOffer.innerHTML = 'Offerta minorenne';
        } else if (age == 'over65') {
            
            totalPrice = totalPrice * 0.40;
            specialOffer.innerHTML = 'Offerta over65';
        } else {

            specialOffer.innerHTML = 'Nessuna offerta';
        }

        totalPrice = totalPrice.toFixed(2);

        // Aggiunto 0 se numero ha solo 1 decimale
        if (totalPrice.length < 4) {
            totalPrice += '0';
        }

        var getPassengerName = document.getElementById('passenger-name');
        var getWagon         = document.getElementById('wagon');
        var getCp            = document.getElementById('cp');
        var getTotalPrice    = document.getElementById('total-price');

        var wagon = Math.floor(Math.random() * 20) + 1;
        var cp    = Math.floor(Math.random() * 10000 + 1) + 90000;
        
        getPassengerName.innerHTML = name;
        getWagon.innerHTML         = wagon;
        getCp.innerHTML            = cp;
        getTotalPrice.innerHTML    = '€ ' + totalPrice;

    } else {
        
    }
});