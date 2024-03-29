import { useContext } from 'react'
import { PlayingNowContext } from '@/context/PlayingNowContext'

export function usePlayingNow() {
    const {
        sound,
        isPlaying,
        playingNow,
        setSound,
        setIsPlaying,
        setPlayingNow
    } = useContext(PlayingNowContext)

    return {
        sound,
        isPlaying,
        playingNow,
        setSound,
        setPlayingNow,
        setIsPlaying,
    }
}
