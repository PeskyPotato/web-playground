var input_sort = document.getElementById("input-sort");
var input_time_filter = document.getElementById("input-time-filter");
disableTimeFilter();

input_sort.addEventListener('input', disableTimeFilter);

function disableTimeFilter() {
    if(input_sort.value === "top"){
        input_time_filter.disabled = false;
    } else {
        input_time_filter.disabled = true;
    }
}
