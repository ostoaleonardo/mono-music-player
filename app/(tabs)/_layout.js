import { COLORS, FONTS } from '@/constants'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTintColor: COLORS.text,
                tabBarActiveTintColor: COLORS.primary,

                headerStyle: {
                    backgroundColor: COLORS.background,
                },

                headerTitleStyle: {
                    fontSize: 12,
                    letterSpacing: 1,
                    fontFamily: FONTS.mono,
                    textTransform: 'uppercase',
                },

                tabBarStyle: {
                    backgroundColor: COLORS.background,
                },

                tabBarLabelStyle: {
                    fontFamily: FONTS.mono,
                },
            }}
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
