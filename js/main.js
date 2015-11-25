
$('.main').click(function(event){
    event.preventDefault();
    var src = event.target;
    var href = $(src).attr('href');
    if(!href){
        return; //������Ĳ���AԪ��
    }
    $('.active').removeClass('active');
    $(src).addClass('active');
    $('.tz > div').attr('class', 'hidden');
    $(href).attr('class', 'show');
});
$('.comment').click(function(event){
		var src = event.target;
	 	var node = src.parentNode.parentNode.nextSibling.nextSibling;
    node.style.display=node.style.display=="none"?"block":"none";
});
