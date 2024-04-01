import React from 'react';
import { IconComponentProps } from '@/models/icons';

export default function HideIcon({ width, height, className }: IconComponentProps) {
    // w: 26, h: 28
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <path
                d='M12.5876 6.10659C13.0552 6.0349 13.5278 5.99924 14.0009 5.99992C18.2409 5.99992 22.2276 9.05326 24.5476 13.9999C24.1928 14.7527 23.792 15.483 23.3476 16.1866C23.2065 16.405 23.1323 16.6599 23.1342 16.9199C23.1372 17.2109 23.2353 17.4929 23.4135 17.723C23.5917 17.953 23.8403 18.1184 24.1214 18.1939C24.4024 18.2695 24.7004 18.251 24.9699 18.1414C25.2395 18.0317 25.4658 17.8369 25.6142 17.5866C26.2355 16.6105 26.7751 15.5848 27.2276 14.5199C27.2991 14.3536 27.336 14.1744 27.336 13.9933C27.336 13.8122 27.2991 13.633 27.2276 13.4666C24.5342 7.21325 19.4676 3.33326 14.0009 3.33326C13.3751 3.3301 12.7503 3.38365 12.1342 3.49326C11.9591 3.52302 11.7916 3.58698 11.6412 3.68149C11.4909 3.776 11.3606 3.8992 11.2578 4.04406C11.155 4.18892 11.0818 4.3526 11.0423 4.52576C11.0028 4.69892 10.9978 4.87816 11.0276 5.05326C11.0573 5.22835 11.1213 5.39587 11.2158 5.54625C11.3103 5.69662 11.4335 5.82691 11.5784 5.92968C11.7232 6.03244 11.8869 6.10566 12.0601 6.14517C12.2332 6.18468 12.4125 6.18969 12.5876 6.15992V6.10659ZM2.94757 1.05325C2.82325 0.928937 2.67566 0.830322 2.51323 0.763042C2.3508 0.695762 2.17671 0.661133 2.0009 0.661133C1.82509 0.661133 1.651 0.695762 1.48857 0.763042C1.32614 0.830322 1.17855 0.928937 1.05423 1.05325C0.80316 1.30433 0.662109 1.64485 0.662109 1.99992C0.662109 2.35499 0.80316 2.69552 1.05423 2.94659L5.18756 7.06659C3.30166 8.88196 1.80071 11.0586 0.774231 13.4666C0.700814 13.6348 0.662918 13.8164 0.662918 13.9999C0.662918 14.1835 0.700814 14.365 0.774231 14.5333C3.46756 20.7866 8.53423 24.6666 14.0009 24.6666C16.397 24.65 18.7366 23.9366 20.7342 22.6133L25.0542 26.9466C25.1782 27.0716 25.3257 27.1708 25.4881 27.2384C25.6506 27.3061 25.8249 27.341 26.0009 27.341C26.1769 27.341 26.3512 27.3061 26.5137 27.2384C26.6761 27.1708 26.8236 27.0716 26.9476 26.9466C27.0725 26.8226 27.1717 26.6752 27.2394 26.5127C27.3071 26.3502 27.342 26.1759 27.342 25.9999C27.342 25.8239 27.3071 25.6496 27.2394 25.4872C27.1717 25.3247 27.0725 25.1772 26.9476 25.0533L2.94757 1.05325ZM11.4276 13.3066L14.6942 16.5733C14.4689 16.6379 14.2353 16.6693 14.0009 16.6666C13.2937 16.6666 12.6154 16.3856 12.1153 15.8855C11.6152 15.3854 11.3342 14.7072 11.3342 13.9999C11.3315 13.7655 11.3629 13.5319 11.4276 13.3066ZM14.0009 21.9999C9.7609 21.9999 5.77423 18.9466 3.46757 13.9999C4.32902 12.0983 5.55166 10.382 7.06757 8.94659L9.42756 11.3333C8.87323 12.345 8.66188 13.5092 8.82524 14.6512C8.9886 15.7932 9.51785 16.8515 10.3336 17.6672C11.1493 18.483 12.2076 19.0122 13.3496 19.1756C14.4916 19.3389 15.6558 19.1276 16.6676 18.5733L18.7876 20.6666C17.3357 21.5211 15.6855 21.9808 14.0009 21.9999Z'
                fill='#EBEBEB'
            />
            <path
                d='M12.5876 6.10659C13.0552 6.0349 13.5278 5.99924 14.0009 5.99992C18.2409 5.99992 22.2276 9.05326 24.5476 13.9999C24.1928 14.7527 23.792 15.483 23.3476 16.1866C23.2065 16.405 23.1323 16.6599 23.1342 16.9199C23.1372 17.2109 23.2353 17.4929 23.4135 17.723C23.5917 17.953 23.8403 18.1184 24.1214 18.1939C24.4024 18.2695 24.7004 18.251 24.9699 18.1414C25.2395 18.0317 25.4658 17.8369 25.6142 17.5866C26.2355 16.6105 26.7751 15.5848 27.2276 14.5199C27.2991 14.3536 27.336 14.1744 27.336 13.9933C27.336 13.8122 27.2991 13.633 27.2276 13.4666C24.5342 7.21325 19.4676 3.33326 14.0009 3.33326C13.3751 3.3301 12.7503 3.38365 12.1342 3.49326C11.9591 3.52302 11.7916 3.58698 11.6412 3.68149C11.4909 3.776 11.3606 3.8992 11.2578 4.04406C11.155 4.18892 11.0818 4.3526 11.0423 4.52576C11.0028 4.69892 10.9978 4.87816 11.0276 5.05326C11.0573 5.22835 11.1213 5.39587 11.2158 5.54625C11.3103 5.69662 11.4335 5.82691 11.5784 5.92968C11.7232 6.03244 11.8869 6.10566 12.0601 6.14517C12.2332 6.18468 12.4125 6.18969 12.5876 6.15992V6.10659ZM2.94757 1.05325C2.82325 0.928937 2.67566 0.830322 2.51323 0.763042C2.3508 0.695762 2.17671 0.661133 2.0009 0.661133C1.82509 0.661133 1.651 0.695762 1.48857 0.763042C1.32614 0.830322 1.17855 0.928937 1.05423 1.05325C0.80316 1.30433 0.662109 1.64485 0.662109 1.99992C0.662109 2.35499 0.80316 2.69552 1.05423 2.94659L5.18756 7.06659C3.30166 8.88196 1.80071 11.0586 0.774231 13.4666C0.700814 13.6348 0.662918 13.8164 0.662918 13.9999C0.662918 14.1835 0.700814 14.365 0.774231 14.5333C3.46756 20.7866 8.53423 24.6666 14.0009 24.6666C16.397 24.65 18.7366 23.9366 20.7342 22.6133L25.0542 26.9466C25.1782 27.0716 25.3257 27.1708 25.4881 27.2384C25.6506 27.3061 25.8249 27.341 26.0009 27.341C26.1769 27.341 26.3512 27.3061 26.5137 27.2384C26.6761 27.1708 26.8236 27.0716 26.9476 26.9466C27.0725 26.8226 27.1717 26.6752 27.2394 26.5127C27.3071 26.3502 27.342 26.1759 27.342 25.9999C27.342 25.8239 27.3071 25.6496 27.2394 25.4872C27.1717 25.3247 27.0725 25.1772 26.9476 25.0533L2.94757 1.05325ZM11.4276 13.3066L14.6942 16.5733C14.4689 16.6379 14.2353 16.6693 14.0009 16.6666C13.2937 16.6666 12.6154 16.3856 12.1153 15.8855C11.6152 15.3854 11.3342 14.7072 11.3342 13.9999C11.3315 13.7655 11.3629 13.5319 11.4276 13.3066ZM14.0009 21.9999C9.7609 21.9999 5.77423 18.9466 3.46757 13.9999C4.32902 12.0983 5.55166 10.382 7.06757 8.94659L9.42756 11.3333C8.87323 12.345 8.66188 13.5092 8.82524 14.6512C8.9886 15.7932 9.51785 16.8515 10.3336 17.6672C11.1493 18.483 12.2076 19.0122 13.3496 19.1756C14.4916 19.3389 15.6558 19.1276 16.6676 18.5733L18.7876 20.6666C17.3357 21.5211 15.6855 21.9808 14.0009 21.9999Z'
                fill='#020202'
                fillOpacity='0.2'
            />
        </svg>
    );
}