const router = require('express').Router();
const KEY =
    'sk_test_51OGeuYLmhlSRINecIBmeJm6nyG7xRQb2kWLJcJFF7Sg0rILzVAUw0USywHhUMgVHJbmCwlGVKIN1UvIETdOPqxa600oglOnrBK';
// const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);

router.post('/payment', (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: 'usd',
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        },
    );
});

module.exports = router;
