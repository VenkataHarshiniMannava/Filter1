document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const itemList = document.getElementById("itemList").getElementsByTagName("li");

    // Function to filter items based on search string
    function filterItems(searchString) {
        const searchTerm = searchString.trim().toLowerCase();

        for (const item of itemList) {
            const itemName = item.getAttribute("data-name").toLowerCase();
            const itemDescription = item.getAttribute("data-description").toLowerCase();

            // Check if the search string is found in the item name or description
            if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) {
                item.style.display = "block"; // Show the item
            } else {
                item.style.display = "none"; // Hide the item
            }
        }
    }

    // Event listener for search input changes
    searchInput.addEventListener("input", function (event) {
        const searchString = event.target.value;
        filterItems(searchString);
    });
});
