import React, { useState } from 'react';
import cn from 'classnames';
import closeIcon from '../../assets/cross.svg';

import './Hint.scss';

const Hint: React.FC<{ text: string }> = ({ text }) => {
    const [isShowText, setShowText] = useState<boolean>(false);

    const toggleShowText = () => setShowText(!isShowText);

    return (
        <div className="hint">
            <button
                type="button"
                className={cn('hint__btn', { hint__btn_close: isShowText })}
                onClick={toggleShowText}
            >
                {isShowText ? (
                    <img src={closeIcon} alt="cross icon" className="hint__close-icon" />
                ) : (
                    'i'
                )}
            </button>

            <div className={cn('hint__text p-3', { hint__text_visible: isShowText })}>{text}</div>
        </div>
    );
};

export default Hint;
