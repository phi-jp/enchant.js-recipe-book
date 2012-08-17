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
        
        // グループを生成
        var group = new Group();
        // 中心に移動
        group.moveTo((SCREEN_WIDTH-32)/2, (SCREEN_HEIGHT-32)/2);
        // グループにスプライトを追加
        for (var i=0; i<16; ++i) {
            // スプライトを生成, 追加
            var sprite = new Sprite(32, 32);
            sprite.image = game.assets[CHARA_IMAGE];
            // 移動
            var rad = Math.PI*2/16*i;
            var x = Math.sin(rad) * 100;
            var y = Math.cos(rad) * 100;
            sprite.moveTo(x, y);
            group.addChild(sprite);
        }
        scene.addChild(group);
    };
    
    // ゲーム開始
    game.start();
};