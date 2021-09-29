
let i;
const fullImage = document.getElementById("full-image");


function closeAllFolders(){
  for(i=1;i<=12;i++){
document.getElementById(`folder_${i}`).classList.add("hide");
document.querySelector(".backbtn").classList.remove("hide");
  }
}

function closeAllDates(){
  for(i=1;i<=12;i++){
document.getElementById(`date_${i}`).classList.add("hide");
 }
}

function openFolder_1(){
 document.querySelector(".gallery").style.display="block";
closeAllFolders();
closeAllDates();

}


function openFolder_2(){
 document.querySelector(".meeting").style.display="block";
closeAllFolders();
closeAllDates();

}

function openFolder_3(){
    document.querySelector(".newspaper").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }

   function openFolder_4(){
    document.querySelector(".folder-4").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }

   function openFolder_5(){
    document.querySelector(".folder-5").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }

   function openFolder_6(){
    document.querySelector(".folder-6").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }

   function openFolder_7(){
    document.querySelector(".folder-7").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }

   function openFolder_8(){
    document.querySelector(".folder-8").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }
   function openFolder_9(){
    document.querySelector(".folder-9").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }
   function openFolder_10(){
    document.querySelector(".folder-10").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }
   function openFolder_11(){
    document.querySelector(".folder-11").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }
   function openFolder_12(){
    document.querySelector(".folder-12").style.display="block";
   closeAllFolders();
   closeAllDates();
   
   }

function openImage(images){
fullImage.src=images.src;
fullImage.parentElement.style.display = "block";


document.querySelector(".gallery").style.display="none";
document.querySelector(".meeting").style.display="none";
document.querySelector(".newspaper").style.display="none";

for(i=4;i<=12;i++)
{
document.querySelector(`.folder-${i}`).style.display="none";;
}

document.getElementById("nav-bar").classList.add("hide");
document.querySelector(".footer").classList.add("hide");
document.getElementById("body").style.background="#fff";

document.querySelector(".backbtn").classList.add("hide");

}

function backButton(){
  document.querySelector(".backbtn").classList.add("hide");
  for(i=1;i<=12;i++){
    document.getElementById(`folder_${i}`).classList.remove("hide");
 document.getElementById(`date_${i}`).classList.remove("hide");

  }
  document.querySelector(".gallery").style.display="none";
document.querySelector(".meeting").style.display="none";
document.querySelector(".newspaper").style.display="none";

for(i=4;i<=12;i++)
{
document.querySelector(`.folder-${i}`).style.display="none";
}
}




function closeButton(){

  const imagePath = document.getElementById("full-image").getAttribute("src");
  const folderName = imagePath.substring(imagePath.search("images")+7,imagePath.lastIndexOf("/") - 0);

document.querySelector(".closebtn").parentElement.style.display="none";

document.getElementById("nav-bar").classList.remove("hide");
document.querySelector(".footer").classList.remove("hide");
document.querySelector(".backbtn").classList.remove("hide");

if(folderName==="gallery"){
  document.querySelector(".gallery").style.display = "block";
  }

  else if(folderName==="meeting"){
    document.querySelector(".meeting").style.display = "block";
    }

    else if(folderName==="newspaper"){
      document.querySelector(".newspaper").style.display = "block";
      }

      else if(folderName==="05-01-2020"){
        document.querySelector(".folder-4").style.display = "block";
        }
        else if(folderName==="19-11-2019"){
          document.querySelector(".folder-5").style.display = "block";
          }
          else if(folderName==="18-11-2019"){
            document.querySelector(".folder-6").style.display = "block";
            }
            else if(folderName==="08-09-2019"){
              document.querySelector(".folder-7").style.display = "block";
              }
              else if(folderName==="04-03-2019"){
                document.querySelector(".folder-8").style.display = "block";
                }

                else if(folderName==="19-02-2019"){
                  document.querySelector(".folder-9").style.display = "block";
                  }
                  else if(folderName==="09-07-2017"){
                    document.querySelector(".folder-10").style.display = "block";
                    }
                    else if(folderName==="14-06-2017"){
                      document.querySelector(".folder-11").style.display = "block";
                      }
                      else {
                        document.querySelector(".folder-12").style.display = "block";
                        }

}


function nextImage()
{
  const imagePath = document.getElementById("full-image").getAttribute("src");
  const folderName = imagePath.substring(imagePath.search("images")+7,imagePath.lastIndexOf("/") - 0);
  let currentImgNumber =imagePath.substring(imagePath.lastIndexOf("/")+1,imagePath.lastIndexOf("/")+3);


if(folderName==="gallery")
{

  if(currentImgNumber==36){

currentImgNumber=0;
  }

  if(currentImgNumber == 00){
    fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
    }
       else if(currentImgNumber == 01){
    fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
    }
  else if(currentImgNumber == 02){
    fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
    }
   else if(currentImgNumber == 03){
      fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
      }
   else if(currentImgNumber == 04){
      fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
      }
      else if(currentImgNumber ==05){
        fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
        }
    else  if(currentImgNumber == 06){
        fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
        }
        else if(currentImgNumber == 07){
          fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
          }
        else if(currentImgNumber == 08){
          fullImage.src = `images/gallery/0${Number(currentImgNumber) + 1 }.jpg`;
          }
         
            else
            {
              fullImage.src = `images/gallery/${Number(currentImgNumber) + 1 }.jpg`;
              }
 }



 if(folderName==="meeting")
 {

if(currentImgNumber==10){
  currentImgNumber=0;
}
    
if(currentImgNumber == 00){
  fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
  }

      else if(currentImgNumber == 01){
     fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
     }
   else if(currentImgNumber == 02){
     fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
     }
    else if(currentImgNumber == 03){
       fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
       }
    else if(currentImgNumber == 04){
       fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
       }
       else if(currentImgNumber ==05){
         fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
         }
     else  if(currentImgNumber == 06){
         fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
         }
         else if(currentImgNumber == 07){
           fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
           }
         else if(currentImgNumber == 08){
           fullImage.src = `images/meeting/0${Number(currentImgNumber) + 1 }.jpg`;
           }
         
             else
             {
               fullImage.src = `images/meeting/${Number(currentImgNumber) + 1 }.jpg`;
               }
  }
 




  if(folderName==="newspaper")
{

  if(currentImgNumber==40){
    currentImgNumber=0;
  }

  if(currentImgNumber == 00){
    fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
    }
      else  if(currentImgNumber == 01){
    fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
    }
  else if(currentImgNumber == 02){
    fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
    }
   else if(currentImgNumber == 03){
      fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
      }
   else if(currentImgNumber == 04){
      fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
      }
      else if(currentImgNumber ==05){
        fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
        }
    else  if(currentImgNumber == 06){
        fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
        }
        else if(currentImgNumber == 07){
          fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
          }
        else if(currentImgNumber == 08){
          fullImage.src = `images/newspaper/0${Number(currentImgNumber) + 1 }.jpg`;
          }
        
            else
            {
              fullImage.src = `images/newspaper/${Number(currentImgNumber) + 1 }.jpg`;
              }
 }



if(folderName==="05-01-2020")
{


  if(currentImgNumber==03){
    currentImgNumber=0;
  }

 
         fullImage.src = `images/05-01-2020/0${Number(currentImgNumber) + 1 }.jpg`;
            
}





if(folderName==="19-11-2019")
{

  if(currentImgNumber==08){
    currentImgNumber=0;
  }

   fullImage.src = `images/19-11-2019/0${Number(currentImgNumber) + 1 }.jpg`;
    
}

if(folderName==="18-11-2019")
{

  if(currentImgNumber==06){
    currentImgNumber=0;
  }

   fullImage.src = `images/18-11-2019/0${Number(currentImgNumber) + 1 }.jpg`;
}

if(folderName==="08-09-2019")
{
  if(currentImgNumber==14){
    currentImgNumber=0;
  }

  if(currentImgNumber == 00){
    fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
    }
   else if(currentImgNumber == 01){
      fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
      }
     else if(currentImgNumber == 02){
        fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
        }
       else if(currentImgNumber == 03){
          fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
          }
         else if(currentImgNumber == 04){
            fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
            }
          else  if(currentImgNumber == 05){
              fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
              }
             else if(currentImgNumber == 06){
                fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
                }
               else if(currentImgNumber == 07){
                  fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
                  }
                else  if(currentImgNumber == 08){
                    fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) + 1 }.jpg`;
                    }
                  
                     else{
                        fullImage.src = `images/08-09-2019/${Number(currentImgNumber) + 1 }.jpg`;
                        }


}



if(folderName==="04-03-2019")
{

  if(currentImgNumber==06){
    currentImgNumber=0;
  }

   fullImage.src = `images/04-03-2019/0${Number(currentImgNumber) + 1 }.jpg`;
}

if(folderName==="19-02-2019")
{
  if(currentImgNumber==03){
    currentImgNumber=0;
  }

   fullImage.src = `images/19-02-2019/0${Number(currentImgNumber) + 1 }.jpg`;
}


if(folderName==="09-07-2017")
{

  if(currentImgNumber==08){
    currentImgNumber=0;
  }

   fullImage.src = `images/09-07-2017/0${Number(currentImgNumber) + 1 }.jpg`;
}

if(folderName==="14-06-2017")
{
  if(currentImgNumber==12){
    currentImgNumber=0;
  }


  if(currentImgNumber==00){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
  else if(currentImgNumber==01){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
   else if(currentImgNumber==02){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
   else if(currentImgNumber==03){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
   else if(currentImgNumber==04){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
   else if(currentImgNumber==05){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
  else if(currentImgNumber==06){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
  else if(currentImgNumber==07){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
  else if(currentImgNumber==08){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) + 1 }.jpg`;
   }
   else{
   
      fullImage.src = `images/14-06-2017/${Number(currentImgNumber) + 1 }.jpg`;
     
   }

}

if(folderName==="14-04-2017")
{
if(currentImgNumber==08){
  currentImgNumber=0;
}

fullImage.src = `images/14-04-2017/0${Number(currentImgNumber) + 1 }.jpg`;

}

}







function prevImage()
{
  const imagePath = document.getElementById("full-image").getAttribute("src");
  const folderName = imagePath.substring(imagePath.search("images")+7,imagePath.lastIndexOf("/") - 0);
  let currentImgNumber =imagePath.substring(imagePath.lastIndexOf("/")+1,imagePath.lastIndexOf("/")+3);


if(folderName==="gallery")
{

  if(currentImgNumber==01){

currentImgNumber=37;
  }

  if(currentImgNumber == 00){
    fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
    }
       else if(currentImgNumber == 01){
    fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
    }
  else if(currentImgNumber == 02){
    fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
    }
   else if(currentImgNumber == 03){
      fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
      }
   else if(currentImgNumber == 04){
      fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
      }
      else if(currentImgNumber ==05){
        fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
        }
    else  if(currentImgNumber == 06){
        fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
        }
        else if(currentImgNumber == 07){
          fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
          }
        else if(currentImgNumber == 08){
          fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
          }
          else if(currentImgNumber == 09){
            fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
            }
            else if(currentImgNumber == 10){
              fullImage.src = `images/gallery/0${Number(currentImgNumber) - 1 }.jpg`;
              }
         
            else
            {
              fullImage.src = `images/gallery/${Number(currentImgNumber) - 1 }.jpg`;
              }
 }



 if(folderName==="meeting")
 {

if(currentImgNumber==01){
  currentImgNumber=11;
}
    

    
if(currentImgNumber == 00){
  fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
  }

      else if(currentImgNumber == 01){
     fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
     }
   else if(currentImgNumber == 02){
     fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
     }
    else if(currentImgNumber == 03){
       fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
       }
    else if(currentImgNumber == 04){
       fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
       }
       else if(currentImgNumber ==05){
         fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
         }
     else  if(currentImgNumber == 06){
         fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
         }
         else if(currentImgNumber == 07){
           fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
           }
         else if(currentImgNumber == 08){
           fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
           }
           else if(currentImgNumber == 09){
            fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
            }
            else if(currentImgNumber == 10){
              fullImage.src = `images/meeting/0${Number(currentImgNumber) - 1 }.jpg`;
              }
         
             else
             {
               fullImage.src = `images/meeting/${Number(currentImgNumber) - 1 }.jpg`;
               }
  }
 




  if(folderName==="newspaper")
{

  if(currentImgNumber==01){
    currentImgNumber=41;
  }

  if(currentImgNumber == 00){
    fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
    }
      else  if(currentImgNumber == 01){
    fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
    }
  else if(currentImgNumber == 02){
    fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
    }
   else if(currentImgNumber == 03){
      fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
      }
   else if(currentImgNumber == 04){
      fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
      }
      else if(currentImgNumber ==05){
        fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
        }
    else  if(currentImgNumber == 06){
        fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
        }
        else if(currentImgNumber == 07){
          fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
          }
        else if(currentImgNumber == 08){
          fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
          }

          else if(currentImgNumber == 09){
            fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
            }

            else if(currentImgNumber == 10){
              fullImage.src = `images/newspaper/0${Number(currentImgNumber) - 1 }.jpg`;
              }

        
            else
            {
              fullImage.src = `images/newspaper/${Number(currentImgNumber) - 1 }.jpg`;
              }
 }



if(folderName==="05-01-2020")
{


  if(currentImgNumber==01){
    currentImgNumber=4;
  }

 
         fullImage.src = `images/05-01-2020/0${Number(currentImgNumber) - 1 }.jpg`;
            
}





if(folderName==="19-11-2019")
{

  if(currentImgNumber==01){
    currentImgNumber=9;
  }

   fullImage.src = `images/19-11-2019/0${Number(currentImgNumber) - 1 }.jpg`;
    
}

if(folderName==="18-11-2019")
{

  if(currentImgNumber==01){
    currentImgNumber=7;
  }

   fullImage.src = `images/18-11-2019/0${Number(currentImgNumber) - 1 }.jpg`;
}

if(folderName==="08-09-2019")
{
  if(currentImgNumber==01){
    currentImgNumber=15;
  }

  if(currentImgNumber == 00){
    fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
    }
   else if(currentImgNumber == 01){
      fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
      }
     else if(currentImgNumber == 02){
        fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
        }
       else if(currentImgNumber == 03){
          fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
          }
         else if(currentImgNumber == 04){
            fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
            }
          else  if(currentImgNumber == 05){
              fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
              }
             else if(currentImgNumber == 06){
                fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
                }
               else if(currentImgNumber == 07){
                  fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
                  }
                else  if(currentImgNumber == 08){
                    fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
                    }
                    else  if(currentImgNumber == 09){
                      fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
                      }

                      else  if(currentImgNumber == 10){
                        fullImage.src = `images/08-09-2019/0${Number(currentImgNumber) - 1 }.jpg`;
                        }
                  
                     else{
                        fullImage.src = `images/08-09-2019/${Number(currentImgNumber) - 1 }.jpg`;
                        }


}



if(folderName==="04-03-2019")
{

  if(currentImgNumber==01){
    currentImgNumber=7;
  }

   fullImage.src = `images/04-03-2019/0${Number(currentImgNumber) - 1 }.jpg`;
}

if(folderName==="19-02-2019")
{
  if(currentImgNumber==01){
    currentImgNumber=4;
  }

   fullImage.src = `images/19-02-2019/0${Number(currentImgNumber) - 1 }.jpg`;
}


if(folderName==="09-07-2017")
{

  if(currentImgNumber==01){
    currentImgNumber=9;
  }

   fullImage.src = `images/09-07-2017/0${Number(currentImgNumber)  -1 }.jpg`;
}

if(folderName==="14-06-2017")
{
  if(currentImgNumber==01){
    currentImgNumber=13;
  }


  if(currentImgNumber==00){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
  else if(currentImgNumber==01){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
   else if(currentImgNumber==02){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
   else if(currentImgNumber==03){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
   else if(currentImgNumber==04){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
   else if(currentImgNumber==05){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
  else if(currentImgNumber==06){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
  else if(currentImgNumber==07){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
  else if(currentImgNumber==08){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }

   else if(currentImgNumber==09){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }
   else if(currentImgNumber==10){
    fullImage.src = `images/14-06-2017/0${Number(currentImgNumber) - 1 }.jpg`;
   }

  
   else{
   
      fullImage.src = `images/14-06-2017/${Number(currentImgNumber) - 1 }.jpg`;
     
   }

}

if(folderName==="14-04-2017")
{
if(currentImgNumber==01){
  currentImgNumber=9;
}

fullImage.src = `images/14-04-2017/0${Number(currentImgNumber) - 1}.jpg`;

}

}


document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeButton();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    prevImage();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextImage();
  }
});
