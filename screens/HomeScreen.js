import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2;

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>Hello 👋🏻</Text>
            <Text style={styles.username}>Christie Doe</Text>
          </View>

          {/* Avatar */}
          <Image
            source={require("../assets/anh.png")}
            style={styles.avatar}
          />
        </View>

        {/* INSIGHTS */}
        <Text style={styles.sectionTitle}>Your Insights</Text>

        <View style={styles.insightGrid}>
          
          {/* Scan new */}
          <TouchableOpacity
            style={styles.insightCard}
            onPress={() => navigation.navigate("Scan")}
          >
            <Image
              source={require("../assets/scan-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSubtitle}>Scanned 483</Text>
          </TouchableOpacity>

          {/* Counterfeits */}
          <View style={styles.insightCard}>
            <Image
              source={require("../assets/alert-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
          </View>

          {/* Success */}
          <View style={styles.insightCard}>
            <Image
              source={require("../assets/check-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSubtitle}>Checkouts 8</Text>
          </View>

          {/* Directory */}
          <View style={styles.insightCard}>
            <Image
              source={require("../assets/calendar-icon.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSubtitle}>History 26</Text>
          </View>

        </View>

        {/* EXPLORE MORE */}
        <View style={styles.exploreHeader}>
          <Text style={styles.sectionTitle}>Explore More</Text>
          <Text style={styles.arrow}>→</Text>
        </View>

        {/* Explore images */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={require("../assets/Rectangle 31.png")}
            style={styles.exploreItem}
          />
          <Image
            source={require("../assets/Rectangle 36.png")}
            style={styles.exploreItem}
          />
          <Image
            source={require("../assets/Rectangle 45.png")}
            style={styles.exploreItem}
          />
        </ScrollView>

      </ScrollView>
        {/* Bottom Navigation */}
<View style={styles.bottomNav}>
  
  {/* Home */}
  <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.navItem}>
    <Image source={require("../assets/Group 152.png")} style={styles.navIcon} />
  </TouchableOpacity>

  {/* History */}
  <TouchableOpacity style={styles.navItem}>
    <Image source={require("../assets/Group 153.png")} style={styles.navIcon} />
  </TouchableOpacity>

  {/* Scan (middle) */}
  <TouchableOpacity
    onPress={() => navigation.navigate("Scan")}
    style={styles.navScanButton}
  >
    <Image source={require("../assets/Vector.png")} style={styles.navScanIcon} />
  </TouchableOpacity>

  {/* Profile */}
  <TouchableOpacity style={styles.navItem}>
    <Image source={require("../assets/Group 154.png")} style={styles.navIcon} />
  </TouchableOpacity>

  {/* Cart */}
  <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.navItem}>
    <Image source={require("../assets/Group 161.png")} style={styles.navIcon} />
  </TouchableOpacity>

</View>

    </SafeAreaView>
  );
}

/* ===== STYLES ===== */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { padding: 20, paddingBottom: 120 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },
  hello: { fontSize: 28, fontWeight: "700" },
  username: { fontSize: 18, color: "#666" },
  avatar: { width: 45, height: 45, borderRadius: 22.5 },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    marginTop: 10,
  },

  insightGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  insightCard: {
    width: cardWidth,
    height: cardWidth,
    backgroundColor: "#f8f8f8",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },

  icon: {
    width: 50,
    height: 50,
    marginBottom: 12,
    borderRadius: 12,
  },

  cardTitle: { fontSize: 16, fontWeight: "600" },
  cardSubtitle: { fontSize: 14, color: "#888", marginTop: 4 },

  exploreHeader: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrow: { fontSize: 24, marginRight: 10 },

  exploreItem: {
    width: 150,
    height: 130,
    borderRadius: 20,
    marginRight: 14,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 78,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  navItem: {
    width: 28,
    height: 28,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  navItemActive: {
    width: 28,
    height: 28,
    backgroundColor: "#50b4ff",
    borderRadius: 8,
  },
  navScan: {
    width: 48,
    height: 48,
    backgroundColor: "#78b7ff",
    borderRadius: 14,
  },
  bottomNav: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: 80,
  backgroundColor: "#fff",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 8,
  paddingBottom: 10,
},

navItem: {
  justifyContent: "center",
  alignItems: "center",
  width: 40,
  height: 40,
},

navIcon: {
  width: 26,
  height: 26,
  opacity: 0.85,
},

/* Nút Scan chính giữa */
navScanButton: {
  width: 65,
  height: 65,
  backgroundColor: "#7cb8ff",
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20, // nổi lên đúng như ảnh mẫu
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 6,
},

navScanIcon: {
  width: 34,
  height: 34,
},
});