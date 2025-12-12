let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const list = document.getElementById("list");
const chartCanvas = document.getElementById("chart");
let chart;

// Add expense
function addExpense() {
  const title = document.getElementById("title").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const category = document.getElementById("category").value;

  if (!title || !amount) return alert("Enter all fields!");

  const expense = {
    title,
    amount: Number(amount),
    category,
    date: new Date().toLocaleDateString()
  };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";

  renderList();
  renderChart();
}

// Display list
function renderList() {
  list.innerHTML = "";
  expenses.forEach((e, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${e.title} - R${e.amount} (${e.category})
      <span style="cursor:pointer;color:red" onclick="deleteExpense(${index})">✖</span>
    `;

    list.appendChild(li);
  });
}

// Delete expense
function deleteExpense(i) {
  expenses.splice(i, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderList();
  renderChart();
}

// Chart
function renderChart() {
  const categories = {};
  expenses.forEach(e => {
    categories[e.category] = (categories[e.category] || 0) + e.amount;
  });

  const labels = Object.keys(categories);
  const data = Object.values(categories);

  if (chart) chart.destroy();

  chart = new Chart(chartCanvas, {
    type: "pie",
    data: {
      labels,
      datasets: [{
        data
      }]
    }
  });
}

// Init
renderList();
renderChart();
