class Game {
constructor(){
  this.rand
  this.x=17
  this.rand2
  this.no=0
  this.noOfQ=0

  this.clue=createDiv('')
  this.clue.style('fontSize',Width/40+"px")
  this.clue.style('zIndex',1)
  this.clue.style('color','white')
  this.clue.position(Width/2-Width/3.7,Height/13*12);

  this.cluebox = createImg('images/Box_blue.png')
  this.cluebox.size(Width/1.8,Height/7);
  this.cluebox.position(Width/2-Width/3.4,Height/7*6);

  this.txt=createDiv('')
  this.txt.style('fontSize',Width/20+"px")
  this.txt.style('zIndex',1)
  this.txt.style('fontWeight','bold')
  this.txt.style('fontFamily','arial')
  this.txt.style('color','white')
  this.txt.position(Width/2-Width/3,Height/2-Height/2.6);

  this.box = createImg('images/Box.png')
  this.box.size(Width/1.2,Height/1.2);
  this.box.position(Width/2-Width/2.4,Height/2-Height/2.4);
  this.box.style('opacity','70%')
  
  this.all = createImg('images/blank.png')
//this.all.style('position','absolute')
  this.all.size(Width/13,Height/12);
  this.all.position(Width/3-Width/14,Height/4+Height/20);

  this.butt1=createImg('images/A.png')
  this.butt1.size(Width/30,Width/30);
  this.butt1.position(Width/7.5,Height/17*7);

  this.butt2=createImg('images/B.png')
  this.butt2.size(Width/30,Width/30);
  this.butt2.position(Width/2.2,Height/17*7);

  this.butt3=createImg('images/C.png')
  this.butt3.size(Width/30,Width/30);
  this.butt3.position(Width/7.5,Height/17*11.5);

  this.butt4=createImg('images/D.png')
  this.butt4.size(Width/30,Width/30);
  this.butt4.position(Width/2.2,Height/17*11.5);

  this.next = createImg('images/Next.png');
  this.next.size(Width/5,Height/8);
  this.next.position(Width/5*4, Height/10*8);

  this.correct = createImg('images/correct.png');
  this.correct.size(Width/4,Height/8);
  this.correct.position(Width/2-Width/8, Height/10*8);

  this.wrong = createImg('images/wrong.png');
  this.wrong.size(Width/4,Height/8);
  this.wrong.position(Width/2-Width/8, Height/10*8);

}


    getState(){
        var gameStateRef  = database.ref("players/player"+player.index);
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    



    async start(){ 
      this.txt.hide() 
      this.box.hide() 
      this.butt1.hide()  
      this.butt2.hide()  
      this.butt3.hide()  
      this.butt4.hide()  
      this.next.hide()  
      this.correct.hide()  
      this.wrong.hide() 
      this.cluebox.hide()  
      this.clue.hide()
      form = new Form()
        if(gameState === 0){
        form.display();
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
    
}

}


start2(){
if(gameState === 1){

form.display2()


}

}

start3(){
    if(gameState === 2){
    
    form.display3()
    
    }
    
    }

    start4(){
      if(gameState === 3){
        background(marketimg)
        spawnVirus()
        man.visible=true
        textSize(Width/48)
        textStyle(BOLD)
        fill(255);
        textLeading(Width/50) 
        text('My visit to a market...',Width/20,Height/20)
        if(virusGroup.isTouching(man)){
          man.destroy()
          virusGroup.destroyEach()
          gameState+=1
        }
      
      
      
      }
      }

      start5(){
        if(gameState === 4){
          background(marketimg)
          this.box.show()
          this.txt.show() 
          this.txt.html("I wish I had put on a mask. I am infected by Covid-19 and have limited time. Please save me")
          this.txt.style('top',Width/10+'px')
          this.txt.style('left',Width/7+'px')
          this.txt.style('right',Width/9+'px')
          this.next.size(Width/4,Height/8);
          this.next.position(Width/4*3, Height/4*3);
          this.next.elt.src="images/continue_but.png";
          this.next.show()
        
          this.next.mousePressed(()=>{
            gameState+=1
            seconds=0
          });
        
        
        }
        }

      start6(){
       background(level1)
       
        if(seconds===3){
        seconds=0
        gameState+=1
        player.update()
        
        this.clue.show()
        this.cluebox.show()
        cstate=1
      }
      
      
      
        this.next.hide()
        this.txt.hide()
        this.box.hide()
      }
  

      start7(){
        if(gameState === 7){
        background(room1)
        this.box.show()
        this.txt.show() 
        this.txt.html("Congratulations...You are 1 step closer to the antitode.                      Level-1 complete")
        this.txt.style('top',Width/10+'px')
        this.txt.style('left',Width/7+'px')
        this.txt.style('right',Width/9+'px')
        this.next.size(Width/4,Height/8);
        this.next.position(Width/4*3, Height/4*3);
        this.next.elt.src="images/continue_but.png";
        this.next.show()
        
          this.next.mousePressed(()=>{
            seconds=0
            gameState+=1
            player.update()
          });
      
        }}

        start8(){
          background(level2)
          
           if(seconds===3){
           seconds=0
           gameState+=1
           player.update()
           
          //  this.clue.show()
          //  this.cluebox.show()
          //  cstate=1
         }
         
         
         
           this.next.hide()
           this.txt.hide()
           this.box.hide()
         }


room1(){
  background(room1)
  this.next.elt.src="images/Next.png";
  this.next.position(Width/5*4, Height/10*8);
  this.next.size(Width/5,Height/8);
  if(Clue[this.rand]==="I am an idiot box... find me and click on me"){

  this.all.size(Width/4.5,Height/3);
  this.all.position(Width/2-Width/9,Height/2-Height/4);

  
}else if(Clue[this.rand]==="I was invented by 2 brothers... find me"){

  this.all.size(Width/13,Height/12);
  this.all.position(Width/3-Width/14,Height/4+Height/20);

  
}else if(Clue[this.rand]==="Michael Jordan the player... find me"){

 this.all.size(Width/14,Height/8);
 this.all.position(Width/4-Width/4.3,Height/4*3+Height/23);

  
}else if(Clue[this.rand]==="It takes 20 years to dispose of me..."){

 this.all.size(Width/24,Height/12);
 this.all.position(Width/2+Width/4,Height/2+Width/6.2); 

  
}else if(Clue[this.rand]==="My average lifetime is around 1,000 hours... find me"){

 this.all.size(Width/24,Height/12);
 this.all.position(Width/2+Width/4.8,Height/4+Width/10);

  
}else if(Clue[this.rand]==="I have magnets in me and I vibrate... find me"){

  this.all.size(Width/17,Height/5);
  this.all.position(Width/3-Width/18,Height/4+Width/20);

  
}else if(Clue[this.rand]==="You feel cozy on me"){

  this.all.size(Width/5,Height/3);
  this.all.position(Width/2+Width/5,Height/2+Height/20);
  
}




  if(cstate===1){
    rr=rr-1
    this.rand=round(random(0,rr))
    console.log(rr)
    console.log(Clue)
    cstate=2
    
    
  
  }
   
  if(cstate===2){
    this.clue.html(Clue[this.rand])
  
  }
  

  this.all.mousePressed(()=>{
  
  this.butt1.show()  
  this.butt2.show()  
  this.butt3.show()  
  this.butt4.show() 
  this.all.hide()
  this.clue.hide()
  this.cluebox.hide()
  Clue.splice(this.rand,1)
  qstate=1
  

 });

if(qstate===1){
  background(room1_box)
  this.x=this.x-1
  r = round(random(0,this.x))
  
  qstate=2
  
  

}
 
if(qstate===2){
  background(room1_box)
  showText()
  
}
if(qstate==="right"){
background(room1_box)
showText()
this.next.show()
this.correct.show()

}


if(qstate==="wrong"){
background(room1_box)
showText()
this.next.show()
this.wrong.show()



}
this.butt1.mousePressed(()=>{
 ans=1   
  if(Answers[r]===ans){
    qstate="right"
    }else{
      qstate="wrong"
    
    }
});

this.butt2.mousePressed(()=>{
  ans=2
  if(Answers[r]===ans){
    qstate="right"
    }else{
      qstate="wrong"
    
    }
});

  
this.butt3.mousePressed(()=>{
  ans=3 
  if(Answers[r]===ans){
    qstate="right"
    }else{
      qstate="wrong"
    
    }
});

this.butt4.mousePressed(()=>{
  ans=4 
  if(Answers[r]===ans){
    qstate="right"
    }else{
      qstate="wrong"
    
    }
    
});
 
this.next.mousePressed(()=>{
  this.correct.hide()
  this.wrong.hide()
  this.next.hide()
  Questions.splice(r,1)
  Options.splice(r,1)
  Answers.splice(r,1)
  this.noOfQ=this.noOfQ+1
  this.no=this.no+1
 if(qstate==="wrong"){
  minutes=minutes+1
 }
   qstate=1
});

if(this.no===2){
  background(room1)
  this.correct.hide()
  this.wrong.hide()
  this.next.hide()
  this.butt1.hide()
  this.butt2.hide()
  this.butt3.hide()
  this.butt4.hide()
  cstate=1
  this.all.show()
  this.clue.show()
  this.cluebox.show()
  qstate=0
  this.no=0
  }




textSize(Width/30)
textStyle(BOLD)
fill(255);
text(minutes+":"+seconds,Width-Height/5.5,Height/13)

textSize(Width/30)
textStyle(BOLD)
fill(255);
text(player.name,Width/25,Height/13)


if(this.noOfQ===8){

gameState+=1
player.update()
this.cluebox.hide(
this.clue.hide()  
)
}








}




room2(){
background(room2)



// textSize(Width/30)
// textStyle(BOLD)
// fill(255);
// text(minutes+":"+seconds,Width-Height/5.5,Height/13)

// textSize(Width/30)
// textStyle(BOLD)
// fill(255);
// text(player.name,Width/25,Height/13)





}












}

function showText(){
  
  textSize(Width/35)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/40) 
  text(Questions[r],Width/5.8,Height/4,Width/1.4)
  //t.elt.style.zIndex=100
  
  textSize(Width/48)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/50) 
  text(Options[r][0],Width/5.8,Height/11*5,Width/3.5)

  textSize(Width/48)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/50) 
  text(Options[r][1],Width/2,Height/11*5,Width/3.5)

  textSize(Width/48)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/50) 
  text(Options[r][2],Width/5.8,Height/11*8,Width/3.5)

  textSize(Width/48)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/50) 
  text(Options[r][3],Width/2,Height/11*8,Width/3.5)

   //Questions.splice(r,1)
  //Options.splice(r,1)
 //Answers.splice(r,1)
}

function spawnVirus(){
  if(World.frameCount % 20 === 0) {
  var x1=random(0,Width)
  var size=random(1.2,0.3)
  var virus;
  vel=vel+0.5;
  virus = createSprite(x1,-30,10,10)  ;
  virus.velocityY=vel;
  virus.addAnimation("virus",virusimg)
  virus.scale=size
  virus.lifetime=800
  virusGroup.add(virus);
}
}
