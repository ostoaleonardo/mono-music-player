import { Tabs } from 'expo-router'
import { TabBar } from '@/components'
import { COLORS, FONTS } from '@/constants'

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTintColor: COLORS.text,

                headerStyle: {
                    backgroundColor: COLORS.background,
                },

                headerTitleStyle: {
                    fontSize: 12,
                    letterSpacing: 1,
                    fontFamily: FONTS.mono,
                    textTransform: 'uppercase',
                },
            }}

            tabBar={() => <TabBar />}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                }}
            />
            <Tabs.Screen
                name='tracks'
                options={{
                    title: 'Tracks',
                }}
            />
            <Tabs.Screen
                name='albums'
                options={{
                    title: 'Albums',
                }}
            />
        </Tabs>
    )
}
