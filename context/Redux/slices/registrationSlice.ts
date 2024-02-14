import { RegistrationState } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: RegistrationState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",

    errors: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    },
};

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        updateField: (
            state,
            action: PayloadAction<{
                field: keyof RegistrationState;
                value: string | boolean;
            }>
        ) => {
            const { field, value } = action.payload;
            (state as any)[field] = value;
        }
        // Add other actions as needed
    },
});

export const { updateField } = registrationSlice.actions;
export default registrationSlice.reducer;