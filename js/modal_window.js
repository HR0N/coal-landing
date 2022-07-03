class Modal_window extends Class_Father{
    constructor(elem) {
        super(elem);
        this.elem = $(elem);
        this.modal_window = this.find('.section-modal-window');
        this.btn1 = this.find('.section1__btn');
        this.btn2 = this.find('.section-6__interface__button');
        this.hide_modal_w_btn = this.find('.hide_modal_w');

        this.events();
    }
    show_modal_window(){
        this.modal_window.fadeIn(100);
    }
    hide_modal_window(){
        this.modal_window.fadeOut(100);
    }

    events(){
        this.btn1.on('click', this.show_modal_window.bind(this));
        this.btn2.on('click', this.show_modal_window.bind(this));
        this.hide_modal_w_btn.on('click', this.hide_modal_window.bind(this));
    }
}