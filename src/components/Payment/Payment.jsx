import React, { useState } from 'react';

const PaymentOptions = () => {
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div>
            <h2>Select a Payment Method</h2>
            <form>
                <label>
                    <input type="radio" value="Credit Card" checked={paymentMethod === "Credit Card"} onChange={handlePaymentMethodChange} />
                    Credit Card
                </label>
                <label>
                    <input type="radio" value="PayPal" checked={paymentMethod === "PayPal"} onChange={handlePaymentMethodChange} />
                    PayPal
                </label>
                <label>
                    <input type="radio" value="Google Pay" checked={paymentMethod === "Google Pay"} onChange={handlePaymentMethodChange} />
                    Google Pay
                </label>
                <label>
                    <input type="radio" value="Apple Pay" checked={paymentMethod === "Apple Pay"} onChange={handlePaymentMethodChange} />
                    Apple Pay
                </label>
            </form>
            <p>Selected Payment Method: {paymentMethod}</p>
        </div>
    );
}

export default PaymentOptions;
