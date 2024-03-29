import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Typography } from '../Text'
import { useAudioController, usePlayingNow } from '@/hooks'
import { COLORS } from '@/constants'

export function TrackCard({ track }) {
    const { isPlaying, setIsPlaying, setPlayingNow } = usePlayingNow()
    const { playSound, pauseSound } = useAudioController()
    const { id, filename, artist, uri } = track

    const handlePlay = async () => {
        if (isPlaying) {
            await pauseSound()
        } else {
            await playSound(uri)
        }
        onSave()
        setIsPlaying(!isPlaying)
    }

    const onSave = () => {
        setPlayingNow({
            id,
            title: filename.split('.')[0],
            artist: artist || 'No artist',
            uri,
        })
    }

    return (
        <Pressable
            onPress={handlePlay}
            style={styles.container}
        >
            <Image
                source={{ uri }}
                style={styles.image}
            />
            <View style={styles.info}>
                <Typography numberOfLines={1}>
                    {filename.split('.')[0]}
                </Typography>
                <Typography
                    opacity={0.5}
                    numberOfLines={1}
                >
                    {artist || 'No artist'}
                </Typography>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        padding: 16,
        flexDirection: 'row',
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 8,
        backgroundColor: COLORS.text5,
    },
    info: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'center',
    },
})
