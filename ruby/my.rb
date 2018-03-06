th = Thread.new do
  Thread.current['counter']=0 
  aFile = File.new("input.txt", "a")  
  5.times do |i|   
    Thread.current['counter']=i   
     aFile.syswrite(ar[@counter])
    sleep 1   
  end   
  return nil   
end   
while th['counter'].to_i < 4  do   

 aFile = File.new("input.txt", "r+")
  for a in (1..4)
   content=aFile.sysread(26)
    puts content
   end
end   
puts "Long running process finished!" 