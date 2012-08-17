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
        
        // 衝突判定用エンティティ
        var entity = new Entity();
        entity.width = 100;
        entity.height= 100;
        entity.moveTo(110, 110);
        entity.backgroundColor = "blue";
        scene.addChild(entity);
        
        // 画像を生成, 表示
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets[CHARA_IMAGE];
        scene.addChild(sprite);
        
        // 画面タッチ移動時処理
        scene.ontouchmove = function(e) {
            sprite.x = e.x - (sprite.width/2);
            sprite.y = e.y - (sprite.height/2);
        };
        
        // シーン更新処理
        scene.onenterframe = function() {
            // 矩形による衝突判定
            if (sprite.intersect(entity) === true) {
                // 衝突している場合は赤くする
                entity.backgroundColor = "red";
            }
            else {
                // 衝突していない場合は青くする
                entity.backgroundColor = "blue";
            }
        };
    };
    
    // ゲーム開始
    game.start();
};