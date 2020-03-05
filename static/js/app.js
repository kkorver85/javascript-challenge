// from data.js
var tableData = data;

// YOUR CODE HERE!

// table elements
var tbody = d3.select("tbody");


function buildTable(data){
    // clear exisiting data
    tbody.html("");

    // loop through data
    data.forEach(function(dataRow){
        var row = tbody.append("tr");

        Object.values(dataRow).forEach(function(val){
            var cell = row.append("td")
            cell.text(val);

        })

    })


}

// Filters
var filters = {};

function filterTable(){
    let filteredData = tableData;
    // loop through filters, keep data that match filterd values

    Object.entries(filters).forEach(function([key,value]){
        filteredData = filteredData.filter((row) => row[key] === value );
    });

    buildTable(filteredData);
}

function updateFilters(){
    var changeElement = d3.select(this).select("input");
    var elementValue = changeElement.property("value");
    var filterId = changeElement.attr("id");

    if (elementValue){
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
 // Call filter funciton
    filterTable();


}


// Attach event for filter changes

d3.selectAll(".filter").on("change", updateFilters);




// Populate the table with all data
buildTable(tableData);
