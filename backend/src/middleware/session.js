import {getAuth} from "firebase-admin/auth"

export const isLogged = async (req, res, next) => {
    const auth = getAuth()

    const token = req.cookies['Authorization']

    const decoded = await auth.verifyIdToken(token, true)

    console.log(decoded)

    next()
}
