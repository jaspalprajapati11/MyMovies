import { React, useEffect, useState } from 'react'
import { Text, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './OneMovie.styles'
import MovieIds from '../../constants/MovieIds';

const OneMovie = ({ route }) => {
    const {
        original_title,
        backdrop_path,
        release_date,
        overview,
        name,
        first_air_date,
        vote_average,
        title,
        original_language,
        genre_ids
    } = route.params
    const [rating, setRating] = useState([3])
    useEffect(() => {
        setRating(Math.floor((vote_average / 2).toFixed(1)))
    }, [])
    return (
        <ScrollView style={styles.bgColorGrey}>
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%' }}>
                    <Image
                        source={{ uri: "https://image.tmdb.org/t/p/original" + backdrop_path }}
                        resizeMode='contain'
                        style={styles.movieImage}
                    />
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{
                        original_language === 'en' ? original_title || name
                            : title
                    }
                        {" "}
                        <Text>
                            {`(${new Date(release_date ? release_date : first_air_date).getFullYear()})`}
                        </Text>
                    </Text>
                </View>
                <View style={styles.rating}>
                    <FontAwesome name="star" size={18} color="yellow" style={{ marginRight: 3 }} />
                    <FontAwesome name="star" size={18} color="yellow" style={{ marginRight: 3 }} />
                    <FontAwesome name="star" size={18} color="yellow" style={{ marginRight: 3 }} />
                    <FontAwesome name="star-half-empty" size={18} color="yellow" style={{ marginRight: 3 }} />
                    <FontAwesome name="star-o" size={18} color="yellow" style={{ marginRight: 3 }} />
                </View>
                <ScrollView horizontal={true}>
                    {genre_ids.map((item) => {
                        return <View key={item} style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}>
                            <View style={[styles.genreView, styles.bgColorGenre]}>
                                <Text style={styles.genreText}>{MovieIds.get(item) ? MovieIds.get(item) : `Action`}</Text>
                            </View>
                        </View>
                    })}
                </ScrollView>
                <View style={styles.height150}>
                    <Text style={styles.storylineText}>
                        Storyline
                    </Text>
                    <Text style={styles.overviewText}>
                        {overview}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default OneMovie