/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var MONSTER_IMAGE   = "https://github.com/phi1618/enchant.js/raw/v0.4.4/images/monster/bigmonster1.gif";


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    // 画像読み込み
    game.preload(MONSTER_IMAGE);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // アバターモンスターを生成, 表示
        var monster = new AvatarMonster( game.assets[MONSTER_IMAGE] );
        monster.moveTo(50, 50);
        monster.action = "walk";  // アクション設定
        scene.addChild(monster);
        
        // 画面タッチ開始時処理
        scene.ontouchstart = function() {
            monster.action = "attack";
        };
    };
    
    // ゲーム開始
    game.start();
};