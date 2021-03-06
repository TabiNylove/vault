// POST
//=====================================
$("#addItem").on("click", function() {
	var addItem = {
		name: $("#newItemName").val().trim(),
		description: $("#newItemDescribe").val().trim(),
		lent_out: false,
		CategoryId: $("#selectCategory").val(),
		UserId: 1
	}
    // ajax post
    $.post("/api/item", addItem, function(data) {
  
    });
});

$("#addCategory").on("click", function() {
	var addCategory = {
		name: $("#newCategoryName").val().trim()
	}
    // ajax post
    $.post("/api/categories", addCategory, function(data) {
        
    });
});

// GET
//=====================================
$("#addCategoryButton").on("click", function() {
	var url = "/api/categories";
	$.ajax({
  		dataType: "json",
  		type: "GET",
  		url: url,
  		data: Category,
  		success: function(data) {
  			console.log("Get category worked");
  		}
	});
})


// UPDATE
//=====================================
$("#lendItem").on("click", function() {
	$.ajax({
		url: "/lent_out",
		type: "PUT",
		data:{lent_out: true},
		success: function(result) {
			console.log(result);
			var lendItem = {
				due_date: $("#dueDate").val().trim(),
				type: "LEND",
				item_condition: $("#itemCondition").val().trim(),
				lendee: $("#newLendee").val().trim()
			}
		    // ajax post
		    $.post("/lendItem", lendItem, function(data) {
		        console.log(data + "lend posted!");
		    });
		}
	})
})

$("#returnItem").on("click", function() {
	$.ajax({
		url: "/return",
		type: "PUT",
		data:{lent_out: false},
		success: function(result) {
			console.log(result);
		}
	})


})
//=====================================
//=====================================
//=====================================