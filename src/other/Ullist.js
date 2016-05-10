"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["d3", "../common/HTMLWidget", "css!./Ullist"], factory);
    } else {
        root.template_Ullist = factory(root.d3, root.common_HTMLWidget);
    }
}(this, function (d3, HTMLWidget) {
    function Ullist() {
        HTMLWidget.call(this);
        this._tag = "div";
    }
    
    Ullist.prototype = Object.create(HTMLWidget.prototype);
    Ullist.prototype.constructor = Ullist;
    Ullist.prototype._class += " other_Ullist";

    Ullist.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        this._ul = element.append("ul");
    };

    		Ullist.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        var depth = 0;
        var li = this._ul.selectAll(".innerRow" + depth).data(this.data());
        li.enter().append("li")
            .attr("class", "innerRow" + depth)
        ;
        li.text(function(d) {return d[0];
        	}).each (function (d) {
            depth = 1;
          	var liE = d3.select(this);
          	var innerUl = liE.append("ul");
          	var inner = innerUl.selectAll(".innerRow" + depth).data(d[1]);
          	inner.enter().append("li")
          	.attr("class", "innerRow" + depth);
          	inner
          	  .text(function (d2) {
          	  	return d2[0];
          	  });
          	 inner.exit().remove();
          	
          });
        ;
        
        li.exit().remove();
        
    };

    Ullist.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    return Ullist;
}));