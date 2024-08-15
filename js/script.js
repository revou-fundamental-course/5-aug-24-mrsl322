function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInCm = parseFloat(document.getElementById("height").value);
    const resultElement = document.getElementById("result"); // Added quotation marks

    if (weight > 0 && heightInCm > 0) {
        const heightInM = heightInCm / 100; // ubah cm ke m
        const bmi = weight / (heightInM * heightInM);
        let category = "";
        // Logika Form kalkulasi BMI
        if (bmi < 16.8) {
            category = "Kurang Gizi";
        } else if (bmi < 18.4) {
            category = "Kurus"
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

function resetForm() { //button reset untuk mengkosongkan form
    document.getElementById("weight").value = ""; //mengkosongkan kolom berat
    document.getElementById("height").value = "";   //mengkosongkan kolom tinggi
    document.getElementById("gender").value = ""; //mengkosongkan kolom gender
    document.getElementById("result").innerHTML = ""; //mengkosongkan hasil kalkulasi
	
}
