/* Calculate total Sales and total Tax
*/
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
// Calculate the total sales and total tar for each company, return as a map of objects
function calcSalesTax(salesData, taxRates)	{
	
	// initialize associative array to return from this function
	var compSalesTax = {};

	// loop through the company SalesData ass arrat to calc tot sales, tot taxes, and assign to result Map
	for (var ix = 0; ix < salesData.length; ix++)	{
		// extract each returned object (ass array) into a variable
		var compData = salesData[ix];
		// retrieve values into separate vars
		var coName  = compData.name;
		var coProv  = compData.province;
		var coSales = compData.sales;
		// get sales tab rate based on this company's province
		var coTaxRate = taxRates[coProv];
		// calculate total sales and total tax for this company
		var totSales = coSales.reduce(function(x, y) {return x + y}, 0);
		var totTax   = totSales * taxRates[coProv];
		//  join sales, tax into an ass array and add to result ass array with company as key
		var sales_and_tax = {totalSales: totSales, totalTaxes: totTax};
		compSalesTax[coName] = mergeTaxes(compSalesTax[coName], sales_and_tax);
	}		
	return compSalesTax;
}
// merge totals tor samae company 
function mergeTaxes(compSalesTax, sales_and_tax)	{
	if (compSalesTax) {
		return {totalSales: compSalesTax.totalSales + sales_and_tax.totalSales, totalTaxes: compSalesTax.totalTaxes + sales_and_tax.totalTaxes};
	} else	{
		return sales_and_tax;
	}
}
console.log(calcSalesTax(companySalesData, salesTaxRates));
