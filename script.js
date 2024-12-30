<script>
document.addEventListener('DOMContentLoaded', function () {
    const tourModalCheckbox = document.getElementById('tourModal');

    // Close modal when any button with 'modal-action' class is clicked
    document.querySelectorAll('.modal-action').forEach(button => {
        button.addEventListener('click', () => {
            tourModalCheckbox.checked = false;
        });
    });
});
</script>
