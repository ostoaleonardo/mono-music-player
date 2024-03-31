import { StyleSheet, View } from 'react-native'
import { router, usePathname } from 'expo-router'
import { MusicControllerBar } from './MusicControllerBar'
import { TabBarItem } from './TabBarItem'
import { COLORS, TABS } from '@/constants'

export function TabBar() {
    const pathname = usePathname()

    return (
        <View style={styles.container}>
            <MusicControllerBar />
            <View style={styles.tabsContainer}>
                {TABS.map((tab, index) => (
                    <TabBarItem
                        key={index}
                        icon={tab.icon}
                        title={tab.title}
                        isActive={pathname === tab.path}
                        onPress={() => router.push(tab.path)}
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
        borderTopWidth: 1,
        borderColor: COLORS.text5,
        justifyContent: 'space-between',
    },
})
