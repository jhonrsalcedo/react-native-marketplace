import { useState } from 'react';
import { View, SafeAreaView, FlatList, Platform } from 'react-native';

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  // console.log(nftData);

  const handleSearch = value => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter(item =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : null}
      />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
      {/* <Button
        style={{ flex: 1 }}
        title="Go to Profile"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </SafeAreaView>
  );
};

export default Home;
