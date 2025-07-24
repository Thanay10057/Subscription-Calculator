document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sub-form');
    const subList = document.getElementById('sub-list');
    const totalMonthlyEl = document.getElementById('total-monthly');
    const totalAnnualEl = document.getElementById('total-annual');

    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];

    // --- Event Listeners ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('sub-name').value;
        const cost = parseFloat(document.getElementById('sub-cost').value);
        const date = document.getElementById('sub-date').value;

        if (name && cost > 0 && date) {
            addSubscription(name, cost, date);
            form.reset();
        }
    });

    subList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.parentElement.dataset.index;
            removeSubscription(index);
        }
    });

    // --- Functions ---
    function addSubscription(name, cost, date) {
        subscriptions.push({ name, cost, date });
        updateAndSave();
    }

    function removeSubscription(index) {
        subscriptions.splice(index, 1);
        updateAndSave();
    }

    function updateAndSave() {
        renderSubscriptions();
        updateTotals();
        localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    }

    function updateTotals() {
        const totalMonthly = subscriptions.reduce((total, sub) => total + sub.cost, 0);
        const totalAnnual = totalMonthly * 12;

        totalMonthlyEl.textContent = `₹${totalMonthly.toFixed(2)}`;
        totalAnnualEl.textContent = `₹${totalAnnual.toFixed(2)}`;
    }

    function renderSubscriptions() {
        subList.innerHTML = ''; // Clear existing list

        if (subscriptions.length === 0) {
            subList.innerHTML = '<li>No subscriptions yet. Add one above!</li>';
            return;
        }

        subscriptions.forEach((sub, index) => {
            const li = document.createElement('li');
            li.className = 'sub-item';
            li.dataset.index = index;

            // Check for upcoming renewal
            const today = new Date();
            const billingDate = new Date(sub.date);
            const timeDiff = billingDate.getTime() - today.getTime();
            const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            
            if (dayDiff >= 0 && dayDiff <= 7) {
                li.classList.add('upcoming');
            }

            const formattedDate = billingDate.toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            li.innerHTML = `
                <div class="info">
                    <div class="name">${sub.name}</div>
                    <div class="date">Next billing: ${formattedDate}</div>
                </div>
                <div class="cost">₹${sub.cost.toFixed(2)}</div>
                <button class="delete-btn">X</button>
            `;
            subList.appendChild(li);
        });
    }

    // --- Initial Load ---
    updateAndSave();
});