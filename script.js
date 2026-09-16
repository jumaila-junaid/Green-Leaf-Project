// GreenLeaf Plant Store
// Simple JavaScript Function

function showPlantTip() {
    const tips = [
        "🌱 Give your plants enough sunlight every day.",
        "💧 Avoid overwatering your plants.",
        "🌿 Remove dry leaves to keep your plants healthy.",
        "☀️ Place indoor plants where they can receive suitable light.",
        "🌼 Use good quality soil for better plant growth."
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    document.getElementById("tipMessage").textContent = randomTip;
}