import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { useCallback, useEffect, useState, memo } from 'react';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import MovieItem from '../MovieItem/MovieItem';
import { styles } from './MovieList.styles'
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { getGenreData, getMovieData } from '../../utilities/App.utilities';
import { useSelector, useDispatch } from 'react-redux'
import { setMovieData } from '../../Redux/Action';
import MovieTypes from '../../constants/MovieTypes';



const MovieList = memo(function MovieList({ navigation }) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isSearch, setIsSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState([])
  const [genreData, setGenreData] = useState([])
  const [genre, setGenre] = useState("trending/all/day?")

  const dispatch = useDispatch()
  const movieData = useSelector((state) => state.moviesReducer.movies)

  const fetchMovieData = async () => {
    setLoading(true)
    const response = await getMovieData(page, genre)
    setLoading(false)
    dispatch(setMovieData({ response, genre }))
    // Assuming you have a way to know if there's more data available from the API
    if (response.total_pages !== page) {
      setPage(prevPage => prevPage + 1);
    }
  }
  const fetchGenreData = async () => {
    const response = await getGenreData()
    setGenreData(response.genres)
  }
  useEffect(() => {
    fetchMovieData()
    // fetchGenreData()
  }, [genre])
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      fetchMovieData();
    }
  };

  const renderItem = useCallback(({ item }) => (
    <MovieItem item={item} navigation={navigation} />
  ), [movieData])

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = movieData.filter((item) => {
      if (item.original_title) {
        return item.original_title.includes(query)
      } else {
        return item.name.includes(query)
      }
    });
    setSearchData(filteredData)
  };



  return (
    <View style={styles.container}>
      <View style={{ height: 150 }}>
        <View style={[styles.headerView, { backgroundColor: !isSearch ? '#1c1c1c' : '#101010' }]}>
          {
            !isSearch ?
              <View style={styles.searchBarView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                  <Text style={styles.watchText}>Watch Now</Text>
                  <Fontisto
                    onPress={() => {
                      setIsSearch(true)
                    }}
                    style={{ marginTop: 8 }}
                    name="search"
                    size={25}
                    color="white"
                  />
                </View>
                <View>
                  <ScrollView horizontal={true}>
                    {
                      MovieTypes.map((item) => {
                        return <TouchableOpacity key={item.id}
                          onPress={() => {
                            setGenre(item.slug)
                          }}>
                          <View style={[styles.genreView,
                          genre === item.slug ?
                            styles.bgColorGreen : styles.bgColorGrey]}>
                            <Text style={styles.genreText}>{item.title}</Text>
                          </View>
                        </TouchableOpacity>
                      })
                    }
                  </ScrollView>
                </View>
              </View>
              :
              <View>
                <AntDesign
                  onPress={() => {
                    setIsSearch(!isSearch)
                    setSearchQuery('');
                  }}
                  style={styles.backIcon}
                  name="arrowleft"
                  size={25}
                  color="white" />
                <TextInput
                  style={styles.searchBar}
                  placeholder="Search your movie"
                  placeholderTextColor="white"
                  value={searchQuery}
                  onChangeText={handleSearch}
                />
              </View>
          }
        </View>
      </View>
      <View style={[styles.flatListView]}>
        {!searchQuery ?
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={movieData}
            renderItem={renderItem}
            keyExtractor={useCallback((item, index) => index.toString())}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1} // Adjust this threshold according to your needs
            ListFooterComponent={loading && <ActivityIndicator
              size="large" color="white"
              style={{ marginTop: 40 }}
            />}
            numColumns={2}
          />
          :
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={searchData}
            renderItem={renderItem}
            keyExtractor={useCallback((item, index) => index.toString())}
            // onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1} // Adjust this threshold according to your needs
            ListFooterComponent={loading && <ActivityIndicator />}
            numColumns={2}
          />
        }
      </View>
    </View>
  );
})

export default MovieList
