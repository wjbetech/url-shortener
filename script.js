// document grabbers
const shortenButton = document.getElementById("shorten-button");
const reloadButton = document.getElementById("reload-button");

// event handlers
shortenButton.addEventListener("click", () => {
    shortenUrl();
})

reloadButton.addEventListener("click", () => {
    location.reload();
});

// functionality
function shortenUrl() {

    let originaUrl = document.getElementById("original-url").value;
    let apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originaUrl);
    let resultArea = document.getElementById("shortened-url");

    fetch(apiUrl).then(response => response.text()).then(data => {
        resultArea.value = data;
    }).catch(error => {
        resultArea.value = "Error! Try again"
        console.log(error);
    })
}

