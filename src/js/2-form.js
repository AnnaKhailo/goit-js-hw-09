const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);

function handleInput() {
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const data = JSON.stringify({email, message});
    localStorage.setItem(STORAGE_KEY, data);
}

const jsnSaveData = localStorage.getItem(STORAGE_KEY) ?? "";

try {
    const saveData = JSON.parse(jsnSaveData);
    form.elements.message.value = saveData.message;
    form.elements.email.value = saveData.email;
}
catch {
    console.log("No saved data");
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    
    if (!form.elements.message.value || !form.elements.email.value) {
        return alert('All form fields must be filled in');
    } 

    console.log({
        email: form.elements.email.value.trim(), 
        message: form.elements.message.value.trim(),
    });

    form.reset();
}




