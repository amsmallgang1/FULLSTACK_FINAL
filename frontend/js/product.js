$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData(){
        $("#plist").empty();
        // #12 Get all products and display as a table
        // use $.get
        $.get("https://localhost:8080/productdetail.html?pid=5de544bb632ecb818c49f01c_id", function (data, status) {
            console.log(status);
            console.log(data);
        // ===============================
    }
    
    // Update photo when URL has changed
    $("#photo").change(function(){
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post
        $.post("https://localhost:8080/", {suggest: txt}, funtion(result){$("span").html(result);
    });
}        // ===============================

    });
})