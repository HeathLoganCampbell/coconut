function getResource(path)
{
	return require("../resources/" + path);
}


module.exports = {
	getResource: getResource
};