import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

interface loginForm {
    email: String,
    password: String,
}

export async function loginAuth(formData: loginForm) {
    try {
        const response = await axios.post(
            `${apiURL}/auth/login`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const data = response.data;

        return data;
        
    } catch (error: any) {
        console.error('Error during login:', error.message || 'Something went wrong!');
        throw new Error(error.message || 'Something went wrong!');
    }
}
