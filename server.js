
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const accountSid = "AC6c7a74015f91b1be2575b0cce703bf3f";
const authToken = "baa81c5da1da77551187b628f6d46a07";

const client = twilio(accountSid, authToken);

app.post("/send-sms", async (req, res) => {

    const { name, email, message } = req.body;

    try {

        await client.messages.create({

            body:
`New Portfolio Message

Name: ${name}

Email: ${email}

Message:
${message}`,

            from: "+19068286399",

            to: "+919490326323"

        });

        res.status(200).json({
            success: true
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false
        });

    }

});

app.listen(5000, () => {

    console.log("Server running on port 5000");

});
