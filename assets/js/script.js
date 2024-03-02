document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('googleSearch').addEventListener('click', function() {
        executeSearch(false)
    });

    document.getElementById('luckySearch').addEventListener('click', function() {
        executeSearch(true)
    })

    function executeSearch(lucky) {
        const searchQuery = document.getElementById('search').value
        let url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery)
        if (lucky) {
            url += '&btnI=1'
        }
        window.location.href = url
    }

    const input = document.getElementById('search')

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            executeSearch(false)
        }
    })
})