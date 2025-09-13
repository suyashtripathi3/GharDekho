import {auth} from 'express-oauth2-jwt-bearer'


const jwtCheck = auth({
    audience: "http://localhost:5000",
    issuerBaseURL: "https://dev-fmhxba2otfai6a2c.us.auth0.com",
    tokenSigningAlg: "RS256",
})

export default jwtCheck

