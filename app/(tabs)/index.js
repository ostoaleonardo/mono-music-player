import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '@/constants'

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
})
