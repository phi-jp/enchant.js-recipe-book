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
        entity.backgroundColor = "red";         // 背景色を指定
        entity.width = entity.height = 32;
        scene.addChild(entity);
    };
    
    // ゲーム開始
    game.start();
};