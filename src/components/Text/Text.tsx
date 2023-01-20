import React from 'react';
import cn from 'classnames';

import './Text.scss';

const Text: React.FC<{ text: string; active: boolean }> = ({ text, active }) => (
    <p className={cn('text m-0', { text_active: active })}>{text}</p>
);

export default Text;
