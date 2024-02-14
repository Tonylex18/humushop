import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

interface userForm {
    name: String,
    email: String,
    password: String,
    password_confirmation: String,
}

export async function createUser(userData: userForm) {
    try {
        const response = await axios.post(
            `${apiURL}/auth/register`,
            userData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });


        const data = response.data;

        return data;

    } catch (error: any) {
        console.error('Error during user creation:', error.message || 'Something went wrong!');
        throw new Error(error.message || 'Something went wrong!');
    }
}