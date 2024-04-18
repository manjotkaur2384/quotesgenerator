//name-manjot//
//student id-200551166//

$(document).ready(function () {
    const apiKey = 'V1iL5SjBpVtsiD44XUi4Lg==cVD8BV9IzSzUrMMz'; 

    $('#get-quote-btn').click(function () {
        $.ajax({
            method: 'GET',
            url: `https://api.api-ninjas.com/v1/quotes?category=happiness`,
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json',
            success: function(result) {
                if (result && result.length > 0) {
                    const quote = result[0].quote;
                    const author = result[0].author;
                    displayQuote(quote, author);
                } else {
                    console.log('No quotes found for the category: ' + category);
                }
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    });

    function displayQuote(quote, author) {
        $('#quote-container').html(`<p>"${quote}"</p><p>- ${author}</p>`);
    }
});
