/*
 * おまじない
 */
enchant();


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game();
    
    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";
        
        // エンティティを生成, 表示
        var entity00 = new Entity();
        entity00.backgroundColor = "red";
        entity00.width    = 32;
        entity00.height   = 32;
        entity00.moveTo(50, 50);
        // 更新処理
        entity00.onenterframe = function() {
            this.moveBy(2, 1);      // 相対移動
        };
        scene.addChild(entity00);
        
        // エンティティを生成, 表示
        var entity01 = new Entity();
        entity01.backgroundColor = "blue";
        entity01.width    = 32;
        entity01.height   = 32;
        entity01.x = 50;
        entity01.y = 100;
        // 更新処理
        entity01.onenterframe = function() {
            this.x += 1;    // X 座標移動
            this.y += -2;   // Y 座標移動
        };
        scene.addChild(entity01);
    };
    
    // ゲーム開始
    game.start();
};