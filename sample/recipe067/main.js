/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;
var SAMPLE_SE       = "http://enchantjs.com/assets/sounds/se1.wav";


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    // 画像読み込み
    game.preload(SAMPLE_SE);
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // エンティティを生成, 表示
        var entity = new Entity();
        entity.width  = 50;
        entity.height = 50;
        entity.moveTo(160-25, 160-25);  // 中心に移動
        entity.backgroundColor = "red";
        // タッチ開始時処理
        entity.ontouchstart = function() {
            var se = game.assets[SAMPLE_SE];
            se.play();
        };
        scene.addChild(entity);
    };
    
    // ゲーム開始
    game.start();
};