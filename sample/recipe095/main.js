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
        
        // 複数のスプライトを生成, 表示
        var spriteList = [];
        for (var i=0; i<6; ++i) {
            var x = 20;
            var y = 20 + i*50;
            var sprite = new Sprite(32, 32);
            sprite.image = game.assets[CHARA_IMAGE];
            sprite.moveTo(x, y);
            scene.addChild(sprite);
            spriteList.push(sprite);
        }
        
        // イージングを指定してアニメーション(QUAD系)
        spriteList[0].tl
            .moveBy(250, 0, 60, enchant.Easing.QUAD_EASEIN)
            .rotateTo(360, 30, enchant.Easing.QUAD_EASEOUT)
            .moveBy(-250, 0, 60, enchant.Easing.QUAD_EASEOUT)
            .loop();
        
        // イージングを指定してアニメーション(QUBIC系)
        spriteList[1].tl
            .moveBy(250, 0, 60, enchant.Easing.QUBIC_EASEIN)
            .rotateTo(360, 30, enchant.Easing.QUBIC_EASEOUT)
            .moveBy(-250, 0, 60, enchant.Easing.QUBIC_EASEOUT)
            .loop();
        
        // イージングを指定してアニメーション(CIRC系)
        spriteList[2].tl
            .moveBy(250, 0, 60, enchant.Easing.CIRC_EASEIN)
            .rotateTo(360, 30, enchant.Easing.CIRC_EASEOUT)
            .moveBy(-250, 0, 60, enchant.Easing.CIRC_EASEOUT)
            .loop();
        
        // イージングを指定してアニメーション(ELASTIC系)
        spriteList[3].tl
            .moveBy(250, 0, 60, enchant.Easing.ELASTIC_EASEIN)
            .rotateTo(360, 30, enchant.Easing.ELASTIC_EASEOUT)
            .moveBy(-250, 0, 60, enchant.Easing.ELASTIC_EASEOUT)
            .loop();
        
        // イージングを指定してアニメーション(BOUNCE系)
        spriteList[4].tl
            .moveBy(250, 0, 60, enchant.Easing.BOUNCE_EASEIN)
            .rotateTo(360, 30, enchant.Easing.BOUNCE_EASEOUT)
            .moveBy(-250, 0, 60, enchant.Easing.BOUNCE_EASEOUT)
            .loop();
        
        // イージングを指定してアニメーション(EXPO系)
        spriteList[5].tl
            .moveBy(250, 0, 60, enchant.Easing.EXPO_EASEIN)
            .rotateTo(360, 30, enchant.Easing.EXPO_EASEOUT)
            .moveBy(-250, 0, 60, enchant.Easing.EXPO_EASEOUT)
            .loop();
    };
    
    // ゲーム開始
    game.start();
};