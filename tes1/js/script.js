function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInCm = parseFloat(document.getElementById("height").value);
    const resultElement = document.getElementById("result"); // Added quotation marks

    if (weight > 0 && heightInCm > 0) {
        const heightInM = heightInCm / 100; // Convert cm to m
        const bmi = weight / (heightInM * heightInM);
        let category = "";
        
        if (bmi < 18.5) {
            category = "Kurus";
        } else if (bmi < 24.9) {
            category = "Normal";
        } else if (bmi < 29.9) {
            category = "Gendut";
        } else {
            category = "Obesitas";
        }

        // Corrected string interpolation
        resultElement.innerHTML = `Nilai BMI mu ${bmi.toFixed(2)} - ${category}`;
    } else {
        resultElement.innerHTML = 'Tolong masukkan nilai yang valid'; // Corrected spelling
    }
}

function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("result").innerHTML = "";
	
}
