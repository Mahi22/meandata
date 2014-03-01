exports.writeToServer=function(path,newFileName,fileFromWrite)
{
	fs.readFile(fileFromWrite, function (err, data) {
	  var newPath = path+newFileName+getExtension(fileFromWrite);
	  console.log(newPath);
	  fs.writeFile(newPath, data, function (err) {
	   });
	});
}

exports.getExtension=function(filename) {
    var i = filename.lastIndexOf('.');
    return (i < 0) ? '' : filename.substr(i);
}

exports.extractDate=function(day)
{
    var date=new Date();
    var current=new Date(date.getTime()+day*24*60*60*1000);
    return current.getDate()+"/"+(current.getMonth()+1)+"/"+current.getFullYear();
}