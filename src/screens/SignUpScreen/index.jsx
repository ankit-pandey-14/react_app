import { useNavigate } from "react-router-dom";
import CustomForm from "../../components/customForm";
import CustomHeader from "../../components/customHeader";
import { validationMessages } from "../../constants/validations";
import { LOGIN } from "../../constants/routes";

const signupFieldsList = () => [
    {
        id: 'name',
        label: 'NAME',
        type: 'text',
        name: 'name',
        validations: [
            validationMessages.requiredField,
            validationMessages.onlyAlbhabets,
        ],
        classes: ''
    },
    {
        id: 'username',
        label: 'USERNAME',
        type: 'text',
        name: 'username',
        validations: [
            validationMessages.requiredField,
            validationMessages.alphNum_splChars,
        ],
        classes: ''
    },
    {
        id: 'email',
        label: 'EMAIL',
        type: 'text',
        name: 'email',
        validations: [
            validationMessages.requiredField,
            validationMessages.email
        ],
        classes: ''
    },
    {
        id: 'phone',
        label: 'PHONE NO. ( with country code )',
        type: 'text',
        name: 'phone',
        validations: [
            validationMessages.requiredField,
            validationMessages.phone,
            {
                max: 13,
                message: 'Phone No. with country code cannot be more than 13 characters',
            },
            {
                min: 13,
                message: 'Phone No. with country code cannot be less than 13 characters',
            }
        ],
        classes: ''
    },
    {
        id: 'password',
        label: 'NEW PASSWORD',
        type: 'password',
        name: 'password',
        validations: [
            validationMessages.requiredField,
            {
                ...validationMessages.alphNum_splChars,
                message: 'Please enter a valid password.',
            },
        ],
        classes: ''
    },
    {
        id: 'confirmPassword',
        label: 'CONFIRM PASSWORD',
        type: 'password',
        name: 'confirmPassword',
        dependency: {
            field: 'password',
            rule: 'same',
            message: 'Confirm Password should match password.',
        },
        validations: [
            validationMessages.requiredField,
            {
                ...validationMessages.alphNum_splChars,
                message: 'Please enter a valid password.',
            },
        ],
        classes: ''
    },
];

const signupButtonsList = () => [
    {
        title: 'SIGN UP',
        key: 'signup',
        htmlType: 'submit',
        type: 'primary',
        classes: 'cursor-pointer signup-btn'
    }
];

const SignUpScreen = () => {
    const navigate = useNavigate();

    return (
        <>
            <CustomHeader title={'Create new Account'} />

            <CustomForm
                classes={'py-5 px-5 mt-5 mx-auto w-100 signup-form d-flex gap-4 justify-between flex-wrap'}
                formFieldList={signupFieldsList()}
                formButtonsList={signupButtonsList()}
                buttonClass={'d-flex justify-end w-100'}
                afterSubmit={(formValues) => {
                    console.log(formValues)
                    alert("Account Created Successfully");
                    navigate(`/${LOGIN}`);
                }}
            />
        </>
    );
};

export default SignUpScreen