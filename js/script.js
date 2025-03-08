$(document).ready(function() {
    var jobTitle = ["Software Engineer", "Data Analyst", "Marketing Manager", "Project Manager", "Sales Executive", "HR Manager"];
    var location = ["Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Eindhoven", "Maastricht"];

    $("#search-job-title").autocomplete({
        source: jobTitle
    });

    $("#search-location").autocomplete({
        source: location
    });

    //multiselect drop down
           // Toggle dropdown
           $("#dropdownBtn").click(function () {
            $(".dropdown-content").toggleClass("show");
        });

        $(".multi-select").change(function () {
            var selected = [];
            $(".multi-select:checked").each(function () {
                selected.push($(this).val());
            });
            $("#selectedOptions").html(selected.length ? selected.join(", ") : "None selected");
        });
        $(document).click(function (event) {
            if (!$(event.target).closest(".custom-dropdown").length) {
                $(".dropdown-content").removeClass("show");
            }
        });
});