document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('text').value;
    const qrcodeElement = document.getElementById('qrcode');
    qrcodeElement.innerHTML = "";

    const qrCode = new QRCode(qrcodeElement, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    setTimeout(() => {
        const canvas = qrcodeElement.querySelector('canvas');
        if (canvas) {
            const imgData = canvas.toDataURL('image/jpeg');
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = imgData;
            downloadLink.download = 'qrcode.jpg';
            downloadLink.style.display = 'block';
            downloadLink.textContent = 'Download QR Code';
        }
    }, 500); // Give some time for the QR code to be generated
});
