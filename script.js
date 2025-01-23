// Function to display values
function dis(val) {
    document.getElementById("result").value += val;
  }
  
  // Function to evaluate the expression
  let history = [];
  function solve() {
    try {
      let x = document.getElementById("result").value;
      let y = math.evaluate(x);
      document.getElementById("result").value = y;
      history.push(`${x} = ${y}`);
    } catch (error) {
      document.getElementById("result").value = "Error!";
    }
  }
  
  // Function to clear the display
  function clr() {
    document.getElementById("result").value = "";
  }
  
  // Function to toggle history
  function toggleHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join("");
    historyDiv.style.display = historyDiv.style.display === "block" ? "none" : "block";
  }
  
  // Allow keyboard input
  document.addEventListener("keydown", function (event) {
    const allowedKeys = "0123456789+-*/.";
    if (allowedKeys.includes(event.key)) {
      dis(event.key);
    } else if (event.key === "Enter") {
      solve();
    } else if (event.key === "Backspace") {
      const currentValue = document.getElementById("result").value;
      document.getElementById("result").value = currentValue.slice(0, -1);
    }
  });
  
  // Toggle light/dark mode based on checkbox state
  function toggleMode() {
    const isDarkMode = document.getElementById("mode-toggle").checked;
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.getElementById("mode-label").textContent = isDarkMode ? "Dark Mode" : "Light Mode";
  }
  