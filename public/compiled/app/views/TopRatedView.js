// Generated by CoffeeScript 1.12.2
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TopRatedView = (function(superClass) {
    extend(TopRatedView, superClass);

    function TopRatedView() {
      return TopRatedView.__super__.constructor.apply(this, arguments);
    }

    TopRatedView.prototype.template = '<div> <h2>Top Rated <a class="tip5" data-toggle="tooltip" data-placement="right" title="These are the best rated movies overall with the exclusion of outliers."> <i class="icon-info-sign smallicon"></i> </a> </h2> <div id="toprated"> </div> </div>';

    TopRatedView.prototype.initialize = function() {
      this.oldRated;
      this.$el.append(this.template);
      this.$('.tip5').tooltip('hide');
      this.$('#toprated').isotope({
        itemSelector: '.element',
        animationEngine: 'jquery'
      });
      return setTimeout(function() {
        return this.$('#toprated').isotope('reLayout');
      }, 100);
    };

    TopRatedView.prototype.translateRes = function(res) {
      var index, ref, value;
      this.scoreImport = res.bestScores;
      this.movieArray = [];
      this.scoreArray = [];
      this.scoreLength = this.scoreImport.length;
      ref = this.scoreImport;
      for (index in ref) {
        value = ref[index];
        if (index % 2 === 0) {
          this.movieArray.push(value);
        } else {
          this.scoreArray.push(value);
        }
      }
      return this.reRender();
    };

    TopRatedView.prototype.reRender = function() {
      var index, movieid, newMovie, ref;
      this.$('#toprated').isotope('remove', this.$('#toprated').children());
      ref = this.movieArray;
      for (index in ref) {
        movieid = ref[index];
        this.movie = this.model.userObj.movieLookup[movieid] || 'newMovie';
        newMovie = $('<div id="' + movieid + '" class="element sprites ' + this.movie.replace(/\s+/g, '').toLowerCase() + '">' + this.movie + '</br><div class="rating">' + this.scoreArray[index].substring(0, 4) + '</div></div>');
        this.$('#toprated').isotope('insert', newMovie);
      }
      return this.$('#toprated').isotope({
        sortBy: 'rating'
      });
    };

    return TopRatedView;

  })(Backbone.View);

}).call(this);
