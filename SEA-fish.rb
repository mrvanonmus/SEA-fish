system("clear")
puts("\033[1;33m       _____   _____       ___ \n.     /  ___/ | ____|     /   | \n      | |___  | |__      / /| | \n.     \|___ \ | |  __|    / /_| | \n       ___| | | |___   / /__| |\n      /_____/ |_____| /_/   |_|") 
  puts("\033[1;33m[SEA]==========================[SEA]") 
  puts("\033[1;37m       my name: Alhamwi ") 
  puts("\033[1;37m       my insta: al0hamwi")  
  puts("\033[1;37m       my youtube: alhamwi")  
  puts("\033[1;37m       MADE IN SYRIA") 
    
  puts("\033[1;33m[SEA]==========================[SEA]") 
puts("\n\033[1;37m          {1}Wishsix")
puts("\033[1;37m            {2}Blank page")
puts("\033[1;37m            {3}Allow follow-up requests")
puts("\033[1;37m            {4}amino")
puts("\033[1;37m            {5}cam")


puts("\n\n\033[1;33m[=====exit=====]\n\n")

print("'\n\e[1;92m[\e[0m\e[1;77mSEA\e[0m\e[1;92m] Enter the number : \e[0m")
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
   
 elsif num ==5
  system("cp -r alhamwi $HOME")
   
  print("done")
   
  elsif num ==exit
   system("exit && exit")
     else
       system("ruby SEA-fish.rb")
 end
 puts "good by"
