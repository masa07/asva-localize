
var data={"items":[
// Array Start
// 0
{	"title":"Instruction",
"text":"Each articles could be extended by tapping to read all text. Then, tapping again minimize segment. Tapping text make itsself appear/disappear.",
"imgSource":""},

// 1
{	"title":"Schedule List",
"text":"Each row displays schedule name, bolume and date, you can alter active state of changing volume on that schedule with right edge switch. Tapping row, you could edit a content of schedule row. You could add new schedule row to tap '+' button on right edge of navigation bar. To edit row order or delete row, you would tap 'edit' button on navigation bar.",
"imgSource":"schedule/en/list.png"},

// 2
{	"title":"Edit Schedule",
"text":"'Text field can change schedule name displayed in place list. You could chnge schedule date and volume to tap that row. Interval cab be chosen from list 'None', 'Daily', 'Weekly', 'Monthly', 'Yearly'.",
"imgSource":"place/en/edit.png"},

{	"title":"Date Picker",
"text":"Tapping '+' and '-' button forward and backward a month.",
"imgSource":"schedule/en/datepicker.png"},

// 4
{	"title":"Assistant",
"text":"'Volume List' shows volumes and you can edit, add, delete them.'Instructon' shows this page. 'Send Message' allow you to send request for this app or share infomation about this app with your friend. In 'facebook page' you could get latest information of this App.'Data Migration' could send analyzed photo date to another ASVA App was downloaded from App Store.",
"imgSource":"common/en/assistant.png"},

// 5
{	"title":"Volume List",
"text":"Tapping detail disclosure at right edge of row, you can edit volume row content. You can add new volume row to tap '+' button on right edge of navigation bar. To edit row order or delete row, you would tap 'edit' button on navigation bar.",
"imgSource":"common/en/assistantvollist.png"},

// 6
{	"title":"Edit Volume",
"text":"You can change volume value to use picker easily. Initialy, Available volume is limited to 20%. That limit value can be changed with a menu which is shown to tap limitaion label. Each Triangle and Squre shape at middle left is play and stop button. You can playback a music in iTunes library to confirm volume you change. The text field at top center can be used to change volume name.",
"imgSource":"common/en/editvolume.png"},

// 7
{	"title":"Send Message",
"text":"You can send a meesage by some ways. If you have a request for this app, you shoud tweet that with '#ASVA' Tag. So Your request will be referenced for next version.",
"imgSource":"common/en/sendmessage.png"}


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