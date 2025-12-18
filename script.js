// Bar Chart
const barCtx = document.getElementById('barChart');

new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Sales (₹)',
            data: [12000, 19000, 15000, 22000, 18000],
            backgroundColor: '#3498db'
        }]
    }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart');

new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Electronics', 'Clothing', 'Groceries'],
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['#e74c3c', '#f1c40f', '#2ecc71']
        }]
    }
});
