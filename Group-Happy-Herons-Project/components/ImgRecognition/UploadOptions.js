import React from 'react';

import { View  } from 'react-native';
import ImagePicker from './ImagePicker';

function UploadOptions({onTakeImage, onClearPrediction}) {
    return (
       <View className="flex-1 flex-row justify-between items-center" >
        <ImagePicker onTakeImage={onTakeImage} onClearPrediction={onClearPrediction} />
        


       </View>
    );
}



export default UploadOptions;