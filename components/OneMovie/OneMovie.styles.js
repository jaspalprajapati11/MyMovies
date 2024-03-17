import { StyleSheet } from 'react-native';
import { relativeHeight, relativeWidth } from '../../constants/Dimensions'
// import { relativeFontSize } from '../../constants/Fonts';

const styles = StyleSheet.create({
    movieImage: {
        width: '100%',
        height: relativeHeight(3.2),
        resizeMode: 'cover',
    },
    bgColorGrey: {
        backgroundColor: '#1c1c1c'
    },
    titleView: {
        minHeight: relativeHeight(12),
        padding: relativeHeight(70),
        marginLeft: relativeWidth(50),
    },
    titleText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    rating: {
        flexDirection: 'row',
        paddingLeft: relativeWidth(20),
        marginTop: -relativeHeight(50),
    },
    storylineText: {
        color: 'white',
        padding: relativeWidth(20),
        fontSize: 20,
    },
    overviewText: {
        color: 'white',
        padding: relativeWidth(18),
        fontSize: 18,
        marginTop: -relativeHeight(40),
    },
    height150: {
        minHeight: relativeWidth(20),
    },
    genreView: {
        marginTop: relativeHeight(30),
        borderRadius: relativeWidth(15),
        height: relativeHeight(16),
        alignItems: 'center',
        justifyContent: 'center',       
    },
    bgColorGenre: {
        backgroundColor: '#545454'
    },
    genreText: {
        color: 'white',
        paddingRight: relativeWidth(18),
        paddingLeft: relativeWidth(18),
        fontSize: 14,
        fontWeight: 'bold', 
    },
});

export { styles };