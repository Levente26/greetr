// it points to greetr function (greetr.js line 4)
var g = G$('Your', 'Name')
console.log(g)

g.greet()
g.setLang('hu').greet()
g.greet(true)

// error (not valid language)
// g.setLang('es').greet() 

//chainable
g.greet().setLang('hu').greet(true).log()

// log in
g.log()

// use the library on the click event on login button
$('#login').click(function() {

    var loginGrtr = G$('Your', 'Name');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})