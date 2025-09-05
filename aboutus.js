document.addEventListener('DOMContentLoaded', () => {
    const lineCtx = document.getElementById('lineChart');
    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
                datasets: [{
                    label: 'Signups',
                    data: [12, 19, 15, 22, 18, 25], 
                    borderColor: '#4f46e5',
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false }
                }
            }
        });
    }

    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
                datasets: [{
                    label: 'Revenue',
                    data: [3, 5, 6, 8, 7, 9], 
                    backgroundColor: '#16a34a'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false }
                }
            }
        });
    }
    
    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Organic', 'Referral', 'Social'], 
                datasets: [{
                    label: 'Traffic Source',
                    data: [55, 25, 20], 
                    backgroundColor: ['#f59e0b', '#f97316', '#ea580c']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
            }
        });
    }

});