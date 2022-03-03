system("clear")
puts("       _____   _____       ___ \n.     /  ___/ | ____|     /   | \n      | |___  | |__      / /| | \n.     \|___ \ | |  __|    / /_| | \n       ___| | | |___   / /__| |\n      /_____/ |_____| /_/   |_|") 
  puts("[SEA]==========================[SEA]") 
  puts("       my name: Alhamwi ") 
  puts("       my insta: al0hamwi")  
  puts("       my youtube: alhamwi")  
  puts("       MADE IN SYRIA") 
    
  puts("[SEA]==========================[SEA]") 
puts("\n            {1}Wishsix")
puts("            {2}Blank page")
puts("            {3}Allow follow-up requests")
puts("            {4}amino")
puts("            {5}Blank page")


puts("\n\n[=====exit=====]\n\n")

print("\n       enter the number")
num=gets.chomp.to_i
 if num ==1
  system("cd Wishsix")
  
  system("bash 1.sh")
 
 elsif num ==2
  system("cd Blank-page")
  
  system("bash 1.sh")
  
 elsif num ==3
   system("cd Allow")
  
   system("bash 1.sh")
   
  elsif num ==4
   system("cd amino")
  
   system("bash 1.sh")
   
   elsif num ==exit
   system("exit && exit")
 else
   system("ruby SEA-fish.rb")
 end
 puts "good by"
