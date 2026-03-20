import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

export default function CartScreen({ navigation }) {

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Orange Juice",
      brand: "Lauren’s",
      price: 149,
      qty: 2,
      image: require("../assets/Rectangle 32.png")
    },
    {
      id: 2,
      name: "Skimmed Milk",
      brand: "Baskin’s",
      price: 129,
      qty: 2,
      image: require("../assets/Rectangle 31.png")
    },
    {
      id: 3,
      name: "Aloe Vera Lotion",
      brand: "Marley’s",
      price: 1249,
      qty: 2,
      image: require("../assets/Rectangle 36.png")
    }
  ]);

  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.container}>

      {/* Header */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ fontSize: 18 }}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Your Cart 👍🏼</Text>

      {/* List */}
      {cart.map((item, index) => (
        <View
          key={item.id}
          style={[styles.card, index === 1 && styles.activeCard]}
        >

          <Image source={item.image} style={styles.image} />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹ {item.price}</Text>
          </View>

          {/* Quantity */}
          <View style={styles.qtyBox}>
            <TouchableOpacity onPress={() => decrease(item.id)}>
              <Text style={styles.qtyBtn}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qty}>{item.qty}</Text>

            <TouchableOpacity onPress={() => increase(item.id)}>
              <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
      ))}

      {/* Total */}
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ {total}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.navItem}>
          <Image source={require("../assets/Group 152.png")} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require("../assets/Group 153.png")} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Scan")} style={styles.navScan}>
          <Image source={require("../assets/Vector.png")} style={styles.navScanIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require("../assets/Group 154.png")} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.navItemActive}>
          <Image source={require("../assets/Group 161.png")} style={styles.navIconActive} />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    padding: 20,
    paddingBottom: 120
  },

  back: {
    marginTop: 40,
    marginBottom: 10
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15
  },

  activeCard: {
    borderWidth: 2,
    borderColor: "#3b82f6",
    backgroundColor: "#fff"
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
    resizeMode: "contain"
  },

  brand: {
    fontSize: 12,
    color: "gray"
  },

  name: {
    fontWeight: "bold"
  },

  price: {
    color: "#ff7f50",
    marginTop: 3
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  qtyBtn: {
    fontSize: 18,
    paddingHorizontal: 10
  },

  qty: {
    fontWeight: "bold"
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  totalPrice: {
    fontSize: 18,
    color: "#ff7f50",
    fontWeight: "bold"
  },

  checkoutBtn: {
    backgroundColor: "#f28b54",
    padding: 18,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center"
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },

  /* === BOTTOM NAVIGATION === */

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center"
  },

  navItemActive: {
    backgroundColor: "#daf1ff",
    padding: 10,
    borderRadius: 15
  },

  navIcon: {
    width: 28,
    height: 28,
    opacity: 0.6
  },

  navIconActive: {
    width: 30,
    height: 30,
    opacity: 1
  },

  navScan: {
    width: 70,
    height: 70,
    backgroundColor: "#32C5FF",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -35,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6
  },

  navScanIcon: {
    width: 40,
    height: 40,
    tintColor: "#fff"
  }

});