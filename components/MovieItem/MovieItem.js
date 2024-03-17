import { React, useState, memo } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './MovieItem.styles'

const MovieItem = memo(
    function MovieItem(props) {
        const { item, navigation } = props
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('Movie Detail', item)
                }}>
                <View style={styles.card}>
                    <View style={styles.imageView}>
                        <Image
                            source={{ uri: "https://image.tmdb.org/t/p/original" + item.poster_path }}
                            resizeMode='contain'
                            style={styles.cardImage}
                        />
                    </View>
                    <View>
                        <Text style={styles.cardText}>
                            {
                                item.original_language === 'en' ? item.original_title || item.name
                                    : item.title
                            }
                            {" "}
                            <Text style={{ color: 'white' }}>
                                {
                                    item.release_date ? `(${new Date(item.release_date).getFullYear()})`
                                        :
                                        `(${new Date(item.first_air_date).getFullYear()})`
                                }
                            </Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.descText}>{item.overview.slice(0, 50) || 'No Description '}...
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
)

export default MovieItem