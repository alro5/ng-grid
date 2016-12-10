app.component('grid', {
    controller: grid,
    templateUrl: '/js/grid/grid.html',
    bindings: {
    	items: '<',
    	columns: '@?',
    	gutter: '@?'
    }
  });

function grid() {
  var ctrl = this;

  ctrl.items = [
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' }
  ];

  // Default is 4
  ctrl.columns = ctrl.columns ? ctrl.columns : 4;

  // Default is 10
  ctrl.gutter = ctrl.gutter ? ctrl.gutter : 10;

  ctrl.gridSize = 'width: calc((100% / ' + ctrl.columns+') - '+ctrl.gutter * 2 + 'px)';
}