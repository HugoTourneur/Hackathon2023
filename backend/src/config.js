export default {
    port: process.env.PORT || 3001,
    firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        admin: {
            "type": "service_account",
            "project_id": "hackathon23-d8770",
            "private_key_id": "a06a7462a105065c98eebdecae5ec3bbfa04ec84",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFpGy4j/VBwNu/\nNu95l0qdWtZEqoqNyd381GOQYzrMMir7IlBtiSBj+4N09PH9SDFW9aO+ew2maImW\nm8EKFF2NQeoO/P2fDx7s5Wyi07FBppN84c6tUwdWUCyep/7YiPurQPj1l984qYu2\nJiyfueR2/f3ppgF8ipmVfqAUJAAcTUYWYg0FtLd2snVuw/tTZybu/fjh4kMh/CGU\n4w7aNxR12SmOY+fmDj0VuDa1TNW19wroum1T9GqJkNX+1lU3aDR5LAAcR9ityXvv\n9CW+q9RCIN6C6yFQ5QiFQ9dki9fKm3cDi7OAp2lfMNlnHCvYd50dck5mhbgBX+yG\n3Ss10pspAgMBAAECggEAK4rukvjQUUSyhR2Ow+yDeUhmdWlXLia/u/B04P4jmZIh\n6wMj0gYId06VpyJB4AnUKPLkONZ2aueUDHTTIivbcoAHl3bAT5cuuoVPGk5mOm7/\nBl/fP0tQDgGK2wdq+3yuaYvebYkgmiSsTZx6b1Quk9KgaqXypOQKMyfbD6Tgy1sN\nyMXnG2+Pj1fbBihQmZrntgYa0iUtK+AAwvcym7NSwMw9uhPA13kMMS/Y4RIY8726\nxuI5gw4pUBZrQJMp+/U1+ZOXfCLjSDSF1fEMOTOsFMYlaRZRDszEcVk3PdLAX+9o\n4Nw5GpaOZcHqxLVB3gZXfj7HdJBAGTFyH3l/VVsoiQKBgQDlRSRiufKrAWko6I70\nsxjKTk7ifLQNUFmX0OEGsiJ89CI/N7jsHpnwfDzYjDA6kCd5r0x0Z8cuyXSo3wSF\n72P5t9vpUjNUOXcbQbQapDAs37fGoHM7+Zjm0mo6Dfa5QVrACLGYNdGXcDC/8l+h\njMV1UFYkH0P8RF6UJLBHiijQpQKBgQDcr098gpYRjGiBuVgptQhmqhEKq8hsZF5P\nKtYBi4E1e3Ak57qz8wmakJAVp1fy/uX13mkiQYcTVqeRAirAyNnPj6GTpIMBc62X\nQWD+CmUB0/gzY6FNdecyenbzzLhYlQMIutfxs0Fj9tlwGiSHC8h4BU97btzfClyy\nBVP/QLR1NQKBgQC+agRkMoeG2y8ZmLxSIwTt0MfXdzaa8CbY3dRmmT/ng2OGGaNu\nB6RWhPiL6TKNEPiYKa1X6HEXPJ21OzQogMAJwFfWmjyjMO7pJlKM5dxVCKE7SDss\njooc+pjbConlJpBWeWH2RoyCN91lLcmbBK1iV4yTh5wRQj9Czo3RfL+VOQKBgQCo\nbH+MdhlUIUWtI6g+hHR57fd9nmcjGmLDptyXZ0HgcGnBML3UEntU5FmivQmpYZJd\n2DWCuGH/h1XxnKbGZUOeXm8hQB/fnspwMqx0lbhK8dxuU+5KMN6XLtHT9X0H1gnv\nwrGGPJl+UmnWXY1dJ8gCmYL0oEKfUsg18U0O9PIEtQKBgENCKhV5PBdGPkH8qj/8\nihO5+I7FPCrDdlo3nNNZn3T+KT1/KVpxdbdgDm7FLbvA7BAtnzawoqvPPKzSdI+e\n6WUz+DqZGW4g5+Y2Jpb3Ln1/pgqunLiZzhuqs2BAywXhaIkCB/zB1qPWeuZb99SD\n4fEldJmor57ANhK3UYBak9vs\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-paxgv@hackathon23-d8770.iam.gserviceaccount.com",
            "client_id": "101557305912647698067",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-paxgv%40hackathon23-d8770.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
        }
    }
}