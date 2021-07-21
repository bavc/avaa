(function() {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.length) { // Are there any results?
            var appendString = '';

            for (var i = 0; i < results.length; i++) { // Iterate over the results
                var item = store[results[i].ref];
                appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
                if (item.namevar) { // Are there any synonyms for the artefact?
                    var akaList = Array.prototype.join.call(item.namevar, ", ");
                    appendString += '<p><sub>Also known as: ' + akaList + ' </sub></p></li>';
                }
                appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
            }

            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<li>No results found</li>';
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('query');
    var redirectTerm = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].replace('_', ' ');

    if (searchTerm || redirectTerm) {
        if (searchTerm) {
            document.getElementById('search-box').setAttribute("value", searchTerm);
        };

        // Initalize lunr with the fields it will be searching on. I've given title
        // and namevar a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function() {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('lang'),
                this.field('namevar', { boost: 10 });
            this.field('categories');
            this.field('tags');
            this.field('content');
        });

        for (var key in window.store) { // Add the data to lunr
            idx.add({
                'id': key,
                'title': window.store[key].title,
                'lang': window.store[key].lang,
                'namevar': window.store[key].namevar,
                'categories': window.store[key].categories,
                'tags': window.store[key].tags,
                'content': window.store[key].content
            });

            if (searchTerm) {
                var results = idx.search(searchTerm);
            } else {
                var results = idx.search(redirectTerm);
            }
            displaySearchResults(results, window.store);
        }
    }
})();