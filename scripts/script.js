let selectedRating = null;

const ratingInputs = document.querySelectorAll('.rating-options input[type="radio"]');
const ratingText = document.getElementById("selected-rating-text");
const ratingContainer = document.getElementById("rating-container");
const thankYouMessage = document.getElementById("rating-thank-you");

ratingInputs.forEach(input => {
    input.addEventListener('change', () => {
        selectedRating = input.value;
        console.log("Rating seleccionado:", selectedRating);
    });
});


function handleSubmit(event) {
    event.preventDefault();


    if (!selectedRating) {
        alert("Please select a rating before submitting.");
        return;
    }

    ratingText.textContent = `You selected ${selectedRating} out of 5`;
    ratingContainer.classList.remove("show");
    thankYouMessage.classList.add("show");
}
