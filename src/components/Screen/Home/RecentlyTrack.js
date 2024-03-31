import { StyleSheet, View } from 'react-native'
import { Typography } from '@/components/Text'
import { COLORS } from '@/constants'

export function RecentlyTrack() {
    return (
        <View style={styles.container}>
            <View style={styles.image} />
            <View style={styles.info}>
                <Typography>
                    Track name
                </Typography>
                <Typography opacity={0.5}>
                    Artist name
                </Typography>
            </View>
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
        borderRadius: 16,
        backgroundColor: COLORS.text5,
    },
    info: {
        width: '100%',
    },
})
