import { Pressable, StyleSheet, View } from 'react-native'
import { Typography } from '../Text'
import { COLORS } from '@/constants'

export function TabBarItem({ title, icon, onPress, isActive }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            <View style={isActive && styles.activeIcon}>
                {icon({
                    color: isActive
                        ? COLORS.primary
                        : COLORS.text
                })}
            </View>

            {isActive && (
                <Typography
                    uppercase
                    bold={isActive}
                    variant='caption'
                    color={isActive ? COLORS.primary : COLORS.text}
                >
                    {title}
                </Typography>
            )}
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
    activeIcon: {
        marginBottom: 8,
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: COLORS.primary15,
    },
})
