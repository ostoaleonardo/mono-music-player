import { Image, StyleSheet, View } from 'react-native'
import { Music } from '@/icons'
import { COLORS } from '@/constants'

export function AlbumArt({ uri }) {
    return (
        uri ? (
            <Image
                source={{ uri }}
                style={styles.image}
            />
        ) : (
            <View style={styles.image}>
                <Music color={COLORS.text50} />
            </View>
        )
    )
}

const styles = StyleSheet.create({
    image: {
        width: 48,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.text5,
    },
})
