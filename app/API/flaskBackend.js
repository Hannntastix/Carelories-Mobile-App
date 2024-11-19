// import axios from 'axios';
// import { launchCamera } from 'react-native-image-picker';

// const uploadImage = () => {
//   launchCamera({mediaType: 'photo'}, async (response) => {
//     if (response.assets) {
//       const formData = new FormData();
//       formData.append('image', {
//         uri: response.assets[0].uri,
//         name: 'photo.jpg',
//         type: 'image/jpeg'
//       });

//       try {
//         const result = await axios.post('http://your-flask-server-ip:5000/predict', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         console.log(result.data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   });
// };
