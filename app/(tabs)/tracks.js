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
            if (!permissionResponse || permissionResponse.status !== 'granted') {
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
                overScrollMode='never'
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding: 16,
                }}
                ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                )}
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
    separator: {
        height: 1,
        marginVertical: 8,
        backgroundColor: COLORS.text5,
    },
})
