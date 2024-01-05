import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/api/';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken
const STRIPE_SECRET_KEY = 'sk_test_51OGeuYLmhlSRINecIBmeJm6nyG7xRQb2kWLJcJFF7Sg0rILzVAUw0USywHhUMgVHJbmCwlGVKIN1UvIETdOPqxa600oglOnrBK'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`,
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`, // Thêm header Stripe
    },
});
