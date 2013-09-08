
var data={"items":[
// Array Start
// 0
{	"title":"使い方",
"text":"各項目はタップすることで広がって、全文を読むことが出来ます。もう一度タップすると、元に戻ります。本文をタップすると非表示なり、 背景の画像をご覧に慣れます。もう一度タップすると、再び表示されます。",
"imgSource":""},

// 1
{	"title":"音量",
"text":"ピッカーで数字を選んで音量をパーセント単位で変更できます。初期設定では音量の上限が20%に制限されています。この値は、右下の上限ラベルをタップして表示されるメニューで変更できます。左下の三角形と正方形はそれぞれ再生と停止のボタンです。iTunesライブラリの音楽を再生して、音量を確かめることができます。画面上部の小さな文字列は、URLスキームです。タップで表示されるメニューでコピーすることができます。ブラウザなどインターネットアドレスを開くことのできるアプリから、音量を指定できます。",
"imgSource":"handy/ja/handy.png"},

// 2
{	"title":"アシスタント",
"text":"「説明書」はこの画面を表示します。「メッセージを送る」はこのアプリに関するご意見を様々な方法で送ることができます。「フェイスブックページ」はこのアプリに関する情報を表示します。",
"imgSource":"handy/ja/assistant.png"},

// 3
{	"title":"メッセージを送る",
"text":"様々な方法でメッセージを送ることができます。このアプリ関するご意見は、「#PhotoPik」タグでツイートしてください。次のバージョンの参考にさせて頂きます。",
"imgSource":"common/ja/sendmessage.png"}

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