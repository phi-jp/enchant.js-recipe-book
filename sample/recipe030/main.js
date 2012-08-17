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
        var entity = new Entity();
        entity.backgroundColor = "red";
        entity.width = entity.height = 32;
        entity.moveTo(50, 50);
        scene.addChild(entity);
        
        // 画面タッチ時処理
        scene.ontouchstart = function() {
            if (entity.visible === true) {
                entity.visible = false;
            }
            else {
                entity.visible = true;
            }
        };
    };
    
    // ゲーム開始
    game.start();
};