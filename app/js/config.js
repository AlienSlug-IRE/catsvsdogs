/*
    
    Class:  Cats VS Dogs - Configuration
    Author: Joseph O Donoghue

    Instructions: 
    -----------------------------------------------------------
    This abstracts the 
    - API configuration
    - routes supported
    - API parameters

    This allows for ease of updating and could also be updated 
    depending on requirements to allow this to be dynamically loaded via ajax
    call rather than be hardcoded to allow for a highly reactive little SPA. 

*/


(function() {
    define(function() {
        var config = {
            apiKey: 'dc6zaTOxFJmzC',
            url: 'http://api.giphy.com/v1/gifs/search?',
            routeArr: [{
                link: 'cats',
                displayName: 'Cats'
            }, {
                link: 'dogs',
                displayName: 'Dogs'
            }],
            params: {
                offset: 0,
                limit: 25
            },
            author: {
                name: 'Joseph O Donoghue',
                email: 'josephodonoghue@gmail.com'
            }
        };
        return config;
    });
})();