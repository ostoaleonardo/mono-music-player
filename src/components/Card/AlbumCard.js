import { Image, Pressable, StyleSheet } from 'react-native'
import { Typography } from '../Text'
import { COLORS } from '@/constants'

export function AlbumCard({ track }) {
    const { id, filename, artist, uri } = track

    return (
        <Pressable
            onPress={handlePlay}
            style={styles.container}
        >
            <Image
                source={{ uri }}
                style={styles.image}
            />
            <Typography numberOfLines={2}>
                {filename.split('.')[0]}
            </Typography>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        padding: 16,
        borderRadius: 16,
        backgroundColor: COLORS.foreground,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 16,
        backgroundColor: COLORS.text5,
    },
})
