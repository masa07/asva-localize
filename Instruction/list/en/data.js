
var data={"items":[
// Array Start
// 0
{	"title":"Instruction",
"text":"Each articles could be extended by tapping to read all text. Then, tapping again minimize segment. Tapping text make itsself appear/disappear.",
"imgSource":""},

{	"title":"Select Volume",
"text":"Current application sound volume is shown on center of navigation bar. You can change volume to tap each row in volume list. Tapping detail disclosure at right edge of row, you can edit volume row content. You can add new volume row to tap '+' button on right edge of navigation bar. To edit row order or delete row, you would tap 'edit' button at left edge os navigation bar.",
"imgSource":"list/en/list.png"},

// 1
{	"title":"Edit Volume",
"text":"You can change selected volume to use picker easily. Initialy, Available volume is limited to 20%. That limit value can be changed with a menu which is shown to tap limitaion label. Each Triangle and Squre shape at middle left is play and stop button. You can playback a music in itunes library to confirm volume you select. The text field at top center can change volume name.",
"imgSource":"list/en/edit.png"},


// 2
{	"title":"Assistant",
"text":"'Instructon' shows this page. 'Send Message' allow you to send request for this app or share infomation about this app with your friend. In 'facebook page' you could get latest information of this App.'Data Migration' could send analyzed photo date to another ASVA App was downloaded from App Store.",
"imgSource":"list/en/assistant.png"},

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