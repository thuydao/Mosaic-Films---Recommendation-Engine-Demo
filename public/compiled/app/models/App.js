// Generated by CoffeeScript 1.12.2
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.App = (function(superClass) {
    extend(App, superClass);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var loginInfo, movieList, recommendationList;
      this.set('loginInfo', loginInfo = new LoginInfo());
      this.set('movieList', movieList = new MovieList());
      return this.set('recommendationList', recommendationList = new RecommendationList());
    };

    return App;

  })(Backbone.Model);

}).call(this);
