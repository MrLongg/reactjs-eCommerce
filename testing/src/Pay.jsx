import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY =
    'pk_test_51OGeuYLmhlSRINecFK4cRv0nbUHticGiiguQa6sa27TdlLMvrUAjDVebx2dKNkL6mUYNfyCJpaf4g5AcanywwSQe00xjaYLzGw';

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                if (stripeToken) {
                    const res = await axios.post('http://localhost:5000/api/checkout/payment', {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    });
                    console.log(res.data);
                } else {
                    console.log('Stripe token is null');
                }
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
    }, [stripeToken]);

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <StripeCheckout
                name="Long Shop"
                image="https://yt3.ggpht.com/wWDqp5j3QmrwIDRCBn0t1cKPkGNKpe5q9E1U5vCVPxcIppPnOAwwjZ8z4DgrIIhWTDHSxKPdwA=s88-c-k-c0x00ffffff-no-rj"
                billingAddress
                shippingAddress
                description="Your total is $20"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: 'none',
                        width: 120,
                        borderRadius: 5,
                        padding: '20px',
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: '600',
                        cursor: 'pointer',
                    }}
                >
                    PAY NOW
                </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;
