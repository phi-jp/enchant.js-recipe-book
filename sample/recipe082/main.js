/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var AVATAR_CODE     = "2:2:1:2004:21230:22480";


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // アバターを生成, 表示
        var avatar = new Avatar(AVATAR_CODE);
        avatar.moveTo(50, 50);
        avatar.action = "run";  // アクション設定
        scene.addChild(avatar);
        
        // 画面タッチ開始時処理
        scene.ontouchstart = function() {
            avatar.action = "attack";
        };
    };
    
    // ゲーム開始
    game.start();
};