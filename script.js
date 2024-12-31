// Function to navigate and close the modal
function navigateAndClose(target) {
    const modalCheckbox = document.getElementById('tourModal'); // Get the modal checkbox
    const targetElement = document.querySelector(target); // Get the target section

    if (modalCheckbox) {
        modalCheckbox.checked = false; // Close the modal by unchecking the checkbox
    }

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    } else {
        console.error(`Target section "${target}" not found!`);
    }
}

// Event listener for close button
document.getElementById('closeBtn').addEventListener('click', () => {
    const modalCheckbox = document.getElementById('tourModal');
    if (modalCheckbox) {
        modalCheckbox.checked = false; // Close the modal
    }
});
