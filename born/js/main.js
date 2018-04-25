return $(".internal__form-notes").hasClass("notes-emea")

if(!$(".internal__form-notes").hasClass("notes-emea")) {
    if (!notes || !caseno) {
        console.log("FIRST OPTION")
        type == "return" ? $(".return_item_error").html($(this).data('noteserror')) : $(".replacement_item_error").html($(this).data('noteserror'));
        return;
    }
} else {
    if ( !caseno) {
        console.log("SECOND OPTION")
        type == "return" ? $(".return_item_error").html($(this).data('noteserror')) : $(".replacement_item_error").html($(this).data('noteserror'));
        return;
    }
}




if ($(".internal__form-notes").hasClass("notes-emea")) {
    if (!caseno) {
        console.log("FIRST OPTION")
        type == "return" ? $(".return_item_error").html($(this).data('noteserror')) : $(".replacement_item_error").html($(this).data('noteserror'));
        return;
    }
} else {
    if (!notes || !caseno) {
        console.log("SECOND OPTION")
        type == "return" ? $(".return_item_error").html($(this).data('noteserror')) : $(".replacement_item_error").html($(this).data('noteserror'));
        return;
    }
}




if ($(".internal__form-notes input").hasClass("notes-emea")) {
    if (!caseno) {
        console.log("FIRST OPTION")
        type == "return" ? $(".return_item_error").html($(this).data('noteserror')) : $(".replacement_item_error").html($(this).data('noteserror'));
        return;
    }
}
if ($(".internal__form-notes input").hasClass("emeaz")) {
    if (!notes || !caseno) {
        type == "return" ? $(".return_item_error").html($(this).data('noteserror')) : $(".replacement_item_error").html($(this).data('noteserror'));
        return;
    }


}



// ORIGINAL

if (!notes || !caseno) {
    type == "return" ? $(".return_item_error").html($(this).data('noteserror')) : $(".replacement_item_error").html($(this).data('noteserror'));
    return;
}