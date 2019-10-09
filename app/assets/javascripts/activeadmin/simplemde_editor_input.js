$(document).ready(function () {
    $('.simplemde-editor').each(function () {
        var options = { element: $(this).get(0) };
        options = $.extend({}, options, $(this).data('options'));
        var editor = new SimpleMDE(options);
        $(this).data({editor: editor});
    });
});