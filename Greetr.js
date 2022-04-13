(function(global, $) {

    // returns a new greetr.init
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // valid languages
    var supportedLangs = ['en', 'hu'];

    // informal greeting
    var greetings = {
        en: 'Hello',
        hu: 'Szia'
    };

    // formal greeting
    var formalGreetings = {
        en: 'Greetings',
        hu: 'Üdvözlöm'
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        hu: 'Bejelentkezve'
    }

    // methods
    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName;
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            //if undefined or null it will be coerced to false
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if(console) {
                console.log(msg)
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this; 
        },

        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if(!$){
                throw 'Jquery not loaded';
            }
            if(!selector) {
                throw 'Missing Jquery selector';
            }
            var msg;
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;

        }
    };

    // builds the object & sets the values
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
 
    }

    // give access all of the created objects to all of the methods
    Greetr.init.prototype = Greetr.prototype

    global.Greetr = global.G$ = Greetr;

}(window, jQuery))