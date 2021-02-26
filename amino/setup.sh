#!/bin/bash
clear

C1='\033[1;33m'
C2='\033[1;37m'

echo -e "$C1""Tool Setup is start"
sleep 5

#Delete all old tools :
find /data/data/com.termux/files/home -name "ngrok*" -type f -exec rm {} \; 
find /data/data/com.termux/files/home -name "ngrok" -type f -exec  rm {} \; 

#start setup :

pkg install wget -y ; pkg install php -y ; pkg install openssh -y

#Download ngrok 1: 
cd /data/data/com.termux/files/home ; wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
unzip /data/data/com.termux/files/home/ngrok-stable-linux-arm.zip
rm /data/data/com.termux/files/home/ngrok-stable-linux-arm.zip
chmod +x  /data/data/com.termux/files/home/ngrok

#Download ngrok 1: 
cd /data/data/com.termux/files/home/KABH ; wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
unzip /data/data/com.termux/files/home/KABH/ngrok-stable-linux-arm.zip
rm /data/data/com.termux/files/home/KABH/ngrok-stable-linux-arm.zip
chmod +x /data/data/com.termux/files/home/KABH/ngrok

#chmod all files ;
chmod +x /data/data/com.termux/files/home/KABH/*
cd /data/data/com.termux/files/home/KABH
exit