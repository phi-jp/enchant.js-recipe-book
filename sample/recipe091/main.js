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
        sprite.moveTo(-50, -50);
        sprite.image = game.assets[CHARA_IMAGE];
        scene.addChild(sprite);
        
        // tl によるアニメーション
        sprite.tl.moveTo(160-16, 160-16, 30).cue({
              0: function() { this.frame = 1; },
             30: function() { this.frame = 2; },
             60: function() { this.frame = 3; },
             90: function() { this.frame = 4; },
            120: function() { this.frame = 5; },
            150: function() { this.frame = 6; },
            180: function() { this.frame = 7; },
            210: function() { this.frame = 8; },
            240: function() { this.frame =10; },
            270: function() { this.frame =11; },
            300: function() { this.frame =12; },
            330: function() { this.frame =13; },
            360: function() {
                this.frame = 0;
                alert("アニメーション完了しました!!");
            }
        });
    };
    
    // ゲーム開始
    game.start();
};