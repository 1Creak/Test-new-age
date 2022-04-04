$(document).ready(function(){
    function hide(Onclick, change){
        $(Onclick).click(function(){
            $(change).toggle("#");
        })
    }

    function toggleText(el, newText){
        let txt = el.val();
        el.click(function(){
            if($(this).val() == txt){
                $(this).val(newText);
            }else{
                $(this).val(txt);
            }
        })
    }

    hide($('#more'), $('.hidden'));
    hide($('#burger'), $('.nav__list'));
    toggleText($('#more'), 'HIDE');
});