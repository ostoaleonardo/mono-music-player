import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS } from '@/constants'

export function TrackCard({ track }) {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: track.uri,
                }}
                style={styles.image}
            />
            <Text style={styles.title}>
                {track.filename.split('.')[0]}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
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
    title: {
        fontSize: 16,
        marginTop: 10,
        color: COLORS.text,
        fontFamily: FONTS.mono,
    },
})
