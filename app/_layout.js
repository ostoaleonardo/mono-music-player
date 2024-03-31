import { useCallback, useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router/stack'
import * as SplashScreen from 'expo-splash-screen'
import { Providers } from './providers'

export default function AppLayout() {
    const [isReady, setIsReady] = useState(false)
    const [fontsLoaded, fontError] = useFonts({
        'Roboto-Mono': require('../assets/fonts/RobotoMono.ttf'),
    })

    useEffect(() => {
        const prepare = async () => {
            await SplashScreen.preventAutoHideAsync()
            setIsReady(true)
        }

        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync()
        }
    }, [isReady])

    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <Providers>
            <Stack onLayout={onLayoutRootView}>
                <Stack.Screen
                    name='(tabs)'
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='modal'
                    options={{
                        headerShown: false,
                        presentation: 'transparentModal',
                    }}
                />
            </Stack>
        </Providers>
    );
}
