import React from 'react';
import { MdBookmarkBorder } from 'react-icons/md';
import './Button.css';

interface ButtonProps {
    text: string;
    icon?: boolean;
    disabled?: boolean;
    theme: 'primary' | 'secondary' | 'hoverPrimary' | 'hoverSecondary';
    caret?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text,
    icon,
    disabled = false,
    theme,
    caret,
}) => {
    const className = `button ${theme} ${disabled ? 'disabled' : ''}`;
    return (
        <button className={className} disabled={disabled}>
            <div className="button-content">
                {icon && <MdBookmarkBorder />}   
                {text}
                {caret && <span>&gt;</span> }
            </div>
        </button>
    );
};

export default Button;