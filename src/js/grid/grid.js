app.component('grid', {
    controller: grid,
    templateUrl: '/js/grid/grid.html',
    bindings: {
      options: '<',
    	items: '<'
    }
  });

function grid($element, $timeout) {
  var ctrl = this;
  var grid = $element[0];

  // Set defaults
  ctrl.options.columns = ctrl.options.columns ? ctrl.options.columns : 4;
  ctrl.options.gutter = ctrl.options.gutter ? ctrl.options.gutter : 10;
  ctrl.options.gridType = ctrl.options.gridType ? ctrl.options.gridType : 'flexbox';
  ctrl.numberArray = [];

  if (ctrl.options.gridType === 'flexbox') {
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
  } else if (ctrl.options.gridType === 'float') {
    document.styleSheets[0].insertRule('grid::after { content: ""; clear: both; }', 0);
  }
 
  // Mock
  ctrl.items = [
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere erere asd ere erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere Lorem ipsom doloer erere asd ere Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
    { 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' },
  	{ 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd ere Lorem ipsom doloer erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' }
  ];

  ctrl.columns = function(number) {
    $timeout(function() {
      var gridItems = grid.querySelectorAll('.grid-item');
      for (var i = 0; i < gridItems.length; i++) {
        gridItems[i].style.width = 'calc((100% / ' + number +') - '+ctrl.options.gutter * 2 + 'px)';
        gridItems[i].style.margin = ctrl.options.gutter + 'px';
        if (ctrl.options.gridType === 'inline-block') {
          gridItems[i].style.display = 'inline-block';
          gridItems[i].style.verticalAlign = 'top';
        } else if (ctrl.options.gridType === 'float') {
          gridItems[i].style.float = 'left';
        }
      }
    });
  }

  ctrl.responsiveColumns = function() {
     if (ctrl.options.breakpoints) {
      for (var i = 0; i < ctrl.options.breakpoints.length; i++) {
        var firstBreakpoint = Math.max.apply(Math, ctrl.numberArray);
        if (window.innerWidth < ctrl.options.breakpoints[i].breakAt) {
          ctrl.columns(ctrl.options.breakpoints[i].columns);
          ctrl.numberArray.push(ctrl.options.breakpoints[i].breakAt);
        } else if (window.innerWidth > firstBreakpoint) {
          ctrl.columns(ctrl.options.columns);
        }
      }
    } 
  }

  ctrl.resizeHandler = function() {
    window.addEventListener('resize', function(event) {
      ctrl.responsiveColumns();
    });
  }

  ctrl.initHandler = function() {
    ctrl.responsiveColumns();
  }

  ctrl.recalculate = function() {
    ctrl.columns(ctrl.options.columns);
  }

  ctrl.addItem = function() {
    var item = { 'title': 'Hello world!', 'text': 'Lorem ipsom doloer erere asd easdasdare erere asd ere erere asd ere', 'imageUrl': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150' };
    ctrl.items.push(item);
    ctrl.recalculate();
  }

  // Get initial columns count
  ctrl.columns(ctrl.options.columns);
  // Resize handler for responsive columns
  ctrl.resizeHandler();
  // Init handler for responsive columns
  ctrl.initHandler();
}
