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
        scene.backgroundColor = "#aaa";
        
        // バーチャルキーパッドを生成
        var pad = new Pad();
        pad.moveTo(0, 220);
        scene.addChild(pad);
        
        // 画像を生成, 表示
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets[CHARA_IMAGE];
        sprite.moveTo(50, 50);
        
        // 更新処理
        sprite.onenterframe = function() {
            var input = game.input;
            // キーに応じて移動
            if (input.left  === true) { this.x -= 4; }
            if (input.right === true) { this.x += 4; }
            if (input.up    === true) { this.y -= 4; }
            if (input.down  === true) { this.y += 4; }
        };
        scene.addChild(sprite);
    };
    
    // ゲーム開始
    game.start();
};