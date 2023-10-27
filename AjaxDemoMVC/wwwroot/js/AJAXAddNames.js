// because jQuery is hard, ill try to explain everything right here with comments
$(document).ready(function () {
    $(document).on('submit', '#nameForm', function (e) {
        e.preventDefault();

        let name = $("#nameInput").val();

        $.post("/Home/SubmitName", { name: name }, function (response) {
            // Appending the new name in a new line
            $("#nameDisplay").append('<div>' + response.name + '</div>');

            // Optional: Clear the input after submitting
            $("#nameInput").val('');
        });
    });
});