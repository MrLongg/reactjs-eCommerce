import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/api/';
const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjJjOGRmYTIxY2E0ZjljMmY5NTIwYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzA2ODE5OSwiZXhwIjoxNzAzMzI3Mzk5fQ.Z-RWqmrvCcQskv00oNL0LjCFjTIf2JQ5FVjYLvK4N28';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
