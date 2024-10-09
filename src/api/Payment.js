import axios from "axios";

const makePaymentRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: "bearer" + process.env.NEXT_PUBLIC_STRIPE_PUBLICASABLE_KEY,
  },
});

export default makePaymentRequest;