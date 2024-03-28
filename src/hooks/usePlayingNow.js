import { useContext } from 'react'
import { PlayingNowContext } from '@/context/PlayingNowContext'

export function usePlayingNow() {
    const {
        isPlaying,
        playingNow,
        setIsPlaying,
        setPlayingNow
    } = useContext(PlayingNowContext)

    return {
        isPlaying,
        playingNow,
        setPlayingNow,
        setIsPlaying,
    }
}
