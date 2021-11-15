jQuery(document).ready(function($){
  if($('ul.list').find('li').length > 2){
    $('.show_hide_list').click(function(){
      //$('ul.list li:nth-child(n+3)').slideToggle('');
      $(this).prev().children('li:nth-child(n+3)').slideToggle('');
      $(this).toggleClass('opnd_g');
      if($(this).hasClass('opnd_g')){
        $(this).html('Скрыть');
      } else {
          $(this).html('Ещё...');
        }
    });
  } else {
    $('.show_hide_list').hide();
  }
});