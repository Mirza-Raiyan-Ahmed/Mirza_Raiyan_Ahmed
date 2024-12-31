<script>
    // Close the modal and optionally navigate to a target
    function navigateAndClose(target) {
        const checkbox = document.getElementById('tourModal');
        if (checkbox) checkbox.checked = false; // Uncheck the checkbox
        if (target) location.href = target; // Navigate if a target is provided
    }

    // Add event listeners for buttons and modal interactions
    document.addEventListener('DOMContentLoaded', () => {
        const checkbox = document.querySelector('.tour-modal-checkbox');
        const closeButton = document.querySelector('#closeBtn');
        const crossButton = document.querySelector('#crossBtn');
        const modal = document.querySelector('.tour-modal');
        const tourButtons = document.querySelectorAll('.tour-button'); // Add correct selector for tour buttons

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                if (checkbox) checkbox.checked = false;
                localStorage.removeItem('showModal'); // Clear modal state
            });
        }

        if (crossButton) {
            crossButton.addEventListener('click', () => {
                if (checkbox) checkbox.checked = false;
                localStorage.removeItem('showModal');
            });
        }

        if (modal && checkbox) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    checkbox.checked = false; // Close modal if background is clicked
                }
            });
        }

        // Handle tour buttons
        if (tourButtons) {
            tourButtons.forEach((button) => {
                button.addEventListener('click', (event) => {
                    event.preventDefault(); // Prevent default link behavior
                    const target = button.getAttribute('data-target'); // Use a custom attribute for targets
                    navigateAndClose(target); // Navigate and close modal
                });
            });
        }

        // Prevent modal from showing if stored state indicates otherwise
        const modalState = localStorage.getItem('showModal');
        if (modalState === 'false' && checkbox) {
            checkbox.checked = false;
        }
    });
</script>
