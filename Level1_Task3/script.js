function convertTemperature() {
  const tempInput = document.getElementById('temperature').value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById('result');
  
  if (tempInput === '' || isNaN(tempInput)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }
  
  let temp = parseFloat(tempInput);
  let result = '';
  
  switch(unit) {
    case 'C':
      result = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(temp + 273.15).toFixed(2)}K`;
      break;
    case 'F':
      result = `Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C, Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
      break;
    case 'K':
      result = `Celsius: ${(temp - 273.15).toFixed(2)}°C, Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
      break;
  }
  
  resultDiv.textContent = result;
}