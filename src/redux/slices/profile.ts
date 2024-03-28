import { type RootState } from '@redux/configure-store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProfileState = {
    isAlert: boolean;
    isSubmitDisabled: boolean;
    required: boolean;
};

const initialState: ProfileState = {
    isAlert: false,
    isSubmitDisabled: true,
    required: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        closeProfileAlert: (state) => {
            state.isAlert = false;
        },
        setProfileRequiredTrue: (state) => {
            state.required = true;
        },
        setProfileRequiredFalse: (state) => {
            state.required = false;
        },
        disableProfileSubmit: (state) => {
            state.isSubmitDisabled = true;
        },
        enableProfileSubmit: (state) => {
            state.isSubmitDisabled = false;
        },
        setProfileSubmit: (state, action: PayloadAction<boolean>) => {
            state.isSubmitDisabled = action.payload;
        },
        setProfileStateAfterSuccess: (state) => {
            state.isAlert = true;
            state.required = false;
            state.isSubmitDisabled = true;
        },
    },
});

export const {
    setProfileStateAfterSuccess,
    closeProfileAlert,
    disableProfileSubmit,
    enableProfileSubmit,
    setProfileRequiredFalse,
    setProfileRequiredTrue,
    setProfileSubmit,
} = profileSlice.actions;
export const selectProfileIsAlert = (state: RootState) => state.profile.isAlert;
export const selectProfileRequired = (state: RootState) => state.profile.required;
export const selectProfileIsSubmitDisabled = (state: RootState) => state.profile.isSubmitDisabled;

export const profileReducer = profileSlice.reducer;
