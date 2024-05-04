import { View, Text } from 'react-native'
import React from 'react'

const YesItemList = ( {selectedBin }) => {
    if (!selectedBin) return (<Text style={styles.placeholderText}>Tap a bin</Text>);

  return (
        
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.wasteListContainer}>
            <View style={styles.wasteList}>
              <Text style={styles.listTitle}>✅Yes, please</Text>
              {wasteItems[selectedBin].yes.map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  • {item}
                </Text>
              ))}
              {selectedBin === "recycling" && <Text style={styles.listItem}>Please rinse and empty plastic/glass containers before disposal.</Text> }
            </View>
            <View style={styles.wasteList}>
              <Text style={styles.listTitleNoThanks}>❌No, thanks</Text>
              {wasteItems[selectedBin].no.map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  • {item}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>
      
        
    
  )
}

export default YesItemList