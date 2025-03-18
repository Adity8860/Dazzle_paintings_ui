require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const app = express();
app.use(express.json());
app.use(cors());

const sesClient = new SESClient({
    region: "us-east-1", // Change this to your AWS region
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

app.post("/send-email", async (req, res) => {
    const { to, subject, message } = req.body;

    const emailParams = {
        Destination: { ToAddresses: [to] },
        Message: {
            Body: { Text: { Data: message } },
            Subject: { Data: subject },
        },
        Source: process.env.FROM_EMAIL, // Verified SES email
    };

    try {
        await sesClient.send(new SendEmailCommand(emailParams));
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
