function toggle_things(e) {
  $(".togglable").hide();
  $($(e).attr("currentTarget")).parent(".togglable").show();
  $($(e).attr("currentTarget")).next(".togglable").show();
};

$(document).ready(function() {
  var tab_index = 1;
  $(".toggle_title").each(function() {
    $(this).attr("tabIndex", tab_index);
    tab_index++;
  });

  $(".toggle_title").focus(toggle_things);
});
