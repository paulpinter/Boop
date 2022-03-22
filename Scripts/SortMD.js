/**
	{
		"api":1,
		"name":"Sort Markdown",
		"description":"Sort Markdown by Headings",
		"author":"Paul Pinter",
		"icon":"sort-characters",
		"tags":"markdown",
		"bias":1.0
	}
**/

function main(state) {
	try {
		md = '\n'
		md += state.text
		ret = ['']
		sortMarkdown(0,[md], ret)
		state.text = ret[0].slice(1,-1)
	}
	catch(error) {
		state.postError("Something strange happened here...")
	}
}

function sortMarkdown(depth, rest, ret,) {
	  for (let i = 0; i < rest.length; i++) {
		hashtags = '#'.repeat(depth + 1)
		regex =  '\n' + hashtags + '(?=[^#])'
	  	level = rest[i]
	  	level_split = level.split(new RegExp(regex))
	  	level_start = level_split[0]
	  	ret[0] = ret[0] + '#'.repeat(depth) + level_start + '\n'
	  	level_rest = level_split.slice(1)
		level_rest.sort()
		if (level_rest){
			sortMarkdown(depth + 1, level_rest, ret)
		}
	}
}