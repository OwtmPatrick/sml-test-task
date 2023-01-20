import React, { useId } from 'react';
import cn from 'classnames';

import './Switch.scss';

type SwitchProps = {
    checked: boolean;
    onChange: () => void;
};

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
    const id = useId();

    return (
        <div className="switch">
            <input
                className="switch__input"
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <label className={cn('switch__label', { switch__label_checked: checked })} htmlFor={id}>
                <span className="switch__btn" />
            </label>
        </div>
    );
};

export default Switch;
