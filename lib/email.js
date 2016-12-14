const sg = require('sendgrid').SendGrid("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"); // my API KEY

const request = sg.emptyRequest();  // send grid initialisation

class Email {

    static sendEmail(obj){
        return new Promise(
            (resolve, reject) => {          // takes the object from contactController and assigns properties
                request.body = {            // of the object appropriately as seen below by interpolation
                    "from": {
                        "email": obj.email,
                        "name": `${obj.firstName} ${obj.lastName}`
                    },
                    "subject": "A new website contact request",
                    "content": [
                        {
                            "type": "text/html",
                            "value": `
                            <html>
                            <p>
                                ${obj.firstName} ${obj.lastName} has sent you an email
                            </p>
                            <p>
                                ${obj.message}
                            </p>
                            </html>`
                        }
                    ],
                    "personalizations": [
                        {
                            "to": [
                                {
                                    "email": "rshahsawary1@hotmail.com"
                                }
                            ]
                        }
                    ]
                };

                // stating that the sendgrid method is going to post the information
                request.method = 'POST';
                request.path = '/v3/mail/send';
                
                // log details of the message of show error
                sg.API(request, function (response) {
                    console.log(response.statusCode);
                    console.log(response.body);
                    console.log(response.headers);
                    if (response.statusCode === 200){
                        resolve();
                    } else {
                        reject("An error has occurred");
                    }
                });
            }
        )
    }
}
module.exports = Email;