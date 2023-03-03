{
    console.log("Script one")
    let is_date = function (input) {
        if (Object.prototype.toString.call(input) === "[object Date]") {
            return true;
        } else {
            return false;
        }
    };


    console.log(is_date("October 13, 2014 11:13:00"));
    console.log(is_date(new Date(86400000)));
    console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)));
    console.log(is_date([1, 2, 4, 0]));
}

{
    console.log("\nScript two")
    let date = "2010-01-01";
    let jsYear = new Date(date).getFullYear();
    let currentYear = new Date().getFullYear();
    let yearsDifference = (currentYear - jsYear) * 365;
    console.log(date + " с этой даты прошло " + yearsDifference + " дней.");

}

{
    console.log("\nScript three")
    function min_date(all_dates) {
        let minDate = all_dates[0],
            minDateObj = new Date(all_dates[0]);
        all_dates.forEach(function(date, index) {
            if (new Date(date) < minDateObj)
            {
                minDate = date;
                minDateObj = new Date(date);
            }
        });
        return minDate;
    }
    console.log(min_date(['2023/02/24', '2023/02/23', '2023/02/22']));
}