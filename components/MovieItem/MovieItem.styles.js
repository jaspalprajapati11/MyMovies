import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    width: '45%',
    minHeight: 200,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 10,
    backgroundColor: '#1c1c1c',
  },
  cardText: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  cardImage: {
    width: '100%',
    height: 110,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  imageView: {
    width: '100%',
    borderRadius: 10
  },
  descText: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    color: 'white'
  }
});

export { styles };