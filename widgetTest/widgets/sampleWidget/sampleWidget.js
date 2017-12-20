/**
 * Created by und on 11/27/13.
 */

// var TreeWidget = function(areaManager, params) {
// 	Widget.call(this, areaManager);
// 	this.div.html('<h1>hello!</h1>'); // отнаследовавшись мы можем работать со свойством div, которое и является нашим виджетом
// };
//
// TreeWidget.prototype = new Widget();
// TreeWidget.constructor = TreeWidget;
//
// TreeWidget.prototype.afterPlacement = function() { // этот метод будет вызван после того, как див попадёт в DOM-дерево
// 	this.div.children('h1').click(function() {
// 		this.innerHTML = 'bye!';
// 	});
// };
//
// TreeWidget._name = 'Пример виджета'; // имя виджета
// TreeWidget.prototype._name = 'Пример виджета'; // имя виджета
//
// Window.registerWidget(TreeWidget); // регистрация виджета для всех окон