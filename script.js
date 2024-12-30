<script>
    // Function to hide the modal and navigate to the section
    function hideModalAndNavigate(sectionId) {
        // Uncheck the checkbox to hide the modal
        document.getElementById('tourModal').checked = false;
        
        // Navigate to the clicked section
        location.hash = sectionId;
    }
</script>
