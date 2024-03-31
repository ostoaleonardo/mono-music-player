import { StyleSheet, View } from 'react-native'
import { Typography } from '@/components/Text'
import { COLORS } from '@/constants'

export function RecentlyArtist() {
    return (
        <View style={styles.container}>
            <View style={styles.image} />
            <Typography>
                Artist name
            </Typography>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 160,
        aspectRatio: 1,
        borderRadius: 80,
        backgroundColor: COLORS.text5,
    },
})
