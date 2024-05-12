/* eslint-disable react/prop-types */
import '../styles/components/button.scss';

import { Link } from 'react-router-dom';

const buttonStyle = {
    primary: 'primary-button',
}

const CustomButton = ({title, urlButton, type, htmlType, url, onClick, target, tooltip, disabled, classes}) => {
    return (
        <>
            {
                urlButton
                ? (
                    <Link
                        className={`d-flex custom-button fw-medium ls-2 ${type ? buttonStyle[type] : ''} ${classes || ''}`}
                        onClick={
                            disabled
                            ? () => {}
                            : onClick
                        }
                        to={url || ''}
                        target={target}
                        rel='noopener noreferrer'
                        title={tooltip}
                    >
                        {title}
                    </Link>
                )
                : (
                    <button
                        className={`d-flex custom-button fw-medium ls-2 ${type ? buttonStyle[type] : ''} ${classes || ''}`}
                        type={htmlType}
                        onClick={onClick}
                        disabled={disabled}
                        title={tooltip}
                    >
                        {title}
                    </button>
                )
            }
        
        </>
    );
}

export default CustomButton;