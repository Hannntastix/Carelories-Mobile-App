const fetchCaloriesFromNutritionix = async (foodName) => {
    const NUTRITIONIX_APP_ID = 'b174b922';
    const NUTRITIONIX_API_KEY = '5f2e48837174b3cb21c56475914a0b6f';
    
    try {
      const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': NUTRITIONIX_APP_ID,
          'x-app-key': NUTRITIONIX_API_KEY,
        },
        body: JSON.stringify({
          query: foodName,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.foods && data.foods.length > 0) {
        return data.foods[0].nf_calories;
      } else {
        return 'Unknown';
      }
    } catch (error) {
      console.error('Error fetching calories from Nutritionix:', error);
      return 'Unknown';
    }
  };