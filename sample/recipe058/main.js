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
    // キーを割り当てる(キーバインド)
    game.keybind('Z'.charCodeAt(0), 'a');   // 'Z' Key を 'a' ボタンとして割り当てる
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // 画像を生成, 表示
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets[CHARA_IMAGE];
        sprite.moveTo(50, 200);
        sprite.vy = 0;
        // 更新処理
        sprite.onenterframe = function() {
            var input = game.input;
            // キーに応じて移動
            if (input.left  === true) { this.x -= 2; }
            if (input.right === true) { this.x += 2; }
            
            // ジャンプ
            if (input.a === true && this.y == 200) {
                this.vy = -5;
            }
            // ジャンプ座標値反映
            this.y  += this.vy;
            this.vy += 0.25;
            
            // 地面に付いたかを判定
            if (this.y > 200) {
                this.y = 200;
                this.vy = 0;
            }
        };
        scene.addChild(sprite);
    };
    
    // ゲーム開始
    game.start();
};