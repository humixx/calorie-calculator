document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById('calculate-button');
    const resultElement = document.getElementById('result');
  
    calculateButton.addEventListener('click', calculateBurn);
  
    function calculateBurn(event) {
      event.preventDefault();
      console.log("Calculate button clicked")
  
      const weightInput = document.getElementById('weight-input');
      const heightFeetInput = document.getElementById('height-feet-input');
      const heightInchesInput = document.getElementById('height-inches-input');
      const ageInput = document.getElementById('age-input');
      const genderSelect = document.getElementById('gender-select');
      const activitySelect = document.getElementById('activity-select');
  
      const weight = parseFloat(weightInput.value);
      const heightFeet = parseInt(heightFeetInput.value);
      const heightInches = parseInt(heightInchesInput.value);
      const age = parseInt(ageInput.value);
      const gender = genderSelect.value;
      const activity = activitySelect.value;
  
      if (!weight || !heightFeet || !heightInches || !age || !gender || !activity) {
        resultElement.innerHTML = '<p class="result-text">Please fill in all fields.</p>';
        return;
      }
  
      const totalHeightInches = (heightFeet * 12) + heightInches;
  
      let bmr;
      if (gender === 'male') {
        bmr = 66 + (6.2 * weight) + (12.7 * totalHeightInches) - (6.8 * age);
      } else {
        bmr = 655 + (4.35 * weight) + (4.7 * totalHeightInches) - (4.7 * age);
      }
  
      let calorieBurn;
      switch (activity) {
        case 'sedentary':
          calorieBurn = bmr * 1.2;
          break;
        case 'light':
          calorieBurn = bmr * 1.375;
          break;
        case 'moderate':
          calorieBurn = bmr * 1.55;
          break;
        case 'active':
          calorieBurn = bmr * 1.725;
          break;
        case 'veryActive':
          calorieBurn = bmr * 1.9;
          break;
        case 'extraActive':
          calorieBurn = bmr * 2.425;
          break;
        default:
          calorieBurn = 0;
      }
  
      resultElement.innerHTML = `
      <div class="result-box">
        <p class="result-text">Your daily calorie burn is approximately ${calorieBurn.toFixed(2)} calories.</p>
      </div>
    `;
document.getElementById('weight-input').value = '';
  document.getElementById('height-feet-input').value = '';
  document.getElementById('height-inches-input').value = '';
  document.getElementById('age-input').value = '';
  document.getElementById('gender-select').value = 'male';
  document.getElementById('activity-select').value = 'sedentary';
    }
  });