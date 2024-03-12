var pincodesByState = {
    "state1": ["Chilkaluripeta", "registrationId2_state1", "registrationId3_state1"],
    "state2": ["registrationId1_state2", "registrationId2_state2", "registrationId3_state2"],
    "state3": ["registrationId1_state3", "registrationId2_state3", "registrationId3_state3"]
    // Add more registration IDs for each state as needed
};

var plantsByState = {
    "Andhra Pradesh": ["GAZUWAKA", "Chilkaluripeta", "GOOTY", "KADAPA", "KURNOOL", "NAGARJUNSAGAR", "NELLORE", "NELLORE PS", "NP KUNTA", "SRIKAKULAM", "VEMAGIRI", "VIJAYAWADA", "VIZAGHVDC" ],
    "state2": ["Plant 4", "Plant 5", "Plant 6"],
    "state3": ["Plant 7", "Plant 8", "Plant 9"]
    // Add more names of plants for each state as needed
};

function populateRegistrationIdAndPlants() {
    var stateDropdown = document.getElementById("stateDropdown");
    var pincodeDropdown = document.getElementById("pincodeDropdown");
    var plantDropdown = document.getElementById("plantDropdown");
    var selectedState = stateDropdown.value;

    console.log("Selected State:", selectedState);

    // Clear existing options
    pincodeDropdown.innerHTML = '<option value="">Select Pin Code</option>';
    plantDropdown.innerHTML = '<option value="">Select Name of Plant</option>';

    // Populate pin codes based on the selected state
    if (selectedState && pinCodesByState[selectedState]) {
        pinCodesByState[selectedState].forEach(function(pincode) {
            var option = document.createElement("option");
            option.text = pincode;
            option.value = pincode;
            pincodeDropdown.add(option);
        });
    } else {
        console.log("No pin codes found for the selected state.");
    }

    // Populate plants based on the selected state
    if (selectedState && plantsByState[selectedState]) {
        plantsByState[selectedState].forEach(function(plant) {
            var option = document.createElement("option");
            option.text = plant;
            option.value = plant;
            plantDropdown.add(option);
        });
    } else {
        console.log("No plants found for the selected state.");
    }
}

function validateForm() {
    var stateDropdown = document.getElementById("stateDropdown");
    var pincodeDropdown = document.getElementById("pincodeDropdown");
    var plantDropdown = document.getElementById("plantDropdown");

    if (stateDropdown.value === "" || pincodeDropdown.value === "" || plantDropdown.value === "") {
        alert("Please fill in all the required fields.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}