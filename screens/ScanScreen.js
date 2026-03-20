import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.scanContainer}>
      
      <Image
        source={require("../assets/juice-bottle.png")}
        style={styles.fullBackgroundImage}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <View style={styles.scanFrame}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
      </View>

      <Image
        source={require("../assets/small-juice-icon.png")}
        style={styles.bottomImage}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  scanContainer: { flex: 1, backgroundColor: 'black' },

  fullBackgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanFrame: {
    width: 280,
    height: 420,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
    position: 'relative',
  },

  corner: {
    position: 'absolute',
    width: 50,
    height: 50,
  },

  topLeft: {
    top: -25, left: -25,
    borderTopWidth: 8,
    borderLeftWidth: 8,
    borderColor: 'white',
    borderTopLeftRadius: 32,
  },

  topRight: {
    top: -25, right: -25,
    borderTopWidth: 8,
    borderRightWidth: 8,
    borderColor: 'white',
    borderTopRightRadius: 32,
  },

  bottomLeft: {
    bottom: -25, left: -25,
    borderBottomWidth: 8,
    borderLeftWidth: 8,
    borderColor: 'white',
    borderBottomLeftRadius: 32,
  },

  bottomRight: {
    bottom: -25, right: -25,
    borderBottomWidth: 8,
    borderRightWidth: 8,
    borderColor: 'white',
    borderBottomRightRadius: 32,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 6,
    backgroundColor: '#a5a3aa39',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  backText: {
    color: '#7192ef',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 36,
  },

  bottomImage: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    width: 500,
    height: 200,
    borderRadius: 28,
    elevation: 12,
  },
});