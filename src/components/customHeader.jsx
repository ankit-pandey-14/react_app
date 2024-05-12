/* eslint-disable react/prop-types */
import '../styles/components/header.css';

const CustomHeader = ({ title, subTitle }) => {
    return (
        <header className="text-center py-4 green-bg white-text">
            <div className='fs-1 fw-medium ls-2'>{title}</div>
            {
                subTitle
                ? <div className='fs-5 ls-1'>{subTitle}</div>
                : null
            }
        </header>
    );
};

export default CustomHeader;