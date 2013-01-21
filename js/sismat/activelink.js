$(document).ready(function () {
    var curl = "";
    var hurl = "";
    curl += window.location;
    hurl += window.location.host;

    var surl = curl.replace("http://" + hurl, "");
    $("a[href='" + surl + "']").addClass("activelinkjs-selected");
});