import { ScrollView, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // 'light' or 'dark'

  const themeStyles = StyleSheet.create({
    section: {
      marginBottom: 24,
      padding: 16,
      borderRadius: 12,
      backgroundColor: colorScheme === 'light' ? '#E6F3FF' : '#1A3C5A',
      shadowColor: colorScheme === 'light' ? '#000' : '#FFF',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4, // For Android shadows
    },
    button: {
      backgroundColor: colorScheme === 'light' ? '#007AFF' : '#0A84FF',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 12,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    card: {
      backgroundColor: colorScheme === 'light' ? '#F0F8FF' : '#2C4A6B',
      borderRadius: 12,
      padding: 16,
      marginTop: 12,
    },
  });

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={true}
    >
      {/* Hero Section */}
      <LinearGradient
        colors={colorScheme === 'light' ? ['#4DA8DA', '#007AFF'] : ['#1A3C5A', '#0A84FF']}
        style={styles.heroSection}
      >
        <ThemedText type="title" style={styles.heroTitle}>
          Water Monitoring Hub
        </ThemedText>
        <ThemedText type="default" style={styles.heroSubtitle}>
          Track water quality and protect our planet’s vital resource in real time.
        </ThemedText>
        <TouchableOpacity
          style={themeStyles.button}
          onPress={() => alert('Start Monitoring pressed!')}
        >
          <ThemedText style={themeStyles.buttonText}>Start Monitoring</ThemedText>
        </TouchableOpacity>
      </LinearGradient>

      {/* Water Status Section */}
      <ThemedView style={themeStyles.section}>
        <ThemedText type="subtitle">Current Water Status</ThemedText>
        <ThemedView style={themeStyles.card}>
          <ThemedText type="defaultSemiBold">pH Level: 7.2</ThemedText>
          <ThemedText type="default">Within safe range (6.5–8.5).</ThemedText>
        </ThemedView>
        <ThemedView style={themeStyles.card}>
          <ThemedText type="defaultSemiBold">Turbidity: 1.5 NTU</ThemedText>
          <ThemedText type="default">Clear water, safe for use.</ThemedText>
        </ThemedView>
        <ThemedView style={themeStyles.card}>
          <ThemedText type="defaultSemiBold">Dissolved Oxygen: 6.8 mg/L</ThemedText>
          <ThemedText type="default">Healthy for aquatic life.</ThemedText>
        </ThemedView>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150/4DA8DA' }} // Replace with sensor image
          style={styles.image}
          contentFit="cover"
        />
      </ThemedView>

      {/* Features Section */}
      <ThemedView style={themeStyles.section}>
        <ThemedText type="subtitle">Why Choose Our App?</ThemedText>
        <ThemedView style={themeStyles.card}>
          <ThemedText type="defaultSemiBold">Real-Time Monitoring</ThemedText>
          <ThemedText type="default">Get live updates from water sensors.</ThemedText>
        </ThemedView>
        <ThemedView style={themeStyles.card}>
          <ThemedText type="defaultSemiBold">Smart Alerts</ThemedText>
          <ThemedText type="default">Instant notifications for water quality issues.</ThemedText>
        </ThemedView>
        <ThemedView style={themeStyles.card}>
          <ThemedText type="defaultSemiBold">Data Insights</ThemedText>
          <ThemedText type="default">Analyze trends with historical data.</ThemedText>
        </ThemedView>
        <TouchableOpacity
          style={themeStyles.button}
          onPress={() => alert('Explore Features pressed!')}
        >
          <ThemedText style={themeStyles.buttonText}>Learn More</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Gallery Section */}
      <ThemedView style={themeStyles.section}>
        <ThemedText type="subtitle">Our Water Sources</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150/4DA8DA' }} // Replace with water image
            style={styles.galleryImage}
            contentFit="cover"
          />
          <Image
            source={{ uri: 'https://via.placeholder.com/150/007AFF' }} // Replace with sensor image
            style={styles.galleryImage}
            contentFit="cover"
          />
          <Image
            source={{ uri: 'https://via.placeholder.com/150/34C759' }} // Replace with river image
            style={styles.galleryImage}
            contentFit="cover"
          />
        </ScrollView>
      </ThemedView>

      {/* Tips & Alerts Section */}
      <ThemedView style={themeStyles.section}>
        <ThemedText type="subtitle">Water Conservation Tips</ThemedText>
        <ThemedText type="default">
          - Fix leaks to save water.
        </ThemedText>
        <ThemedText type="default">
          - Use water-efficient fixtures.
        </ThemedText>
        <ThemedText type="default">
          - Monitor usage to reduce waste.
        </ThemedText>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150/007AFF' }} // Replace with conservation image
          style={styles.image}
          contentFit="cover"
        />
      </ThemedView>

      {/* Call to Action Section */}
      <ThemedView style={themeStyles.section}>
        <ThemedText type="subtitle">Get Started Today</ThemedText>
        <ThemedText type="default">
          Connect your water sensors and start monitoring. Customize this page by editing{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>.
        </ThemedText>
        <TouchableOpacity
          style={themeStyles.button}
          onPress={() => alert('Connect Now pressed!')}
        >
          <ThemedText style={themeStyles.buttonText}>Connect Now</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 48,
  },
  heroSection: {
    padding: 32,
    borderRadius: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  heroTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  heroSubtitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 12,
  },
  gallery: {
    marginTop: 12,
  },
  galleryImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 12,
  },
});