import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS } from '@/constants'

export function MusicControllerBar() {
    return (
        <View style={styles.container}>
            {/* <Image
                source={''}
                style={styles.album}
            /> */}
            <View style={styles.info}>
                <Text
                    numberOfLines={1}
                    style={styles.title}
                >
                    Track Title
                </Text>
                <Text
                    numberOfLines={1}
                    style={styles.artist}
                >
                    Artist Name
                </Text>
            </View>
            <Text style={styles.artist}>
                v
            </Text>
        </View>
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
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        fontSize: 14,
        color: COLORS.text,
        fontFamily: FONTS.mono,
    },
    artist: {
        fontSize: 12,
        color: COLORS.text,
        fontFamily: FONTS.mono,
    },
})
