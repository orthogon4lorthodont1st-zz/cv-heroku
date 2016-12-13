const Contact = require("../models/contact");
const mailer = require("../lib/email");

class ContactController {
    static sendContactRequest(req, res){
        try {
            const contactRequest = new Contact(req.body);
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