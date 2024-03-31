import { Audio } from 'expo-av'
import { usePlayingNow } from './usePlayingNow'

export function useAudioController() {
    const { sound, setSound, playingNow } = usePlayingNow()

    const loadSound = async (uri) => {
        const { sound } = await Audio.Sound.createAsync({ uri })
        await sound.playAsync()
        setSound(sound)
    }

    const playSound = async (uri) => {
        if (sound) {
            if (playingNow.uri === uri) {
                await sound.playAsync()
            } else {
                await stopSound()
                await loadSound(uri)
            }
        } else {
            await loadSound(uri)
        }
    }

    const pauseSound = async () => {
        await sound.pauseAsync()
    }

    const stopSound = async () => {
        await sound.unloadAsync()
        setSound(null)
    }

    const replaySound = async () => {
        await sound.replayAsync()
    }

    return {
        playSound,
        pauseSound,
        stopSound,
        replaySound,
    }
}
