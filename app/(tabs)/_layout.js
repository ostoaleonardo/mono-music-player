import { Tabs } from 'expo-router'

export default function TabsLayout() {
    return (
        <Tabs>
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
