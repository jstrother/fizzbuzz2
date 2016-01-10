$(document).ready(function() {
    $('#number').focus();
    $('form').submit(function(e) {
        e.preventDefault();
        var num = $('#number').val();
        checkFizzBuzz(parseInt(num, 10));
    });
});

function checkFizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            $('#fizzbuzz').append('FizzBuzz<br />');
        } else if (i % 3 == 0) {
            $('#fizzbuzz').append('Fizz<br />');
        } else if (i % 5 == 0) {
            $('#fizzbuzz').append('Buzz<br />');
        } else {
            $('#fizzbuzz').append(i + '<br />');
        }
    }
}