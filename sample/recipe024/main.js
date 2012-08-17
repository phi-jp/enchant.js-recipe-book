/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var CHARA_IMAGE     = "http://enchantjs.com/assets/images/chara1.gif";


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    // 画像読み込み
    game.preload(CHARA_IMAGE);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // 画像を生成, 表示
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets[CHARA_IMAGE];
        scene.addChild(sprite);
        
        // タッチスタートイベントリスナを登録
        sprite.addEventListener("touchstart", function() {
            alert("タッチされました!!");
            
            // ２度と呼ばないようイベントリスナから削除
            // arguments.callee で自分自身(呼び出している関数)への参照を取得
            this.removeEventListener("touchstart", arguments.callee);
        });
    };
    
    // ゲーム開始
    game.start();
};