'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import PasswordIcon from '@/components/icons/PasswordIcon';
import HideIcon from '@/components/icons/HideButton';
import ShowIcon from '@/components/icons/ShowButton';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isFocused?: boolean;
    isError?: boolean;
    showPassword?: boolean;
    showPasswordButton?: boolean;
    showForgotButton?: boolean;
    showHelper?: boolean;
    heading?: string;
}

export default function SmashUpPassword({
    className,
    disabled,
    isFocused,
    isError,
    value,
    showPassword,
    showPasswordButton,
    showForgotButton,
    showHelper,
    heading,
    defaultValue,
    onChange,
    ...props
}: PasswordProps) {
    const [focus, setFocus] = useState<boolean>(isFocused ? isFocused : false);
    const [error] = useState<boolean>(isError ? isError : false);

    const [showPasswordValue, setShowPasswordValue] = useState<boolean>(
        showPassword ? showPassword : false
    );

    const transl = useTranslations('components.smashup.password');
    return (
        <div className={twMerge('w-full flex flex-col gap-2.5', className)}>
            <div className='w-full flex flex-row justify-between'>
                <span className='font-medium text-base text-onSurfaceVariant'>
                    {heading ? heading : transl('password')}
                </span>
                {showForgotButton && (
                    <Link className='font-medium text-base text-primary' href='/restore'>
                        {transl('forgot')}
                    </Link>
                )}
            </div>

            <div className='w-full flex justify-start items-center relative'>
                <input
                    onFocus={() => {
                        if (isFocused === undefined) setFocus(true);
                    }}
                    onBlur={() => {
                        if (isFocused === undefined) setFocus(false);
                    }}
                    className={twMerge(
                        'w-full bg-surfaceVariant py-[17.5px] pl-[25px] rounded-2xl z-10',
                        'font-normal text-base text-onSurfaceVariant placeholder-onSurfaceVariant',
                        'pl-14',
                        focus ? 'border-none outline outline-2 ring-0 outline-primary' : '',
                        error ? 'border-none outline outline-2 ring-0 outline-red-600' : ''
                    )}
                    type={!showPasswordValue ? 'password' : 'text'}
                    value={value}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    onChange={onChange}
                    {...props}
                />
                <div className='absolute w-full px-6 flex flex-row justify-between items-center'>
                    <PasswordIcon width={20} height={17} className='z-20' />
                    {!disabled && showPasswordButton && (
                        <div
                            onClick={() => {
                                setShowPasswordValue(!showPasswordValue);
                            }}
                            className='z-20 cursor-pointer'
                        >
                            {showPasswordValue ? (
                                <HideIcon width={28} height={28} />
                            ) : (
                                <ShowIcon width={28} height={26} />
                            )}
                        </div>
                    )}
                </div>
            </div>

            {showHelper && (
                <span className='w-full font-normal text-xs text-onSurfaceVariant text-left'>
                    {transl('rules')}
                </span>
            )}
        </div>
    );
}
