/* Identify all unique characters in a string passed to a function
	and create array of their positions in string.
*/
function countUniqueChars(strFld)	{
	chars = {};
	for (var ix = 0; ix < strFld.length; ix++)	{
		if (strFld[ix] != " ")	{
			if (chars[strFld[ix]] === undefined)	{
				chars[strFld[ix]] = [ix + 1];
			}	else	{
				var occurArray = chars[strFld[ix]];
				occurArray.push(ix + 1);
				// console.log(occurArray); 
			}
		}
	}
	return chars;
}
console.log(countUniqueChars("lighthouse in the house"));