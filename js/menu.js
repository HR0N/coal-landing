class Menu extends Class_Father{
    constructor(elem) {
        super(elem);
        this.elem = $(elem);
        this.buttons = this.find('.button');
        this.ul_list = this.find('.header-nav');
        this.menu_items = this.find('.menu-item');

        this.events();
    }
    toggle_buttons(){
        this.buttons.map((idx, val) => {
            $(val).hasClass('show') ? $(val).removeClass('show') : $(val).addClass('show');
        });
    }
    toggle_menu(){
        // this.ul_list.hasClass('show') ? this.ul_list.removeClass('show') : this.ul_list.addClass('show');
        if(this.ul_list.hasClass('show')){
            this.ul_list.fadeOut(1);
            this.ul_list.removeClass('show')
        }else{
            this.ul_list.fadeIn(300);
            this.ul_list.addClass('show')
        }
    }

    events(){
        $(document).on('scroll', ()=>{
            if($(document).scrollTop() > 10){
                this.elem.css({backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)'});
            }else if($(document).scrollTop() <= 10)
            {this.elem.css({backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0)'});}
        });
        this.buttons.on('click', this.toggle_buttons.bind(this));
        this.buttons.on('click', this.toggle_menu.bind(this));
        this.menu_items.on('click', ()=>{
            if(this.ul_list.hasClass('show')){
                this.ul_list.fadeOut(1);
                this.ul_list.removeClass('show');
                this.toggle_buttons();
            }
        });
    };
}