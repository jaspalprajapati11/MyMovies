import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101010',
  },
  flatListView: {
    paddingHorizontal: 10,
    marginTop:20
  },
  searchBar: {
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 250,
    marginLeft: 80,
    backgroundColor: '#101010',
    color: 'white'
  },
  backIcon: {
    position: 'absolute',
    top: 8,
    left: 20
  },
  watchText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  searchBarView: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginLeft: 20
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150,
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 500
  },
  genreView: {
    minWidth: 80,
    marginTop: 15,
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  genreText: {
    color: 'white',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: 'bold'
  },
  bgColorGrey:{
    backgroundColor:'#545454'
  },
  bgColorGreen:{
    backgroundColor:'#37A45E'
  },
  marginTop20:{
    marginTop:20
  }
});

export { styles };