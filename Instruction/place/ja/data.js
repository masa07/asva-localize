
var data={"items":[
// Array Start
// 0
{	"title":"使い方",
"text":"各項目はタップすることで広がって、全文を読むことが出来ます。もう一度タップすると、元に戻ります。本文をタップすると非表示なり、 背景の画像をご覧に慣れます。もう一度タップすると、再び表示されます。",
"imgSource":""},

{	"title":"場所リスト",
"text":"右端のスイッチが有効になっている項目の場所で、音量が設定に従ってに変更されます。各項目の右端のスイッチで有効/無効を簡単に変更できます。項目の内容を編集したい場合は各項目の中央をタップしてください。項目を追加する場合は、ナビゲーションバー右端の'+'ボタンをタップしてください。左端の'編集'ボタンで項目の削除や順序の変更ができます。",
"imgSource":"place/ja/list.png"},

{	"title":"場所の設定を変更する",
"text":"タグは場所リストで表示される名前変更できます。外側、内側はそれぞれ設定した場所の半径２００メートルから出たり、入ったりした場合に変更される音量を指定できます。場所の項目をタップすると地図が表示されて変更することができます。",
"imgSource":"place/ja/edit.png"},

{	"title":"ロケーション",
"text":"地図を長押しするとピンがドロップされて、音量を変更したい場所を指定できます。左下の'U'と'P'はそれぞれ現在地とピンがドロップされている位置を地図の中心にします。地図上の青い円はすでに登録されている場所を示しています。赤い円は現在設定されている場所を示しています。",
"imgSource":"place/ja/map.png"},

// 2
{	"title":"アシスタント",
"text":"「音量リスト」では選択可能な音量の編集、追加、削除することができます。「説明書」はこの画面を表示します。「メッセージを送る」はこのアプリに関するご意見を様々な方法で送ることができます。「フェイスブックページ」はこのアプリに関する情報を表示します。「データを移行する」ではタップして表示されるアプリに音量リストを送ることができます。",
"imgSource":"common/ja/assistant.png"},

{	"title":"音量リスト",
"text":"項目の内容を編集したい場合は各項目右端の詳細ボタンをタップしてください。項目を追加する場合は、ナビゲーションバー右端の'+'ボタンをタップしてください。'編集'ボタンで項目の削除や順序の変更ができます。",
"imgSource":"common/ja/assistantvollist.png"},

// 1
{	"title":"音量を設定する",
"text":"ピッカーで数字を選んで音量をパーセント単位で変更できます。初期設定では音量の上限が20%に制限されています。この値は、右下の上限ラベルをタップして表示されるメニューで変更できます。左下の三角形と正方形はそれぞれ再生と停止のボタンです。iTunesライブラリの音楽を再生して、音量を確かめることができます。画面上部テキストフィールドで音量の名前を変更できます。",
"imgSource":"common/ja/editvolume.png"},

// 3
{	"title":"メッセージを送る",
"text":"様々な方法でメッセージを送ることができます。このアプリ関するご意見は、「#asva」タグでツイートしてください。次のバージョンの参考にさせて頂きます。",
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