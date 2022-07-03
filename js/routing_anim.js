class Routing_animation extends Class_Father{
    constructor(elem) {
        super(elem);
        this.elem = $(elem);

        this.events();
    }

    events(){
        this.elem.addClass('remove_routing');
    }
}