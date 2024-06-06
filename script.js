document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('newsletter-message').textContent = `Obrigado por se inscrever, ${email}!`;
    document.getElementById('newsletter-form').reset();
});

function search() {
    const query = document.getElementById('search-input').value;
    alert(`Você pesquisou por: ${query}`);
}

// Dados fictícios de violência no Ceará para o gráfico
const violenceData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
        label: 'Casos de Violência',
        data: [120, 150, 180, 200, 170, 190, 210, 230, 250, 220, 240, 260],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

const ctx = document.getElementById('violenceChart').getContext('2d');
const violenceChart = new Chart(ctx, {
    type: 'bar',
    data: violenceData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
;
