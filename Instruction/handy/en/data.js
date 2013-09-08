
var data={"items":[
// Array Start
// 0
{	"title":"Instruction",
"text":"Each articles could be extended by tapping to read all text. Then, tapping again minimize segment. Tapping text make itsself appear/disappear.",
"imgSource":""},

// 1
{	"title":"Volume",
"text":"You can change application sound volume to use picker easily. Initialy, Volume is limited to 20%. That limit value can be changed with a menu which is shown to tap limitaion label. Each Triangle and Squre shape at middle left is play and stop button. You can playback a music in itunes library to confirm volume you select. The strings at top center is  URLScheme. You can copy it with menu which is shown by tapping it. That URLScheme can be used to change volume from another App.",
"imgSource":"handy/en/handy.png"},

// 2
{	"title":"Assistant",
"text":"'Instructon' shows this page. 'Send Message' allow you to send request for this app or share infomation about this app with your friend. In 'facebook page' you could get latest information of this App. ",
"imgSource":"handy/en/assistant.png"},

// 3
{	"title":"Send Message",
"text":"You can send a meesage by some ways. If you have a request for this app, you shoud tweet that with '#ASVA' Tag. So Your request will be referenced for next version.",
"imgSource":"common/en/sendmessage.png"}

// 4


// 5

/*
// 
{	"title":"",
"text":"",
"imgSource":""}
*/

]// End of Array
};// End of Json

/*var loadData=function () {
	var t=document.getElementsByTagName("table").item(0); 
	var tbody=t.innerHTML;
	var tbodies=[];
	var items;
	var lang=location.search.substring(1);
	if (!lang.length) {
		lang='ja';
	}
	if ('ja'==lang) {
		items=jaData.items;
	}else{
		items=enData.items;
	}
	//alert(items);
	for (var i = 0; i < items.length; i++) {
		var rtbody=tbody;
		rtbody=rtbody.replace('-title-', items[i].title);
		rtbody=rtbody.replace('-text-', items[i].text);
		rtbody=rtbody.replace('-src-', items[i].imgSource);
	//	alert(rtbody);
		tbodies.push(rtbody);
	}
	//alert(tbodies);
	t.innerHTML=tbodies.join('');
};
*/
loadData();