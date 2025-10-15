const daySelect = document.querySelector(".day");
const monthSelect = document.querySelector(".month");
const yearSelect = document.querySelector(".year");

for (let i=1; i<=31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
}

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

months.forEach((month, index) => {
  const option = document.createElement("option");
  option.value = index + 1; 
  option.textContent = month;
  monthSelect.appendChild(option);
});

const currentYear = new Date().getFullYear();

for (let y = currentYear; y >= 1905; y--) {
  const option = document.createElement("option");
  option.value = y;
  option.textContent = y;
  yearSelect.appendChild(option);
}

const genderRadios = document.querySelectorAll("input[name='gender']");
const customGenderSection = document.querySelector(".custom_gender_section");
customGenderSection.style.display = "none";
genderRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "Custom") {
      customGenderSection.style.display = "flex";
    } else {
      customGenderSection.style.display = "none";
    }
  });
});

const passwordInput = document.querySelector(".password_wrapper input");
const tooltip = document.querySelector(".password_tooltip");

passwordInput.addEventListener("focus", () => {
  tooltip.classList.add("active");
});

passwordInput.addEventListener("blur", () => {
  tooltip.classList.remove("active");
});

const tooltipMap = [
  { input: ".name_wrapper input", tooltip: ".name_tooltip" },
  { input: ".surname_wrapper input", tooltip: ".surname_tooltip" },
  { input: ".mobile_wrapper input", tooltip: ".mobile_tooltip" },
];

tooltipMap.forEach(({ input, tooltip }) => {
  const inputEl = document.querySelector(input);
  const tooltipEl = document.querySelector(tooltip);

  inputEl.addEventListener("focus", () => {
    tooltipEl.classList.add("active");
  });

  inputEl.addEventListener("blur", () => {
    tooltipEl.classList.remove("active");
  });
});


const form = document.querySelector(".account_signup");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.querySelectorAll(".error-icon").forEach(el => el.remove());
    form.querySelectorAll("input").forEach(input => {
    input.style.borderColor = "#ccc";
  });

  let isValid = true;

  const requiredInputs = form.querySelectorAll("input[required]");

  requiredInputs.forEach(input => {
    input.parentElement.style.position = "relative";
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      isValid = false;
      const icon = document.createElement("span");
      icon.className = "error-icon";
      icon.textContent = "!";
      input.parentElement.appendChild(icon);
      input.addEventListener("input", () => {
        input.style.borderColor = "#ccc";
        const existingIcon = input.parentElement.querySelector(".error-icon");
        if (existingIcon) existingIcon.remove();
      }); 
      
    }
  });

  if (!isValid) return;
  const firstName = form.querySelectorAll("input[type='text']")[0].value;
  const surname = form.querySelectorAll("input[type='text']")[1].value;
  const email = form.querySelectorAll("input[type='text']")[2].value;
  const password = form.querySelector("input[type='password']").value;
  const gender = form.querySelector("input[name='gender']:checked")?.value;
  const day = daySelect.value;
  const month = monthSelect.value;
  const year = yearSelect.value;

  alert(`Welcome, ${firstName}! Your account has been created successfully 🎉`);
  form.reset(); 
  customGenderSection.style.display = "none";
});
form.querySelectorAll("input").forEach(input => {
  input.addEventListener("focus", () => {
    const icon = input.parentElement.querySelector(".error-icon");
    if (icon) icon.style.opacity = "0";
    input.style.borderColor = "#1877f2"; 
  });

  input.addEventListener("blur", () => {
    const icon = input.parentElement.querySelector(".error-icon");
    if (icon && !input.value.trim()) {
      icon.style.opacity = "1"; 
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "#ccc";
    }
  });
});