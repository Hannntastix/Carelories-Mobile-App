// export const processFoodvisorResponse = (responseData) => {
//     const { items } = responseData;
//     const results = []; // Menyimpan hasil pemrosesan

//     items.forEach(item => {
//         item.food.forEach(food => {
//             const foodInfo = food.food_info;
//             const displayName = foodInfo.display_name;
//             const nutrition = foodInfo.nutrition;

//             results.push({
//                 name: displayName,
//                 calories: nutrition.calories_100g,
//                 protein: nutrition.proteins_100g,
//                 // Tambahkan informasi lainnya yang diperlukan
//             });
//         });
//     });

//     return results; // Kembalikan hasil pemrosesan
// };
