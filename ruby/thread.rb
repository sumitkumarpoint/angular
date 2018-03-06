#!/usr/bin/ruby

def func2
  aFile = File.new("input.txt", "a")
ar=['a','b','c','d','e','f']
@counter=0
for a in (1..6) do

	
   aFile.syswrite('b')
  sleep 1
@counter+=1

end

end


def func1
  aFile = File.new("input.txt", "r+")
 sleep 0.5
   content=aFile.sysread(26)
    puts content
   

end




puts "start at #{Time.new}"
t2 = Thread.new{func2()}
t1 = Thread.new{func1()}

puts "stop at #{Time.new}"
