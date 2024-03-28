import { PlayingNowProvider } from '@/context/PlayingNowContext'

export function Providers({ children }) {
    return (
        <PlayingNowProvider>
            {children}
        </PlayingNowProvider>
    )
}
