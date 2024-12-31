<script>
const closeButton = document.querySelector('.close-btn');
const checkbox = document.querySelector('.tour-modal-checkbox');

closeButton.addEventListener('click', () => {
    checkbox.checked = false; // Uncheck the checkbox to hide the modal
    localStorage.removeItem('showModal');

    const modal = document.querySelector('.tour-modal');
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        checkbox.checked = false;
});

</script>
            
