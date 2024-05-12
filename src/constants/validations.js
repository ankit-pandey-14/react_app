export const validationMessages = {
    requiredField: {
        required: true,
        message: 'This field is required.',
    },

    onlyAlbhabets: {
        pattern: /^(?!.*\s{2})[a-zA-Z]+(?: [a-zA-Z]+)*$/,
        message: 'Please enter only alphabets.',
    },

    alphNum_splChars: {
        pattern: /^[a-zA-Z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+$/,
        message: 'Please enter a valid username.',
    },

    email: {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Please enter a valid email.'
    },
    
    phone: {
        pattern: /^\+\d{2}\d{10}$/,
        message: 'Please enter a valid phone no.',
    }
}