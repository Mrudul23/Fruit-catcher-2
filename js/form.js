class Form{
    constructor(){
       this.input = createInput().attribute("placeholder","Enter your name here");
       this.button = createButton("Play");
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.text = 
       this.instruction = createElement("h3").html("► Please enter your name and click play to start game")
       this.instruction2 = createElement("h3").html("► First to collect 20 fruits wins")
       this.instruction3 = createElement("h3").html("► If you catch a worm all your fruits are spoiled")
       this.instruction4 = createElement("h3").html("    and you score goes back to 0")
       
       
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.instruction.hide()
        this.instruction2.hide()
    }
    display() {

        this.title.html("FRUIT CATCHER");
        this.title.position(windowWidth/4, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', "300px");
        this.input.style('height', '30px');
        this.input.style("font-size","30px")
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', "lightPink");
        this.reset.position(900, 610);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.instruction.position(windowWidth/4,200)
        this.instruction.style('color', "cyan");
        this.instruction.style('font-size', '30px');        
        
        this.instruction2.position(windowWidth/4,240)
        this.instruction2.style('color', 'cyan');
        this.instruction2.style('font-size', '30px');

        this.instruction3.position(windowWidth/4,280)
        this.instruction3.style('color', 'cyan');
        this.instruction3.style('font-size', '30px');

        this.instruction4.position(windowWidth/4,320)
        this.instruction4.style('color', 'cyan');
        this.instruction4.style('font-size', '30px');




        
 
        if(this.input.value !== ""){
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.instruction.hide()
            this.instruction2.hide()
            this.instruction3.hide()
            this.instruction4.hide()
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '60px');
            
        });
    }
        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            window.location.reload()
            var playerInforef = database.ref("players")
            playerInforef.remove()
        });

    }
}