import {getAuth} from "firebase-admin/auth"

export const isLogged = async (req, res, next) => {
    const auth = getAuth()

    try {
        const token = req.cookies['Authorization']

        await auth.verifyIdToken(token, true)

    } catch(err) {
        switch(err.code) {
            case 'auth/id-token-expired':
                return res.status(401).json({message: "Token expired"})
            case 'auth/id-token-revoked':
                return res.status(401).json({message: "Token revoked"})
            case 'auth/argument-error':
                return res.status(401).json({message: "Token required"})
            case 'auth/not-logged-in':
                return res.status(401).json({message: "Not logged in"})
            default:
                console.log(err)
                return res.status(401).json({message: "An error occurred"})
        }
    }

    next()
}

