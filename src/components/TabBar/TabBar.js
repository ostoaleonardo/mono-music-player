import { StyleSheet, View } from 'react-native'
import { router, usePathname } from 'expo-router'
import { MusicControllerBar } from './MusicControllerBar'
import { TabBarItem } from './TabBarItem'
import { COLORS } from '@/constants'

const TABS = [
    { title: 'Home', path: '/' },
    { title: 'Tracks', path: '/tracks' },
    { title: 'Albums', path: '/albums' },
]

export function TabBar() {
    const pathname = usePathname()

    return (
        <View style={styles.container}>
            <MusicControllerBar />
            <View style={styles.tabsContainer}>
                {TABS.map((tab, index) => (
                    <TabBarItem
                        key={index}
                        title={tab.title}
                        onPress={() => router.push(tab.path)}
                        isActive={pathname === tab.path}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.foreground,
    },
    tabsContainer: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.text5,
        justifyContent: 'space-between',
    },
})
