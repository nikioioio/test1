window.addEventListener('DOMContentLoaded',()=> {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabcontent = document.querySelectorAll('.info-tabcontent');


    function hideContent(a) {
        for (let i = a;i<tabcontent.length;i++){
            tabcontent[i].classList.remove('show');
            tabcontent[i].classList.add('hide');
        }
    }

    // hideContent(1)

    function showContent(b) {
        if (tabcontent[b].classList.contains('hide')){
            tabcontent[b].classList.remove('hide');
            tabcontent[b].classList.add('show');
        }
    }

    info.addEventListener('click',(event) => {
        let target = event.target;
        for (let i = 0;i<tab.length;i++){
            if (target==tab[i]){
                hideContent(0);
                showContent(i);
                break;
            }
        }
    })

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click',() =>{
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click',()=> {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    let el = new Options(200,200,'red',28,'center');
    el.createText();
});


class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createText(){
        let el = document.createElement('div');
        let h1 = document.createElement('h1');
        h1.innerText = 'Привет';
        el.appendChild(h1);
        el.style.cssText = `color:${this.bg};
                            width: ${this.width}px;
                            height: ${this.height}px;
                            font-Size: ${this.fontSize}pt;
                            text-Align: ${this.textAlign}`
        el.id = 'textTest';
        document.body.appendChild(el);
    }
}