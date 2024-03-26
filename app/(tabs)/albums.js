import { StyleSheet, View } from 'react-native'
import { COLORS } from '@/constants'

export default function Albums() {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
})
