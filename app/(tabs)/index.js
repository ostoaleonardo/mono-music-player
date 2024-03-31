import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { RecentlyArtist, RecentlyTrack, Scroll, Section } from '@/components'
import { COLORS } from '@/constants'

export default function Home() {
    return (
        <View style={styles.container}>
            <Scroll
                contentStyle={styles.scrollContainer}
            >
                <Section
                    title='Recently played'
                    containerStyle={{ gap: 24 }}
                >
                    <Scroll
                        horizontal
                        contentStyle={styles.sectionContainer}
                    >
                        <RecentlyTrack />
                        <RecentlyTrack />
                        <RecentlyTrack />
                    </Scroll>
                </Section>
                <Section
                    title='Recent artists'
                    containerStyle={{ gap: 24 }}
                >
                    <Scroll
                        horizontal
                        contentStyle={styles.sectionContainer}
                    >
                        <RecentlyArtist />
                        <RecentlyArtist />
                        <RecentlyArtist />
                    </Scroll>
                </Section>
            </Scroll>
            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContainer: {
        gap: 40,
        paddingVertical: 24,
    },
    sectionContainer: {
        gap: 16,
        flexDirection: 'row',
        paddingHorizontal: 24,
    },
})
