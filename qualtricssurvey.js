/* Dynamically calculate a respondent's total order cost. */

Qualtrics.SurveyEngine.addOnload(function() {
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function() {
	/*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function() {
	/*Place your JavaScript here to run when the page is unloaded*/
    var qid = this.questionId;
    const SHORTPRICE = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('ShortPrice'));
    const LONGPRICE = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('LongPrice'));
    var currentNumShort = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('NumShort'));
    var currentNumShort = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('NumShort'));
    var currentNumLong = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('NumLong'));
    var currentTotalPrice = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('TotalPrice'));
    var currentSleeveLength = jQuery("#" + qid + " select").find("option:selected").text();

    if (currentSleeveLength == "Short") {
        currentNumShort++;
        currentTotalPrice += SHORTPRICE;
    } else if (currentSleeveLength == "Long") {
        currentNumLong++;
        currentTotalPrice += LONGPRICE;
    }

    Qualtrics.SurveyEngine.setEmbeddedData('NumShort', currentNumShort)  
    Qualtrics.SurveyEngine.setEmbeddedData('NumLong', currentNumLong);
    Qualtrics.SurveyEngine.setEmbeddedData('TotalPrice', currentTotalPrice);
});
