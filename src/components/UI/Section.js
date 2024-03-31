import { StyleSheet, View } from 'react-native'
import { Typography } from '../Text'

export function Section({ title, titleOpacity = 1, titleVariant = 'title', children, containerStyle, contentStyle }) {
    return (
        <View style={[
            styles.container,
            containerStyle,
        ]}>
            {title &&
                <View style={styles.titleContainer}>
                    <Typography
                        opacity={titleOpacity}
                        variant={titleVariant}
                    >
                        {title}
                    </Typography>
                </View>
            }

            <View style={[
                styles.contentContainer,
                contentStyle,
            ]}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 16,
    },
    titleContainer: {
        width: '100%',
        paddingHorizontal: 24,
    },
    contentContainer: {
        width: '100%',
    },
})
