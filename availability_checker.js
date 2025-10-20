javascript: (function() {
    const url = "https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=dcMximQdiiOP6xtTxeJb8g&key=";
    const key = "uqnqjxt9m16xEvC6QvQJyiLkNBECgZg0";
    fetch(url + key)
    .then(response => alert(response));
}())