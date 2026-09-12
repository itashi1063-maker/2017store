// قاموس يربط أسماء الألعاب بروابط التنزيل المباشر لملفات الـ APK
const apkDownloadLinks = {
    "Subway Surfers": "https://drive.google.com/uc?export=download&id=1t2_Sr9xxu94Z0EjMwcHnIpqsQgjnn3ga",
    "Pou": "https://drive.google.com/uc?export=download&id=1Xo5Xql-CsrJsYHCptXG-zykpMDXf-6Xk",
    "Craft Block 3D": "https://drive.google.com/uc?export=download&id=1AaNACq-HqQymQPFwv6swDgSX7cIFHCQW",
    "Minecraft": "https://drive.google.com/uc?export=download&id=14YJ_dSthaBl8kfVTmT6rfUhOfW6TJ5N7",
    "Lucky Block Race": "https://drive.google.com/uc?export=download&id=1whyKvGBrxDkDkd4_83wtu29V9Bnkrt-_",
    "Red Ball 4": "https://drive.google.com/uc?export=download&id=15yjhOIZKMF459s0BmNFd606HhI_wHrMQ",
    "Angry Birds": "https://drive.google.com/uc?export=download&id=1jekIqfgx1ZMOhYvRcAPjkZ7gF1Yjx-G2",
    "Talking Tom Gold Run": "https://drive.google.com/uc?export=download&id=1RTW8wx2VYEbpgSOGf9d3sKnMDJsuSflX",
    "My Talking Tom": "https://drive.google.com/uc?export=download&id=1u43lLBKtNW5dDmC1FFmM_9wkRTE-8-l3",
    "Super Bear Adventure": "https://drive.google.com/uc?export=download&id=1HYmBzVj5Ey910AiteIG9K7kS5PKCcyS1",
    "My Talking Hank": "https://drive.google.com/uc?export=download&id=1zviZqliJPZiooIgrdLOGJnDJ1Ewm1sZy",
    "Moy Virtual Pet": "https://drive.google.com/uc?export=download&id=1AcOHRe4Ullp2ENunyj3TFEaBQjwX0eSy",
    "Sonic Dash": "https://drive.google.com/uc?export=download&id=1XLcHMg8QTkYLdNmAFecHGNflKSs6Dcca",
    "My Bear": "https://drive.google.com/uc?export=download&id=1-xzpXRe3uydRfUdsJKj9EsOeOA3crjMR"
};

// دالة التنزيل عند الضغط على الزر
function downloadGame(gameName) {
    const downloadUrl = apkDownloadLinks[gameName];

    if (downloadUrl) {
        // إنشاء عنصر <a> وهمي لبدء التنزيل فوراً
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.setAttribute('download', '');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert("رابط التنزيل غير متوفر لهذه اللعبة حالياً.");
    }
}

// التفاعل عند الضغط على التبويبات العلويّة
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});