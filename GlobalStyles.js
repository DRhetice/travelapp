import { StyleSheet, Platform } from 'react-native';
import ItemsCardContainer from './components/ItemsCardContainer';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});

/*<ItemsCardContainer
                    key={"101"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2023/01/10/08/23/cosmos-7709242__340.jpg"
                    }
                    title="quelsuechose de jolie "
                    location="baba"
                  />
                  <ItemsCardContainer
                    key={"102"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2023/02/12/13/34/bird-7785106__340.jpg"
                    }
                    title="quelquechose de dangereur "
                    location="baba"
                  />*/