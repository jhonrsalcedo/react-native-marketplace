import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';

import { CircleButton, RectButton } from './Button';

import { SubInfo, EthPrice, NFTTitle } from '../components/SubInfo';

const NFTCard = ({ data }) => {
  const { name, creator, price } = data;
  const navigation = useNavigation();

  const [counterLike, setCounterLike] = useState(0);

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
        />
        <CircleButton
          imgUrl={assets.heart}
          right={10}
          top={10}
          handlePress={() => setCounterLike(counterLike + 1)}
        />
        <View style={{ position: 'absolute', bottom: -40, right: 120 }}>
          <Image source={assets.heart} style={{ width: 20, height: 20 }} />
          <Text style={{ fontSize: SIZES.medium, marginLeft: 3 }}>
            {counterLike}
          </Text>
        </View>
      </View>

      <SubInfo />
      <View
        style={{
          width: '100%',
          padding: SIZES.font
        }}
      >
        <NFTTitle
          title={name}
          subtitle={creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />
        <View
          style={{
            marignTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <EthPrice price={price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
