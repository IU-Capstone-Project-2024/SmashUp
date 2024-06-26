'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SettingsIcon from '@/components/icons/SettingsIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import TrackItem from '@/components/TrackItem';
import Pin from '@/components/smashup/Pin/Pin';
import SmashUpButton from '@/components/smashup/Button/Button';
import Card from '@/components/Card';
import { useTranslations } from 'next-intl';
import { Mashup, MockMashup, MockPlaylist, MockUser, Playlist, User } from '@/utils/types';
import Link from 'next/link';
import {
    useMashupCache,
    usePlaylistCache,
    useRepositoryGetMany,
    useRepositoryRequest,
    useRepositoryStateSet,
    useUserCache
} from '@/hooks/repositories';

export default function Profile({ params }: { params: { username: string } }) {
    const transl = useTranslations('pages.profile');

    const [user, setUser] = useState<User>();
    const [mashups, setMashups] = useState<Mashup[]>();
    const [playlists, setPlaylists] = useState<Playlist[]>();

    const userCache = useUserCache();
    const mashupCache = useMashupCache();
    const playlistCache = usePlaylistCache();

    const userResponse = useRepositoryRequest(new MockUser(), () =>
        userCache.getByUsername(decodeURI(params.username))
    );
    useRepositoryStateSet(userResponse, setUser, () => new MockUser());

    const mashupsResponse = useRepositoryGetMany(
        mashupCache,
        userResponse.promise.then((user) => user.mashups)
    );
    useRepositoryStateSet(mashupsResponse, setMashups, () =>
        user?.mashups.map(() => new MockMashup())
    );

    const playlistsResponse = useRepositoryGetMany(
        playlistCache,
        userResponse.promise.then((user) => user.playlists)
    );
    useRepositoryStateSet(playlistsResponse, setPlaylists, () =>
        user?.mashups.map(() => new MockPlaylist())
    );

    if (!user) {
        return <></>;
    }

    const lastMashup =
        mashups && mashups.length > 0 ? mashups[mashups.length - 1] : new MockMashup();

    return (
        <div className='flex flex-col gap-4'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full p-4 px-6 py-6 gap-12 rounded-tl-[120px] rounded-bl-[120px] rounded-r-4xl'>
                <Image
                    width={800}
                    height={800}
                    src={'https://api.smashup.ru/uploads/user/' + user.imageUrl + '_800x800.png'}
                    alt={user.username}
                    className='w-[200px] h-[200px] rounded-full'
                />

                <div className='flex flex-col justify-center gap-4'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>
                            {transl('title')}
                        </span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-6'>
                                <h2 className='font-bold text-3xl'>{user.username}</h2>
                                <div className='flex flex-row gap-4 items-center'>
                                    <Pin>15 {transl('badges.subscriptions')}</Pin>
                                    <Pin>5 {transl('badges.subscribers')}</Pin>
                                    <Pin>2 {transl('badges.playlists')}</Pin>
                                </div>
                            </div>

                            <div className='flex flex-row gap-4 items-center'>
                                <SmashUpButton className='w-[224px] h-[48px]'>
                                    {transl('upload')}
                                </SmashUpButton>
                                <Link href='/profile/settings'>
                                    <SettingsIcon width={28} height={28} color='onSurfaceVariant' />
                                </Link>
                                <ShareIcon width={26} height={22} color='onSurfaceVariant' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {mashups && mashups.length > 0 && (
                <>
                    {/* Семые популярные мэшапы */}
                    <div className='flex flex-row gap-6 flex-wrap w-full'>
                        {/*Популярные треки*/}
                        <div className='flex flex-col gap-4 w-1/2'>
                            <div className='flex flex-row justify-between items-center'>
                                <h2 className='font-semibold text-2xl'>{transl('popular')}</h2>
                                <span className='font-bold text-base text-onSurfaceVariant text-opacity-50 uppercase'>
                                    {transl('show-all')}
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                {[...mashups]
                                    .sort((i) => i.streams)
                                    .slice(0, 5)
                                    .map((item, index) => (
                                        <TrackItem
                                            key={item.id}
                                            index={index + 1}
                                            {...item}
                                            image={
                                                'https://api.smashup.ru/uploads/mashup/' +
                                                item.imageUrl +
                                                '_100x100.png'
                                            }
                                            author={item.authors.join(', ')}
                                            title={item.name}
                                            mashup={item}
                                            explicit={item.statuses.isExplicit()}
                                        />
                                    ))}
                            </div>
                        </div>

                        {/*Недавний релиз*/}
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-semibold text-2xl'>{transl('new-release')}</h2>
                            <Card
                                id={0}
                                title={lastMashup.name}
                                author={lastMashup.authors.join(', ')}
                                image={
                                    'https://api.smashup.ru/uploads/mashup/' +
                                    lastMashup.imageUrl +
                                    '_400x400.png'
                                }
                            />
                        </div>
                    </div>
                </>
            )}

            {/* TODO: fix playlists overflow */}
            {playlists && playlists.length > 0 && (
                <>
                    {/* Плейлисты */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row justify-between items-center'>
                            <h2 className='font-semibold text-2xl'>{transl('playlists')}</h2>
                        </div>
                        <div className='overflow-visible flex flex-row gap-7'>
                            {playlists.map((item) => (
                                <Card
                                    key={item.id}
                                    showVisibleButton={false}
                                    {...item}
                                    image={
                                        'https://api.smashup.ru/uploads/playlist/' +
                                        item.imageUrl +
                                        '_400x400.png'
                                    }
                                    author={item.authors.join(', ')}
                                    title={item.name}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
