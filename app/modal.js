import { StyleSheet, Image, View } from 'react-native'
import { router } from 'expo-router'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { IconButton, Typography } from '@/components'
import { Next, Pause, Play, Random, Repeat } from '@/icons'
import { usePlayingNow } from '@/hooks'
import { COLORS } from '@/constants'

export default function Modal() {
    const { isPlaying, playingNow } = usePlayingNow()
    const { title, artist, album } = playingNow

    return (
        <BottomSheet
            enablePanDownToClose
            snapPoints={['95%']}
            onClose={() => router.back()}
            backgroundStyle={{ backgroundColor: COLORS.foreground }}
            handleIndicatorStyle={{ backgroundColor: COLORS.text15 }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Typography
                    uppercase
                    opacity={0.5}
                    variant='caption'
                    textAlign='center'
                >
                    Playing now
                </Typography>
                <Image
                    source={{ uri: album }}
                    style={styles.album}
                />
                <Typography
                    variant='title'
                    textAlign='center'
                    numberOfLines={1}
                >
                    {title}
                </Typography>
                <Typography
                    opacity={0.5}
                    variant='subtitle'
                    textAlign='center'
                    numberOfLines={1}
                >
                    {artist}
                </Typography>
                <View style={styles.controls}>
                    <IconButton
                        size='lg'
                        variant='light'
                    >
                        <Random color={COLORS.text} />
                    </IconButton>
                    <IconButton
                        size='lg'
                        variant='light'
                    >
                        <Next
                            rotation={180}
                            color={COLORS.text}
                        />
                    </IconButton>
                    <IconButton
                        size='lg'
                    >
                        {isPlaying ? (
                            <Pause color={COLORS.text} />
                        ) : (
                            <Play color={COLORS.text} />
                        )}
                    </IconButton>
                    <IconButton
                        size='lg'
                        variant='light'
                    >
                        <Next color={COLORS.text} />
                    </IconButton>
                    <IconButton
                        size='lg'
                        variant='light'
                    >
                        <Repeat color={COLORS.text} />
                    </IconButton>
                </View>
            </BottomSheetView>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: COLORS.foreground,
    },
    album: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 24,
        marginVertical: 24,
        backgroundColor: COLORS.text5,
    },
    controls: {
        marginVertical: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
