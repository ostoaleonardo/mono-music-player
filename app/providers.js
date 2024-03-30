import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PlayingNowProvider } from '@/context/PlayingNowContext'

export function Providers({ children }) {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PlayingNowProvider>
                {children}
            </PlayingNowProvider>
        </GestureHandlerRootView>
    )
}
