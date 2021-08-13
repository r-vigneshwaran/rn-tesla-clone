import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import Logo from '../../assets/images/logo.png';
import Menu from '../../assets/images/menu.png';

const Navbar = () => {
  return (
    <View styles={styles.navbarContainer}>
      <Image style={styles.logo} source={Logo} />
      <Image style={styles.menu} source={Menu} />
    </View>
  );
};

export default Navbar;
