// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import CameraScan from '../../app/(tabs)/camera';

// const [scanResult, setScanResult] = useState([]);

// export default function ScanResult() {

// return (
//     <View style={styles.container}>
//         <CameraScan setScanResult={setScanResult} />
//         <View style={styles.resultContainer}>
//             {scanResult.length > 0 ? (
//                 scanResult.map((item, index) => (
//                     <View key={index} style={styles.resultItem}>
//                         <Text style={styles.resultText}>{item.name}</Text>
//                         <Text style={styles.resultText}>Calories: {item.calories}</Text>
//                         <Text style={styles.resultText}>Protein: {item.protein}</Text>
//                     </View>
//                 ))
//             ) : (
//                 <Text style={styles.noResultText}>No results yet.</Text>
//             )}
//         </View>
//     </View>
// );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//     },
//     resultContainer: {
//         padding: 20,
//         backgroundColor: 'white',
//     },
//     resultItem: {
//         marginBottom: 10,
//         padding: 10,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//     },
//     resultText: {
//         fontSize: 18,
//     },
//     noResultText: {
//         textAlign: 'center',
//         fontSize: 20,
//         color: 'gray',
//     },
// });