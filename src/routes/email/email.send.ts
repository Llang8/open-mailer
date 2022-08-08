const { sendMail } = require("../../util/email");
const ejs = require('ejs');
const fs = require('fs')

module.exports = async (req: any, res: any) => {
    console.log(req.body)

    if (!req.body.template) {
        res.send('Invalid Input')
        return
    }

    try {
        const templatedFile = await ejs.renderFile(process.cwd() + '\\emails\\' + req.body.template + '.ejs', {
            data: req.body.data,
            preheader: req.body.preheader
        })
        
        const options = {
            to: req.body.to,
            cc: "",
            replyTo: "noreply@open-mailer.com",
            subject: req.body.subject,
            html: templatedFile,
            textEncoding: "base64",
            headers: [
                { key: "X-Application-Developer", value: "Lucas Lang" },
                { key: "X-Application-Version", value: "v1.0.0.1" },
            ],
        };
    
        const messageId = await sendMail(options);
        res.send(messageId)
    }
    catch(err) {
        res.status(500).send('Could not find requested template, please try again later')
        console.log(err)
    }
};
