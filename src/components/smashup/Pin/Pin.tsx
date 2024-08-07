import React, { MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Pin({
    children,
    className,
    onClick
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {
    return (
        <div
            className={twMerge(
                'bg-primary bg-opacity-20 px-2.5 py-2 text-primary font-medium text-base rounded-2xl',
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
