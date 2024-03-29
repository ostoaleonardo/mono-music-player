import { Pressable, StyleSheet } from 'react-native'
import { Typography } from '../Text'
import { COLORS } from '@/constants'

export function TabBarItem({ title, onPress, isActive }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            <Typography
                uppercase
                bold={isActive}
                variant='caption'
                color={isActive ? COLORS.primary : COLORS.text}
            >
                {title}
            </Typography>
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
})
