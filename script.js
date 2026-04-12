document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crop-listing-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const cropName = document.getElementById('crop-name').value;
        const landSize = document.getElementById('land-size').value;
        const expectedYield = document.getElementById('expected-yield').value;
        const totalShares = document.getElementById('total-shares').value;
        const pricePerShare = document.getElementById('price-per-share').value;

        // Construct message
        const message = `
🌟 Crop Listing Submitted Successfully!

------------------------------------
🌾 Crop Name: ${cropName}
📏 Land Size: ${landSize} Acres
📈 Expected Yield: ${expectedYield}
💎 Total Shares: ${totalShares}
💰 Price per Share: ₹${pricePerShare}
------------------------------------

Thank you for listing your crop on FarmDirect!
        `;

        // Trigger alert
        alert(message.trim());

        // Optional: Reset form after alert
        // form.reset();
    });
});
