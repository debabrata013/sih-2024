function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

function scrollToMap() {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {pageLanguage: 'en'},
      'google_translate_element'
    );
  }
  function submitFeedback() {
    const rating = document.querySelector('input[name="stars"]:checked');
    const feedback = document.getElementById('feedback').value;
    const messageElement = document.getElementById('message');

    // Reset message visibility
    messageElement.classList.remove('message-visible');

    if (!rating) {
        messageElement.textContent = 'Please select a rating.';
        messageElement.style.color = 'red';
        messageElement.classList.add('message-visible');
        return;
    }

    if (feedback.trim() === '') {
        messageElement.textContent = 'Please provide feedback.';
        messageElement.style.color = 'red';
        messageElement.classList.add('message-visible');
        return;
    }

    // Simulate form submission
    messageElement.textContent = 'Thank you for your feedback!';
    messageElement.style.color = 'green';
    messageElement.classList.add('message-visible');

    // Simulate sending data to the backend
    console.log(`Rating: ${rating.value}, Feedback: ${feedback}`);

    // Reset form fields after submission
    document.getElementById('feedbackForm').reset();

    // Automatically hide the message after a few seconds
    setTimeout(() => {
        messageElement.classList.remove('message-visible');
    }, 3000);
}
