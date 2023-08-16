$(function () {
  $(window).scroll(function () {
    if($(window).scrollTop() > 0){
      $('body').addClass('headerFixed');
    }else{
      $('body').removeClass('headerFixed');
    }
  });

  $('.contactBox .toggleContact2').click(function(){
    $(this).toggleClass('on');
    $('.contactBox .txtContact2').toggle();
  });

  $('#btnTop').click(function () {
    $("body, html").stop().animate({
      scrollTop: 0
    });
    return false;
  });

  $('.category > li > a').click(function(){
    $(this).parent().toggleClass('on');
    return false;
  });

  $('.tabBox .tabTitle .itemTitle').click(function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
    $(this).parents('.tabBox').find('.tabCont').eq($(this).parent().index()).addClass('on').siblings().removeClass('on');
    return false;
  });

  $('#header .btnCate').click(function(){
    $('body').toggleClass('openCateMenu');
    return false;
  });

  $('.filterOptionBox .itemFilterOption .titFilterOption').click(function(){
    $(this).parent('.itemFilterOption').toggleClass('on');
  });

  $('.tbl1v1 .trData').click(function(){
    $(this).next().toggleClass('on');
  });
});

function openPop(id) {
  $('body').addClass('openPop');
  $('#' + id).addClass('on');
  return false;
}

function closePop(obj) {
  $('body').removeClass('openPop');
  $(obj).parents('.popBox').removeClass('on');
  return false;
}

function closePopToday(obj) {
  //cookie setting
  //todo ....

  closePop(obj);
  return false;
}

function togglePop(id) {
  $('#' + id).toggleClass('on');
  return false;
}

function botBrandClick(obj) {
  $(obj).toggleClass('on');
  togglePop('popBrand');
  $('body').toggleClass('openBotBrand');
}