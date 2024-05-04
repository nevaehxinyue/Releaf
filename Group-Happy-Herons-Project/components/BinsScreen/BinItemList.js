import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const BinItemList = ({ wasteItems, selectedBin} ) => {
  let binName ='';
    if(!selectedBin || !wasteItems ) {
      return null;
    }
    if(selectedBin === 'recycling'){
      binName = 'Recycling'
    } else if(selectedBin === 'foodScraps'){
      binName = 'Kitchen'
    } else {
      binName = 'Rubbish'
    }
  return (
        <ScrollView className="w-full gap-4" >
          <View  className="gap-2" >
         
            {/* //Yes items */}
            <View>
              <Text className="font-bold text-[20px] mb-3">Items you can put in {binName} bin:</Text>

              <Text className="font-bold text-[#4c8a5b] text-[20px] mb-2" >Yes, please</Text>
     
              {wasteItems[selectedBin].yes.map((item, index) => (
                <Text key={index} className="text-[16px] font-semibold mb-1 " >
                  • {item}
                </Text>
              ))}
              {selectedBin === "recycling" && <Text className="text-[15px] font-semibold italic">Please rinse and empty plastic/glass containers before disposal.</Text> }
      
            </View>
          

            {/* //No items */}
            <View  >
              <Text className="font-bold text-[#e82323] text-[20px] mb-2 mt-2" >No, thanks</Text>
              {wasteItems[selectedBin].no.map((item, index) => (
                <Text key={index} className="text-[16px] font-semibold mb-1" >
                  • {item}
                </Text>
              ))}
            </View>
            </View>
        </ScrollView>
      
        
    
  )
}



export default BinItemList