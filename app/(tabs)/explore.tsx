import { Image, Platform, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

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
      elevation: 4,
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
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4DA8DA', dark: '#1A3C5A' }}
      headerImage={
        <LinearGradient
          colors={colorScheme === 'light' ? ['#4DA8DA', '#007AFF'] : ['#1A3C5A', '#0A84FF']}
          style={styles.headerGradient}
        >
          <IconSymbol
            size={310}
            color="#FFFFFF"
            name="drop.fill" // Water-related icon
            style={styles.headerImage}
          />
        </LinearGradient>
      }
    >
      {/* Hero Section */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
            color: colorScheme === 'light' ? '#003087' : '#E6F3FF',
          }}
        >
          Water Monitoring Hub
        </ThemedText>
        <ThemedText type="default" style={styles.subtitle}>
          Monitor water quality, track usage, and protect our planet's most vital resource.
        </ThemedText>
        <TouchableOpacity
          style={themeStyles.button}
          onPress={() => alert('Start Monitoring pressed!')}
        >
          <ThemedText style={themeStyles.buttonText}>Start Monitoring</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Water Quality Section */}
      <Collapsible title="Water Quality Metrics">
        <ThemedView style={themeStyles.section}>
          <ThemedText type="default">
            Track key water quality parameters to ensure safety and sustainability:
          </ThemedText>
          <ThemedText type="default">
            - <ThemedText type="defaultSemiBold">pH Level</ThemedText>: Measures acidity or alkalinity (ideal: 6.5–8.5).
          </ThemedText>
          <ThemedText type="default">
            - <ThemedText type="defaultSemiBold">Turbidity</ThemedText>: Assesses water clarity (lower is better).
          </ThemedText>
          <ThemedText type="default">
            - <ThemedText type="defaultSemiBold">Dissolved Oxygen</ThemedText>: Essential for aquatic life (ideal: &gt;6 mg/L).
          </ThemedText>
          <Image
            source={{ uri: 'https://via.placeholder.com/300x150/4DA8DA' }} // Replace with water quality sensor image
            style={styles.image}
          />
        </ThemedView>
      </Collapsible>

      {/* Features Section */}
      <Collapsible title="App Features">
        <ThemedView style={themeStyles.section}>
          <ThemedText type="defaultSemiBold">Real-Time Monitoring</ThemedText>
          <ThemedText type="default">Get live updates from connected water sensors.</ThemedText>
          <ThemedText type="defaultSemiBold">Custom Alerts</ThemedText>
          <ThemedText type="default">Receive notifications for abnormal water quality levels.</ThemedText>
          <ThemedText type="defaultSemiBold">Data History</ThemedText>
          <ThemedText type="default">View trends and historical data to make informed decisions.</ThemedText>
          <TouchableOpacity
            style={themeStyles.button}
            onPress={() => alert('Explore Features pressed!')}
          >
            <ThemedText style={themeStyles.buttonText}>Learn More</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </Collapsible>

      {/* Data Visualization Section */}
      <Collapsible title="Data Visualization">
        <ThemedView style={themeStyles.section}>
          <ThemedText type="default">
            Visualize water quality trends with interactive charts:
          </ThemedText>
          <Image
            source={{ uri: 'https://via.placeholder.com/300x150/007AFF' }} // Replace with chart placeholder
            style={styles.image}
          />
          <ThemedText type="default">
            Monitor water levels, pH, and more over time to identify patterns and anomalies.
          </ThemedText>
          <ExternalLink href="https://example.com/water-data">
            <ThemedText type="link">View Sample Data</ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

      {/* Tips & Resources Section */}
      <Collapsible title="Water Conservation Tips">
        <ThemedView style={themeStyles.section}>
          <ThemedText type="default">
            Help conserve water with these practical tips:
          </ThemedText>
          <ThemedText type="default">
            - Fix leaks promptly to prevent water loss.
          </ThemedText>
          <ThemedText type="default">
            - Use water-efficient appliances and fixtures.
          </ThemedText>
          <ThemedText type="default">
            - Monitor usage to identify high-consumption areas.
          </ThemedText>
          <ExternalLink href="https://www.epa.gov/watersense">
            <ThemedText type="link">Learn More from EPA WaterSense</ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

      {/* Call to Action Section */}
      <ThemedView style={themeStyles.section}>
        <ThemedText type="subtitle">Connect Your Sensors</ThemedText>
        <ThemedText type="default">
          Get started by connecting your water monitoring devices to the app. Customize this page by
          editing <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>.
        </ThemedText>
        <TouchableOpacity
          style={themeStyles.button}
          onPress={() => alert('Connect Now pressed!')}
        >
          <ThemedText style={themeStyles.buttonText}>Connect Now</ThemedText>
        </TouchableOpacity>
        {Platform.select({
          ios: (
            <ThemedText type="default" style={{ marginTop: 12 }}>
              Enjoy a smooth parallax effect on iOS with our{' '}
              <ThemedText type="defaultSemiBold">ParallaxScrollView</ThemedText> component.
            </ThemedText>
          ),
        })}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 12,
  },
});