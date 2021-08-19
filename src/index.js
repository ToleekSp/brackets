module.exports = function check(str, bracketsConfig) {
	let stack = [];

	for(let i = 0; i < str.length; i++)
	{
		let char = str[i];
		
		for(let j = 0; j < bracketsConfig.length; j++)
		{
			let openChar = bracketsConfig[j][0],
				closeChar = bracketsConfig[j][1],
				singleBracket = '';
				
			if(openChar === closeChar)
				singleBracket = openChar;
				
			if(char === openChar && (!singleBracket || char !== singleBracket || stack.indexOf(singleBracket) === -1))
			{
				stack.push(char);
			}
			else if(char === closeChar)
			{
				if(!stack.length)
					return false;
				
				let last = stack.pop();
				if(last !== openChar)
					return false;
			}
		}
	}
	
	if (stack.length !== 0) {
        return false;
    }

    return true;
}
