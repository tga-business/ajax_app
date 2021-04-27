function post(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    //eはイベントオブジェクト、イベント発生時の情報を持ったオブジェクト
    //clickがイベントなので投稿ボタンをクリックしたというイベントを指す
    //e.preventDefaultでeのイベントを無効化
    const form = document.getElementById("form")
    const formData = new FormData(form); 
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true)
    //openメソッドでリクエストを初期化し、リクエストの内容を
     //HTTPメソッドのPOST、パスの指定、非同期通信のon,offの決定を記述
     XHR.responseType = "json";
     //レスポンスのデータフォマットをJSON形式に変更
     XHR.send(formData)
     //sendでformDataをサーバー側にリクエストとして送信
  });
}

window.addEventListener('load', post);