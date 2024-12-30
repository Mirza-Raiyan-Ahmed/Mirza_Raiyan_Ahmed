<script>
document.addEventListener('DOMContentLoaded', function () {
    const tourModalCheckbox = document.getElementById('tourModal'); // The checkbox for modal visibility
    const modalActions = document.querySelectorAll('.modal-action'); // Buttons inside the modal
    const closeBtn = document.getElementById('closeBtn'); // Close button for the modal

    // Function to close the modal
    function closeModal() {
        tourModalCheckbox.checked = false; // Uncheck the modal checkbox to hide the modal
    }

    // Close the modal when any modal-action button is clicked
    modalActions.forEach(button => {
        button.addEventListener('click', () => {
            closeModal();
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    // Close the modal when the Esc key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
</script>
