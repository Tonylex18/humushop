export interface RegistrationState {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;

    errors: {
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }
}