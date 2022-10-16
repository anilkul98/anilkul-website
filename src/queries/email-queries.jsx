import emailjs from "@emailjs/browser";

const emailjsCredentials = require("../credentials/emailjs_credentials.json");

export async function handleEmail(emailContent) {
  emailjs.init(emailjsCredentials.publicKey);
  // e.preventDefault(); // Prevents default refresh by the browser
  emailjs
    .send(
      emailjsCredentials.userId,
      emailjsCredentials.templeteId,
      emailContent
      // emailjs.publicKey
    )
    .then(
      (result) => {
        console.log(
          "Message Sent, We will get back to you shortly",
          result.text
        );
      },
      (error) => {
        console.log("An error occurred, Please try again", error.text);
      }
    );
}
