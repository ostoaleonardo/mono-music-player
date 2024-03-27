import { Pressable, StyleSheet, Text } from 'react-native'
import { COLORS, FONTS } from '@/constants'

export function TabBarItem({ title, onPress, isActive }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            <Text style={[
                styles.label,
                isActive && styles.labelActive,
            ]}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 12,
        color: COLORS.text,
        textAlign: 'center',
        fontFamily: FONTS.mono,
        textTransform: 'uppercase',
    },
    labelActive: {
        fontWeight: 'bold',
        color: COLORS.primary,
    },
})
