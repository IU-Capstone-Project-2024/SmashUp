'use client';
import Image from 'next/image';
import TrackItem from '@/components/TrackItem';
import PlayIcon from '@/components/icons/PlayIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import { useTranslations } from 'next-intl';
import { Mashup, MockMashup, MockPlaylist, Playlist } from '@/utils/types';
import { useState } from 'react';
import {
    useMashupCache,
    usePlaylistCache,
    useRepositoryGetMany,
    useRepositoryRequest,
    useRepositoryStateSet
} from '@/hooks/repositories';
import { playlistLike, usePlayerUtils } from '@/hooks/utils';

// TODO: think about name
export default function PlaylistPage({ params }: { params: { playlist_id: number } }) {
    const transl = useTranslations('pages.playlist');

    const [playlist, setPlaylist] = useState<Playlist>();
    const [mashups, setMashups] = useState<Mashup[]>();

    const playlistCache = usePlaylistCache();
    const mashupCache = useMashupCache();

    const playlistResponse = useRepositoryRequest(
        undefined,
        () => playlistCache.get(params.playlist_id),
        new MockPlaylist()
    );
    useRepositoryStateSet(playlistResponse, setPlaylist, () => new MockPlaylist());

    const mashupsResponse = useRepositoryGetMany(
        mashupCache,
        playlistResponse.promise.then((playlist) => (playlist ? playlist.mashups : []))
    );
    useRepositoryStateSet(mashupsResponse, setMashups, () =>
        playlist?.mashups.map(() => new MockMashup())
    );

    const playerUtils = usePlayerUtils();

    if (!playlist) {
        return;
    }

    return (
        <div className='flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={playlist.imageUrl + '_800x800.png'}
                    width={188}
                    height={188}
                    alt={playlist.name}
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-6'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>
                            {transl('playlist')}
                        </span>
                        <h1 className='font-bold text-4xl text-onSurface'>{playlist.name}</h1>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <PlayIcon
                            width={48}
                            height={48}
                            color='primary'
                            onClick={() => playerUtils.playPlaylist(playlistLike(playlist))}
                        />
                        {/* <HideIcon
                            width={26}
                            height={28}
                            color='onSurfaceVariant'
                            className='w-8 h-8'
                        /> */}
                        <ShareIcon
                            width={26}
                            height={22}
                            color='onSurfaceVariant'
                            className='w-8 h-8'
                        />
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
                            playlist={playlistLike(playlist)}
                            explicit={item.statuses.isExplicit()}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
