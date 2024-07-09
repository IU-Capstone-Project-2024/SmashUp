'use client';

import Image from 'next/image';
import favorites from '/public/icons/like.png';
import TrackItem from '@/components/TrackItem';
import PlayIcon from '@/components/icons/PlayIcon';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Mashup } from '@/utils/types';
import { useMashupCache } from '@/hooks/repositories';
import { useApi } from '@/hooks/api';

export default function Favorites() {
    const transl = useTranslations('pages.playlist');

    const [mashupIds, setMashupIds] = useState<number[]>();
    const [mashups, setMashups] = useState<Mashup[]>();

    const mashupCache = useMashupCache();
    const api = useApi();

    useEffect(() => {
        api.get('/mashup/get_all_likes', { id: 2 }).then((response) => {
            let ids: number[] = response.data.response;
            setMashupIds(ids);
            mashupCache.getMany(ids).then((mashups) => {
                setMashups(mashups);
            });
        });
    }, []);

    return (
        <div className='flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={favorites}
                    width={188}
                    height={188}
                    alt='dmhd6219'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-6'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>
                            {transl('playlist')}
                        </span>
                        <h1 className='font-bold text-4xl text-onSurface'>{transl('title')}</h1>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <PlayIcon width={48} height={48} color='primary' />
                    </div>
                </div>
            </div>

            {/* Мэшапы */}

            {mashups && mashups.length > 0 && (
                <div className='flex flex-col gap-1'>
                    {mashups.map((item, index) => (
                        <TrackItem
                            key={item.id}
                            index={index + 1}
                            {...item}
                            image={item.imageUrl + '_100x100.png'}
                            author={item.authors.join(', ')}
                            title={item.name}
                            mashup={item}
                            playlist={{ mashups: mashupIds as number[], link: '/favorites' }}
                            explicit={item.statuses.isExplicit()}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
