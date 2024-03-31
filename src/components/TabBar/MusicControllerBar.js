import { Image, Pressable, StyleSheet, View } from 'react-native'
import { router } from 'expo-router'
import { Typography } from '../Text'
import { useAudioController, usePlayingNow } from '@/hooks'
import { COLORS } from '@/constants'

export function MusicControllerBar() {
    const { playingNow, isPlaying, setIsPlaying } = usePlayingNow()
    const { playSound, pauseSound } = useAudioController()
    const { title, artist, album, uri } = playingNow

    const handlePlayPause = () => {
        if (isPlaying) {
            pauseSound()
        } else {
            playSound(uri)
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <Pressable
            style={styles.container}
            onPress={() => router.push('/modal')}
        >
            <Image
                source={{ uri: album }}
                style={styles.album}
            />
            <View style={styles.info}>
                <Typography numberOfLines={1}>
                    {title}
                </Typography>
                <Typography
                    opacity={0.5}
                    numberOfLines={1}
                >
                    {artist}
                </Typography>
            </View>
            <Pressable
                style={styles.playButton}
                onPress={handlePlayPause}
            >
                <Typography>
                    {isPlaying ? '||' : '▶'}
                </Typography>
            </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
    },
    album: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: COLORS.text5,
    },
    info: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'center',
    },
    playButton: {
        width: 48,
        height: 48,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
