// script.js
document.addEventListener('DOMContentLoaded', function() {
    const pricingForm = document.getElementById('pricingForm');
    const pricePerMessageElement = document.getElementById('pricePerMessage');
    const totalPriceElement = document.getElementById('totalPrice');

    pricingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const country = document.getElementById('country').value;
        const messageType = document.getElementById('messageType').value;
        const numberOfMessages = parseInt(document.getElementById('numberOfMessages').value);

        // This is a simplified pricing logic. You should replace it with your actual pricing data.
        const basePrice = 0.05; // Base price per message
        let priceMultiplier = 1;

        switch(country) {
            case 'EG':
            case 'SA':
            case 'AE':
                priceMultiplier = 1.2;
                break;
            case 'BH':
            case 'KW':
            case 'QA':
                priceMultiplier = 1.5;
                break;
            // Add more country-specific pricing as needed
        }

        switch(messageType) {
            case 'service':
            case 'authentication':
                priceMultiplier *= 0.9;
                break;
            case 'marketing':
                priceMultiplier *= 1.2;
                break;
            // Add more message type-specific pricing as needed
        }

        const pricePerMessage = basePrice * priceMultiplier;
        const totalPrice = pricePerMessage * numberOfMessages;

        pricePerMessageElement.textContent = `$${pricePerMessage.toFixed(2)}`;
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    });

    // Language switcher functionality
    const languageSelector = document.querySelector('#languageSelector select');
    languageSelector.addEventListener('change', function() {
        const selectedLanguage = this.value;
        // Implement language switching logic here
        console.log(`Language changed to: ${selectedLanguage}`);
        // You would typically load new language strings and update the UI here
    });
});
