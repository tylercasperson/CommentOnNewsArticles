function getNewsArticles(title, summary, url) {
    var mainCard = $("<div>").addClass("main-card card blue");
    var cardContent = $("<div>").addClass("card-content white-text");
    var cardTitle = $("<span>").addClass("card-title"); //possibly adjust depending on how the data comes accross
    var cardSummary = $("<span>").addClass("");
    cardContent.append(cardTitle, cardSummary);
    mainCard.append(cardContent);
}

function populatePageData() {
    $(".main-content").empty();
    var articleDiv = $("<div").addClass("articleDiv row");
    var titleDiv = $("<div>").addClass("col title");
    var summaryDiv = $("<div>").addClass("col summary")
    var urlDiv = $("<div>").addClass("col url");
    articleDiv.append(titleDiv, summaryDiv, urlDiv);
}

$("home").on("click", function (event) {
    event.preventDefault()
    populatePageData();
});
