$(function () {

    /*loading animation*/
    $body = $("body");

    $(document).on({
        ajaxStart: function() { $body.addClass("loading");    },
        ajaxStop: function() { $body.removeClass("loading"); }
    });

    /*button functioning*/
    $('#sb').click(function searchById() {
        $(".divTableHeading").empty();
        $(".divTableBody").empty();
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: { userId: $('input[name="idwtsearch"]').val() },
            dataType: 'json',
            success: function (data) {
                if ($.trim(data)) {
                    var divTopRow = $("<div>").addClass("divTableRow");
                    var divTopId = $("<div>").addClass("divTableCell").html('ID');
                    var divTopTitle = $("<div>").addClass("divTableCell").html('Title');
                    var divTopBody = $("<div>").addClass("divTableCell").html('Body');
                    divTopRow.append(divTopId, divTopTitle, divTopBody);
                    $(".divTableHeading").append(divTopRow);
                    $.each(data, function(index, element) {
                        $("#jsonTable").append($("<p>").html(element.id));

                        var divRow = $("<div>").addClass("divTableRow");
                        var divCellId = $("<div>").addClass("divTableCell").html(element.id);
                        var divCellTitle = $("<div>").addClass("divTableCell").html(element.title);
                        var divCellBody = $("<div>").addClass("divTableCell").html(element.body);

                        divRow.append(divCellId, divCellTitle, divCellBody);
                        $(".divTableBody").append(divRow);
                    });
                }
                else {
                    alert("Data doesn't exist.")
                }
            }
        });
    });

    $('#da').click(function searchAll() {
        $(".divTableHeading").empty();
        $(".divTableBody").empty();
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json',
            success: function (data) {
                if ($.trim(data)) {
                    var divTopRow = $("<div>").addClass("divTableRow");
                    var divTopUserId = $("<div>").addClass("divTableCell").html('UserID');
                    var divTopId = $("<div>").addClass("divTableCell").html('ID');
                    var divTopTitle = $("<div>").addClass("divTableCell").html('Title');
                    var divTopBody = $("<div>").addClass("divTableCell").html('Body');
                    divTopRow.append(divTopUserId, divTopId, divTopTitle, divTopBody);
                    $(".divTableHeading").append(divTopRow);
                    $.each(data, function(index, element) {
                        $("#jsonTable").append($("<p>").html(element.id));

                        var divRow = $("<div>").addClass("divTableRow");
                        var divCellUserId = $("<div>").addClass("divTableCell").html(element.userId)
                        var divCellId = $("<div>").addClass("divTableCell").html(element.id);
                        var divCellTitle = $("<div>").addClass("divTableCell").html(element.title);
                        var divCellBody = $("<div>").addClass("divTableCell").html(element.body);

                        divRow.append(divCellUserId, divCellId, divCellTitle, divCellBody);
                        $(".divTableBody").append(divRow);
                    });
                }
                else {
                    alert("Data doesn't exist.")
                }
            }
        });
    });
});
