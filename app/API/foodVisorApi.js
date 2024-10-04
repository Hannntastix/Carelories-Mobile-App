const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

const url = "https://vision.foodvisor.io/api/1.0/en/analysis/";
const apiKey = "<sSMAS2Kp.WQT0QR4caVp4gqMzLPGb3mPNbqZ4VYuA>"; // Ganti dengan API Key Anda
const imagePath = "../assets/images/image.jpg"; // Ganti dengan path ke gambar Anda

const sendImageToFoodvisor = async () => {
    const form = new FormData();
    form.append('image', fs.createReadStream(imagePath)); {/* masih error */}

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": `Api-Key ${apiKey}`,
                ...form.getHeaders(), // Menyertakan header dari FormData
            },
            body: form,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error sending image:', error.message);
    }
};

sendImageToFoodvisor();
