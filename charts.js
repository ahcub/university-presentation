const chartData = {
    users: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        data: [1, 3, 5, 8, 18, 35, 42, 106, 221, 320, 425, 480, 530, 580],
        color: '#627eea'
    },
    volume: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        data: [0.1, 0.5, 1.2, 3.5, 14, 8, 12, 35, 120, 65, 45, 85, 150, 200],
        color: '#00d395'
    },
    marketCap: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        data: [1.5, 5, 4, 15, 600, 130, 180, 780, 2900, 850, 1200, 2400, 3500, 5000],
        color: '#f7931a'
    },
    dominance: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        data: [95, 90, 85, 87, 38, 52, 68, 70, 42, 40, 48, 52, 48, 45],
        color: '#ff6b9d'
    }
};

function drawChart(canvasId, data, label, suffix = '') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const width = rect.width;
    const height = rect.height;
    const padding = 50;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    const maxValue = Math.max(...data.data);
    const minValue = Math.min(...data.data);
    const valueRange = maxValue - minValue;
    
    ctx.clearRect(0, 0, width, height);
    
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
        
        const value = maxValue - (valueRange / 5) * i;
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
        ctx.textAlign = 'right';
        ctx.fillText(value.toFixed(0) + suffix, padding - 10, y + 4);
    }
    
    const points = [];
    data.data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.data.length - 1)) * index;
        const normalizedValue = (value - minValue) / valueRange;
        const y = padding + chartHeight - (normalizedValue * chartHeight);
        points.push({ x, y, value });
    });
    
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, data.color + '40');
    gradient.addColorStop(1, data.color + '00');
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    points.forEach((point, index) => {
        if (index === 0) {
            ctx.lineTo(point.x, point.y);
        } else {
            const prevPoint = points[index - 1];
            const cpX = (prevPoint.x + point.x) / 2;
            ctx.bezierCurveTo(cpX, prevPoint.y, cpX, point.y, point.x, point.y);
        }
    });
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point, index) => {
        if (index === 0) return;
        const prevPoint = points[index - 1];
        const cpX = (prevPoint.x + point.x) / 2;
        ctx.bezierCurveTo(cpX, prevPoint.y, cpX, point.y, point.x, point.y);
    });
    ctx.strokeStyle = data.color;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    points.forEach((point, index) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = data.color;
        ctx.fill();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        if (index % 2 === 0 || data.labels.length <= 10) {
            ctx.fillStyle = '#94a3b8';
            ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
            ctx.textAlign = 'center';
            ctx.fillText(data.labels[index], point.x, height - padding + 20);
        }
    });
    
    canvas.style.cursor = 'crosshair';
    
    canvas.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        let hoveredPoint = null;
        points.forEach((point, index) => {
            const distance = Math.sqrt(Math.pow(mouseX - point.x, 2) + Math.pow(mouseY - point.y, 2));
            if (distance < 10) {
                hoveredPoint = { ...point, index };
            }
        });
        
        if (hoveredPoint) {
            canvas.title = `${data.labels[hoveredPoint.index]}: ${hoveredPoint.value}${suffix}`;
        } else {
            canvas.title = '';
        }
    };
}

function initializeCharts() {
    drawChart('usersChart', chartData.users, 'Users', 'M');
    drawChart('volumeChart', chartData.volume, 'Volume', 'B');
    drawChart('marketCapChart', chartData.marketCap, 'Market Cap', 'B');
    drawChart('dominanceChart', chartData.dominance, 'Dominance', '%');
}

window.addEventListener('resize', () => {
    initializeCharts();
});

