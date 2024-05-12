import { useNavigate } from "react-router-dom";
import CustomForm from "../../components/customForm";
import CustomHeader from "../../components/customHeader";
import { validationMessages } from "../../constants/validations";
import { SIGNUP } from "../../constants/routes";

const loginFieldsList = () => [
    {
        id: 'username',
        label: 'Username',
        type: 'text',
        name: 'username',
        validations: [
            validationMessages.requiredField,
            validationMessages.alphNum_splChars,
        ],
        classes: ''
    },
    {
        id: 'password',
        label: 'Password',
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
];

const loginButtonsList = () => [
    {
        title: 'Login',
        key: 'login',
        htmlType: 'submit',
        type: 'primary',
        classes: 'cursor-pointer mx-auto'
    }
];

const LoginScreen = () => {
    const navigate = useNavigate();

    return (
        <>
            <CustomHeader
                title={'Login'}
                subTitle={'Sign In to Continue'}
            />

            <CustomForm
                classes={'py-5 px-5 mt-5 mx-auto w-100 login-form'}
                formFieldList={loginFieldsList()}
                formButtonsList={loginButtonsList()}
                afterSubmit={() => {
                    alert("You have logged in");
                }}
            />

            <div className="fw-medium text-center">
                Don&apos;t have Account ?
                {" "}
                <span
                    className="text-underline cursor-pointer"
                    onClick={() => {
                        navigate(`/${SIGNUP}`)
                    }}
                >
                    SignUp
                </span>
            </div>
        </>
    );
};

export default LoginScreen