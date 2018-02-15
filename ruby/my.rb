aFile = File.new("input.txt", "r+")
if aFile
 content = aFile.syswrite("how r u!")
 puts content
else
 puts "Unable to open file!"
end