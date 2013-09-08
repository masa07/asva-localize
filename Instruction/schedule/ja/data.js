
var data={"items":[
// Array Start
// 0
{	"title":"使い方",
"text":"各項目はタップすることで広がって、全文を読むことが出来ます。もう一度タップすると、元に戻ります。本文をタップすると非表示なり、 背景の画像をご覧に慣れます。もう一度タップすると、再び表示されます。",
"imgSource":""},

{	"title":"スケジュール",
"text":"右端のスイッチが有効になっている項目の時間に、音量が指定された値に変更されます。各項目の右端のスイッチで有効/無効を簡単に変更できます。項目の内容を編集したい場合は各項目の中央をタップしてください。項目を追加する場合は、ナビゲーションバー右端の'+'ボタンをタップしてください。左端の'編集'ボタンで項目の削除や順序の変更ができます。",
"imgSource":"schedule/ja/list.png"},

{	"title":"設定を変更する",
"text":"リストで表示される名前変更できます。日付や音量はタップして表示される画面で変更できます。予定の繰り返しは 'なし' '毎日' '毎週' '毎月' '毎年' から選んで設定できます。",
"imgSource":"schedule/ja/edit.png"},

{	"title":"日付を設定する",
"text":"'+'ボタンと'-'ボタンはそれぞれ選択する日付を月単位で進めたり戻したりできます。",
"imgSource":"schedule/ja/datepicker.png"},

// 2
{	"title":"アシスタント",
"text":"「音量リスト」では選択可能な音量の編集、追加、削除することができます。「説明書」はこの画面を表示します。「メッセージを送る」はこのアプリに関するご意見を様々な方法で送ることができます。「フェイスブックページ」はこのアプリに関する情報を表示します。「データを移行する」ではタップして表示されるアプリに音量リストを送ることができます。",
"imgSource":"common/ja/assistant.png"},

{	"title":"音量リスト",
"text":"ナビゲーションバーのタイトルには現在の音量が表示されています。各項目をタップすることで音量を簡単に変更できます。項目の内容を編集したい場合は各項目右端の詳細ボタンをタップしてください。項目を追加する場合は、ナビゲーションバー右端の'+'ボタンをタップしてください。'編集'ボタンで項目の削除や順序の変更ができます。",
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