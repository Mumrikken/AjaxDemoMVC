// because jQuery is hard, ill try to explain everything right here with comments
$(document).ready(function () { // $ is the alias for jQuery object, and $() is usually a selector, so this selects the whole html page
    $(document).on('submit', '#nameForm', function (e) { //Binding a event listener to the document, so to the submit in the nameform
        e.preventDefault(); //prevents the default action, in this case prevents the form submission

        let name = $("#nameInput").val(); // Let name, just makes variable, then $("nameInput") is targeting the input field, and val() is for the selected value

        $.post("/Home/SubmitName", { name: name }, function (response) { //$.post is sending an asynchronous HTTP POST request
            // Appending the new name in a new line
            $("#nameDisplay").append('<div>' + response.name + '</div>');

            // Optional: Clear the input after submitting
            $("#nameInput").val('');
        });
    });
});