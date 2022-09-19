const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LfnfMSGuPtm97TykIZZRr5AjK5X2JaReouLmuYlUG3u6o15AhLveThfhwtI4Aw9UuvErXt9N1WVTr6HLQgy2K5Y00eAub6t4P');

//API

//App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("request received", total);

    const paymentIntent =await stripe.paymentIntents.create({
        amount: total,
        currency: "INR"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// listen command
exports.api = functions.https.onRequest(app);

// example end point
// http://localhost:5001/clone-react-f9f59/us-central1/api
