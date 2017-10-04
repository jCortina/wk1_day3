/* Identify all unique characters in a string passed to a function
	and count them. Return Map of each unique character and their count
*/
function countUniqueChars(strFld)	{
	counts = {};
	for (var ix = 0; ix < strFld.length; ix++)	{
		if (strFld[ix] != " ")	{
			if (counts[strFld[ix]] === undefined)	{
				counts[strFld[ix]] = 1;
			}	else	{
				counts[strFld[ix]]++; 
			}
		}
	}
	return counts;
}
console.log(countUniqueChars("lighthouse in the house"));
console.log(countUniqueChars("Bob Jones is a really cool guy"));
