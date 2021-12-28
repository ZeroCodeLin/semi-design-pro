import React, { useState } from 'react';
import { Button } from '@douyinfe/semi-ui';
import { IconMoon, IconSun } from "@douyinfe/semi-icons"

export const SwitchMode = () => {
    const [type, setType] = useState<string>('dark')

    const switchMode = () => {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            setType('light')
            body.removeAttribute('theme-mode');
        } else {
            setType('dark')
            body.setAttribute('theme-mode', 'dark');
        }
    }

    return (
        <Button
            theme="borderless"
            icon={type === 'dark' ? <IconSun size="large" /> : <IconMoon size="large" />}
            style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
            }}
            onClick={switchMode}
        />
    );
}
