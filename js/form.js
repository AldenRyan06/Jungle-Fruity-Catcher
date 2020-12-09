class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("🥽FRUIT CATCHER🥽");
        this.title.position(400, 100);
        this.title.style('font-size', '70px');
        this.title.style('color', 'gold');
        this.input.position(650,360);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'cyan');
        this.button.position(650,410);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightblue');
        this.reset.position(700, 650);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightblue');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(650,250);
            this.greeting.style('color', 'gold');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}