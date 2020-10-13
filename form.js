class Form {

    constructor() {
      this.continue = createImg('images/continue_but.png')
      this.continue.size(Width/4,Height/8);
      this.continue.position(Width/4*3, Height/4*3);
  
      this.input = createInput("");
      this.input.style('font-size',Height/13+'px');
      this.input.style('border-radius', '35px');
      this.input.style('border', 'hidden');
      this.input.style('text-align','center');
      this.input.size(Width/11*4.9,Height/13);
      this.input.position(Width/2-Width/4.5, Height/5+Height/30);
      

      this.button = createImg('images/start_but.png');
      this.button.size(Width/5,Height/7);
      this.button.position(Width/5*4, Height/8*6);
      
      this.playbut = createImg('images/play_but.png')
      this.playbut.size(Width/4,Height/7);
      this.playbut.position(Width/2-Width/8, Height/8*6);
      
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.continue.hide()
    }
  
    show(){

  this.button.show();
  this.input.show();
  


}

    display(){
    background(img1)
    this.hide()
    this.hover(this.playbut,"play")
    
    this.playbut.mousePressed(()=>{
    playerCount+=1;
    gameState+=1;
    player.index = playerCount;
    player.update2(gameState)
    player.updateCount(playerCount);
    
  })
   

}
  
    display2(){
    background(img2)
    this.playbut.hide()
    this.continue.show();
    this.hover(this.continue,"continue") 

    this.continue.mousePressed(()=>{
      player.index = playerCount;
      gameState+=1;
      player.update2(gameState)
  
  
    })
    }
  
  display3(){
    background(img3)
    this.continue.hide();
    this.show();
    this.hover(this.button,"start")

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      gameState+=1;
      player.name = this.input.value();
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
    });
  }
   


hover(x,y){

  x.mouseOver(()=>{
    x.elt.src="images/"+y+"_but_h.png";
    })
    
    x.mouseOut(()=>{
      x.elt.src="images/"+y+"_but.png";
      })


}


   


  }
  