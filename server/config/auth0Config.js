import {auth} from 'express-oauth2-jwt-bearer'


const jwtCheck = auth({
    audience: "https://ghar-dekho-fwyq.vercel.app",
    issuerBaseURL: "https://dev-fmhxba2otfai6a2c.us.auth0.com",
    tokenSigningAlg: "RS256",
})

export default jwtCheck

