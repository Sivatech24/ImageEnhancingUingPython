document.addEventListener("DOMContentLoaded", function() {
    // Simulated data, replace with your dataset
    const data = {
        daily: {
            date: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            consumption: [80, 95, 92, 110, 105, 100, 115]
        },
        monthly: {
            month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            consumption: [1200, 1300, 1400, 1500, 1600, 1700, 1800]
        }
    };

    // Create daily and monthly charts
    createCustomChart("daily-chart", data.daily.date, data.daily.consumption, "Daily Consumption", "Date", "Consumption (Gallons)");
    createCustomChart("monthly-chart", data.monthly.month, data.monthly.consumption, "Monthly Consumption", "Month", "Consumption (Gallons)");

    // Function to create a custom line chart
    function createCustomChart(containerId, labels, data, title, xLabel, yLabel) {
        const container = document.getElementById(containerId);
        const canvas = document.createElement("canvas");
        container.appendChild(canvas);
        
        const ctx = canvas.getContext("2d");
        canvas.width = 400;
        canvas.height = 200;

        const maxValue = Math.max(...data);

        const barWidth = 30;
        const spacing = (canvas.width - barWidth * labels.length) / (labels.length + 1);

        ctx.fillStyle = "lightblue";

        for (let i = 0; i < labels.length; i++) {
            const barHeight = (data[i] / maxValue) * canvas.height;
            const x = spacing + (i * (spacing + barWidth));
            const y = canvas.height - barHeight;
            ctx.fillRect(x, y, barWidth, barHeight);
        }

        // Draw axes and labels
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, canvas.height);
        ctx.stroke();

        // Label x-axis
        for (let i = 0; i < labels.length; i++) {
            const x = spacing + (i * (spacing + barWidth)) + barWidth / 2;
            ctx.fillText(labels[i], x, canvas.height + 15);
        }

        // Label y-axis
        ctx.save();
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(yLabel, -canvas.height / 2, 10);
        ctx.restore();

        // Add title
        container.insertAdjacentHTML("afterbegin", `<p>${title}</p>`);
    }
});
