import { createContext, useState } from 'react'

export const PlayingNowContext = createContext()

export function PlayingNowProvider({ children }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [playingNow, setPlayingNow] = useState({
        id: null,
        title: 'Play a track',
        artist: 'No artist',
    })

    return (
        <PlayingNowContext.Provider
            value={{
                isPlaying,
                playingNow,
                setIsPlaying,
                setPlayingNow
            }}
        >
            {children}
        </PlayingNowContext.Provider>
    )
}
