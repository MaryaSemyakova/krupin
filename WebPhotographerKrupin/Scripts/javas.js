//----------------------------------------------------
function load_img(id, h, w)
{
	var l = (screen.width  - w)/2;
 	var t = (screen.height - h)/2;
	window.open('/img.php?img='+id, '', 'resizable=yes,scrollbars=yes,height='+h+',width='+w+',top='+t+',left='+l);
}
//---------------------------------------------------------------------
function findOffsetTop (o) {
  var x = o.offsetLeft, y = o.offsetTop;
  while (o = o.offsetParent) {
     x += o.offsetLeft;
     y += o.offsetTop;
  }
  return {left:x, top:y};
};


function SearchSubmit(position)
{
	url = '';
	text='';
	flag=false;
	switch(position)//верхний или нижний поиск
	{
		case 'top':
			if(jQuery('input[name="searchTextT"]').val()!='')
			{
				flag=true;
				text=jQuery('input[name="searchTextT"]').val();
			}
			break;
		case 'bot':
			if(jQuery('input[name="searchTextB"]').val()!='')
			{
				flag=true;
				text=jQuery('input[name="searchTextB"]').val();
			}
			break;

	}
	if(flag)
		url = '/search/?text='+text;
	else if (document.getElementById('searchProd').checked)
	{
		sel = document.getElementById('searchManuf');
		val = '';
		if (sel.selectedIndex > -1)
			val = sel.options[sel.selectedIndex].value
		url = '/selections/?price%5B0%5D='+document.getElementById('price0').value+
			'&price%5B1%5D='+document.getElementById('price1').value+
			'&manuf='+val+
			'&text='+document.getElementById('searchText').value;
	}
	if (url.length > 0)
		document.location.href = url;
	return false;

}
//---------------------------------------------------------------------
//
function CheckFields()
{
	names = new Array('name', 'phone');
	var empt = 0;
	for (i = 0; i < names.length; i++)
		empt+=CheckTextField(names[i], true);
	Count = names.length+assocCount(ExtraImp);
	res = empt + assocTrueCount(ExtraImp);
	if (res == Count)
		document.getElementById('button').disabled = false;
	else
		document.getElementById('button').disabled = true;
}

function callback_form(event,referer)
{
	if(jQuery('#zakaz_bl').length>0)
		jQuery('#zakaz_bl').remove();
	else
		{
		jQuery('.header__callback').after('<div id="zakaz_bl"><div>Заказать обратный звонок</div><div onClick="jQuery(\'#zakaz_bl\').remove();" id="close">&#10006;</div><form action="" method="post" id="callForm" ><table class="tbl_login" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td width="135">Ваше имя:</td><td><input class="inp_vhod" value="" name="name" type="text"></td></tr><tr><td>Ваш номер телефона:</td><td><input class="inp_vhod" name="number" value="" type="text"></td></tr><tr><td>Время звонка:</td><td><input value="" class="inp_vhod" name="time" type="text"></td></tr><tr><td></td><td><div class="send-callback button" onClick="callme(); return false;">Подтвердить</div></td></tr></tbody></table></form></div>');
		event.stopPropagation();
		jQuery(document).click(function(e){
	        var target = $(e.target);
	        if (target.is('#zakaz_bl') || target.parents('#zakaz_bl').length) return;
	        jQuery('#zakaz_bl').remove();
	    });
		}

}

function callme()
{
	
	jQuery.ajax({
			type: "POST",
			url: "/includes/callback1.php",
			data: '&'+jQuery('#callForm').serialize(),
			cache: false,
			success: function(html){
				jQuery("#zakaz_bl").html('<div>Заказать обратный звонок</div><center>Ваша заявка получена. Ожидайте звонка.</center>');
				setTimeout(callback_form,3000);
//				ga(['send', 'event', 'button', 'Клик по кнопке', 'Закзал обратный звонок']);
//				yaCounter26140461.reachGoal('zakazal_zvonok');
			}
		});
}


function getUrlVars() {
  vars = [];
  var hash;
  var hashes = window.location.href.split('?');
if(hashes[1]===undefined)
  return false;
  hashes=hashes[1].split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function get_cat_form_url()
{
	var hashes = window.location.href.split('?');
	url_split=hashes[0].split('/');
	for(var i=0;i<url_split.length;i++)
	{
		if(url_split[i]=='categories')
		return url_split[i+1];
	}
}

function in_array(needle,haystack,flag)
{
	var res=false;
	for(i=0;i<haystack.length;i++)
		if(haystack[i]==needle)
			switch(flag)
			{
				case 'SP':
					res=i
					break
				default:
					res=true
					break
			}
	return res;
}


//---------------------------------------------------------------------





































function CheckFields()
{
	names = new Array('name', 'phone');
	var empt = 0;
	for (i = 0; i < names.length; i++)
		empt+=CheckTextField(names[i], true);
	Count = names.length+assocCount(ExtraImp);
	res = empt + assocTrueCount(ExtraImp);
	if (res == Count)
		document.getElementById('button').disabled = false;
	else
		document.getElementById('button').disabled = true;
}

function order_form(event,referer)
{
	if(jQuery('#zakaz_bl').length>0)
		jQuery('#zakaz_bl').remove();
	else
		{
		jQuery('.header__callback').after('<div id="zakaz_bl"><div>Вызвать замерщика</div><div onClick="jQuery(\'#zakaz_bl\').remove();" id="close">&#10006;</div><form action="" method="post" id="callForm" ><table class="tbl_login" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td width="135">Имя:</td><td><input class="inp_vhod" value="" name="search[name]" type="text"></td></tr><tr><td>Телефон:</td><td><input class="inp_vhod" name="search[phone]" value="" type="text"></td></tr><tr><td>Адрес:</td><td><input class="inp_vhod" name="search[Адрес доставки]" value="" type="text"></td></tr><tr><td>Удобная дата и время:</td><td><input value="" class="inp_vhod" name="search[date]" type="text"></td></tr><tr><td></td><td><div class="send-callback button" onClick="order();">Подтвердить</div></td></tr></tbody></table></form></div>');                                          
		event.stopPropagation();
		jQuery(document).click(function(e){
	        var target = $(e.target);
	        if (target.is('#zakaz_bl') || target.parents('#zakaz_bl').length) return;
	        jQuery('#zakaz_bl').remove();
	    });
		}

}

function order()
{
	
	jQuery.ajax({
			type: "POST",
			url: "/includes/call_measurer.php",
			data: '&'+jQuery('#ordersform').serialize(),
			cache: false,
			success: function(html){
				jQuery("#zakaz_bl").html('<div>Вызвать замерщика</div><center>Ваша заявка получена. В ближайшее время с Вами свяжется наш менеджер.</center>');
				setTimeout(ordersform,3000);
//				ga(['send', 'event', 'button', 'Клик по кнопке', 'Закзал обратный звонок']);
//				yaCounter26140461.reachGoal('zakazal_zvonok');
			}
		});
}


function getUrlVars() {
  vars = [];
  var hash;
  var hashes = window.location.href.split('?');
if(hashes[1]===undefined)
  return false;
  hashes=hashes[1].split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function get_cat_form_url()
{
	var hashes = window.location.href.split('?');
	url_split=hashes[0].split('/');
	for(var i=0;i<url_split.length;i++)
	{
		if(url_split[i]=='categories')
		return url_split[i+1];
	}
}

function in_array(needle,haystack,flag)
{
	var res=false;
	for(i=0;i<haystack.length;i++)
		if(haystack[i]==needle)
			switch(flag)
			{
				case 'SP':
					res=i
					break
				default:
					res=true
					break
			}
	return res;
}