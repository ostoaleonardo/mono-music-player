import { createContext, useState } from 'react'

export const PlayingNowContext = createContext()

export function PlayingNowProvider({ children }) {
    const [sound, setSound] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playingNow, setPlayingNow] = useState({
        id: null,
        title: 'Play a track',
        artist: 'No artist',
        uri: null,
    })

    return (
        <PlayingNowContext.Provider
            value={{
                sound,
                isPlaying,
                playingNow,
                setSound,
                setIsPlaying,
                setPlayingNow
            }}
        >
            {children}
        </PlayingNowContext.Provider>
    )
}
