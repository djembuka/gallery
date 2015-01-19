(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#gallery', {
    setup: function() {
      this.elem = $( '#gallery' ).gallery();
      this.num = this.elem.find( 'img' ).length;
    }
  });

  test('render', function() {
    expect(5);
    
    ok( $( '#gallery .b-gallery__belt' ).length, 'belt element' );
    ok( $( '#gallery .b-gallery__images' ).length, 'images element' );
    equal( $( '#gallery .b-gallery__i' ).length, this.num, 'items element' );
    ok( $( '#gallery .b-gallery__nav' ).length, 'nav element' );
    equal( $( '#gallery .b-gallery__nav__i' ).length, this.num, 'nav items' );
  });

  test('nav events', function() {
    expect(2);
    
    var $navItem = this.elem.find( '.b-gallery__nav__i:eq(3)' );
    var $belt = this.elem.find( '.b-gallery__belt' );
    var event = $.Event( 'click' );
    $navItem.trigger( event );
    
    ok( $navItem.hasClass( 'i-active' ), 'highlight' );
    ok( parseInt( $belt.css( 'marginLeft' ), 10) !== 0, 'navigate' );
  });

  test('img events', function() {
    expect(1);
    
    var $img = this.elem.find( 'img:eq(0)' );
    var $belt = this.elem.find( '.b-gallery__belt' );
    var event = $.Event( 'click' );
    $img.trigger( event );
    
    ok( parseInt( $belt.css( 'marginLeft' ), 10) !== 0, 'navigate' );
  });

}(jQuery));
