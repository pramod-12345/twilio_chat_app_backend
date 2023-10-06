
const twilio = require('twilio');
// console.log(' twi ',twilio);


// Fetch key, secret and ids from .env file
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
// const client = require('twilio')(accountSid, authToken);


function getToken(identity) {
    const AccessToken = twilio.jwt.AccessToken;
    // console.log(' Access ------', AccessToken);
    console.log(' identity ------', identity);
    const ChatGrant = AccessToken.ChatGrant;

    const chatGrant = new ChatGrant({
        serviceSid: serviceSid,
    });
    const token = new AccessToken(
        accountSid,
        apiKey,
        apiSecret,
        { 
            identity: identity, // identify user uniquely 
            ttl: 3600 // token expiration time
        }
    );

    token.addGrant(chatGrant); 
    return token.toJwt();
}

module.exports = {getToken};