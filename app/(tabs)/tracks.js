import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import { TrackCard } from '@/components'
import { COLORS } from '@/constants'

export default function Tracks() {
    const [tracks, setTracks] = useState([])
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()

    useEffect(() => {
        const fetchTracks = async () => {
            if (permissionResponse.status !== 'granted') {
                await requestPermission()
            }

            const audios = await MediaLibrary.getAssetsAsync({
                mediaType: 'audio',
            })

            setTracks(audios.assets)
        }

        fetchTracks()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={tracks}
                numColumns={2}
                overScrollMode='never'
                keyExtractor={item => item.id}
                columnWrapperStyle={{
                    gap: 16,
                }}
                contentContainerStyle={{
                    padding: 16,
                    gap: 16,
                }}
                renderItem={({ item }) => (
                    <TrackCard
                        track={item}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
})
