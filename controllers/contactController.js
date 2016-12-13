const Contact = require("../models/contact");
const mailer = require("../lib/email");

class ContactController {
    static speak(req, res){         // the get request from routes/contact invokes this function
        res.render("hello.ejs");    //  will look in ../views for 'hello.ejs' to display in the browser at the route given in ../routes/contact    
    }
    static sendContactRequest(req, res){            // POST requests are handled by models
        try {                                       // req.body is a JSON object (contact form stuff) send to Contact in ../models/contact
            const contactRequest = new Contact(req.body);   // Contact extracts the information of the object 
            // The object is passed to sendEmail()
            mailer.sendEmail(contactRequest)         
                .then(() => {
                    console.log("It worked!");
                    res.redirect("/");
                })
                .catch(error => {
                    console.log(`It fucked up because ${error}`);
                    res.redirect("/");
                });    
        } catch (err){
            console.log(err);
            res.redirect("/");
        }
    }
}

module.exports = ContactController;