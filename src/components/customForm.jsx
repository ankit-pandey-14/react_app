/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/components/form.scss';
import { formValidation } from '../utilities/helper';
import CustomButton from './customButton';

export const DisplayFormField = ({ id, label, type, name, value, onChange, classes, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='mb-5 form-field'>
            {
                type === 'password'
                ? (
                    <div className={`field-input d-flex justify-between align-center field-password ${classes || ''}`}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name={name}
                            value={value}
                            id={id}
                            onChange={onChange}
                            required
                            autoComplete='off'
                        />
                        <label htmlFor={id}>{label}</label>
                        <span
                            className='fs-6 fw-medium cursor-pointer'
                            onClick={() => {
                                setShowPassword(!showPassword);
                            }}
                        >
                            { showPassword ? 'Hide' : 'Show' }
                        </span>
                    </div>
                )
                : (
                    <div className={`field-input ${classes || ''}`}>
                        <input
                            type={type || "text"}
                            name={name}
                            value={value}
                            id={id}
                            onChange={onChange}
                            required
                            autoComplete='off'
                        />
                        <label htmlFor={id}>{label}</label>
                    </div>
                )
            }

            {
                error
                ? (
                    <div className='fs-6 danger-text fw-medium'>
                        {
                            error?.map((err, index) => {
                                return (
                                    <div key={index}>{err}</div>
                                );
                            })
                        }
                    </div>
                )
                : null
            }
        </div>
    );
}
const CustomForm = ({classes, formFieldList=[], formButtonsList=[], buttonClass, afterSubmit}) => {
    const [formData, setFormData] = useState({
        data: {},
        errors: {},
    });

    const handleInputChange = (event, validations, dependency) => {
        const {name, value} = event.target;

        const currentErrors = formValidation(value, validations);

        if(dependency && Object.keys(dependency)?.length && formData.data?.[dependency?.field]) {
            if(dependency?.rule === 'same') {
                const dependencyError = [];
                if(value !== formData.data?.[dependency?.field]) {
                    dependencyError.push(dependency?.message);
                }
                setFormData({
                    data: {
                        ...formData?.data,
                        [name]: value,
                    },
                    errors: {
                        ...formData.errors,
                        [name]: dependencyError?.length ? dependencyError : currentErrors,
                    }
                })
            }
        } else {
            setFormData({
                data: {
                    ...formData?.data,
                    [name]: value,
                },
                errors: {
                    ...formData.errors,
                    [name]: currentErrors,
                }
            });
        }

    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        
        const submissionErrors = {};
        formFieldList?.forEach((field) => {
            const { name, dependency, validations } = field;
            const value = formData.data?.[name];

            if (dependency && Object.keys(dependency)?.length && formData.data?.[dependency?.field]) {
                if(dependency?.rule === 'same' && value !== formData.data?.[dependency?.field]) {
                    submissionErrors[name] = [dependency?.message];
                }
            } else {
                submissionErrors[name] = formValidation(value, validations);
            }
        })

        const anyError = Object.keys(submissionErrors).find((err) => submissionErrors?.[err].length > 0)

        if (anyError) {
            setFormData({
                ...formData,
                errors: {
                    ...submissionErrors,
                }
            })
        } else {
            if (afterSubmit && typeof afterSubmit === 'function') {
                afterSubmit(formData.data);
            }
        }
    }

    return (
        <form
            className={`custom-form ${classes}`}
            onSubmit={onSubmitForm}
            noValidate
        >
            {
                formFieldList.map((field) => {
                    return (
                        <DisplayFormField
                            key={field?.id}
                            id={field?.id}
                            label={field?.label}
                            type={field?.type}
                            name={field?.name}
                            value={formData?.data?.[field?.name] || ''}
                            onChange={(e) => {
                                handleInputChange(e, field?.validations, field?.dependency);
                            }}
                            classes={field?.classes}
                            error={formData.errors?.[field?.name]}
                        />
                    );
                })
            }

            <div className={buttonClass || ''}>
                {
                    formButtonsList.map((btn) => {
                        return (
                            <CustomButton
                                key={btn?.key}
                                title={btn?.title}
                                tooltip={btn?.title}
                                type={btn?.type}
                                htmlType={btn?.htmlType}
                                classes={btn?.classes}
                            />
                        );
                    })
                }
            </div>
        </form>
    );
}

export default CustomForm;