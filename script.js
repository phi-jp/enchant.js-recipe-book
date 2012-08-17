/*
 * script.js
 */

var $query = function(query, index) {
    return (index) ?
        document.querySelectorAll(query)[index] : 
        document.querySelector(query);
};
var $queryAll = function(query) {
    return document.querySelectorAll(query);
};


/*
 * main
 */
window.onload = function() {
    
    var preview     = document.getElementById("preview-frame");
    var links       = $queryAll(".chapter ol a");
    var title       = $query("#preview-title");
    
    for (var i=0,len=links.length; i<len; ++i) {
        var a = links[i];
        a.setAttribute("target", "preview");
        a.onclick = function() {
            preview.contentWindow.focus();
            
            title.innerHTML = this.innerHTML;
        };
    }
    
    preview.onmouseover = function() {
        this.contentWindow.focus();
    };
    document.onkeypress = function() {
        preview.contentWindow.location.reload();
    };
    
};

