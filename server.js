const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Your Twilio Credentials
const accountSid = "PASTE_YOUR_CORRECT_ACCOUNT_SID";
const authToken = "PASTE_YOUR_AUTH_TOKEN";

const client = twilio(accountSid, authToken);

// Route
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

            // Your Twilio Number
            from: "+19068286399",

            // Your Personal Verified Number
            to: "+919490326323"

        });

        console.log("SMS Sent Successfully");

        res.status(200).json({
            success: true
        });

    } catch (error) {

        console.log("Twilio Error:");
        console.log(error);

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

});

app.listen(5000, () => {

    console.log("Server running on port 5000");

});
