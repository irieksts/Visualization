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
        this._ul = element.append("table");
    };

    		Ullist.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        this.appendArray(this._ul, this.data());
        
        // var depth = 0;
        // var li = this._ul.selectAll("ul#parent > .row.innerRow").data(this.data());
        // li.enter().append("li")
            // .attr("class", "row innerRow")
        // ;
        // li.text(function(d) {return d[0];
        	// }).each (function (d) {
            // depth = 1;
          	// var liE = d3.select(this);
          	// var innerUl = liE.append("ul");
          	// var inner = innerUl.selectAll("ul#parent > .row.innerRow").data(d[1]);
          	// inner.enter().append("li")
          	// .attr("class", "row innerRow");
          	// inner
          	  // .text(function (d2) {
          	  	// return d2[0];
          	  // });
          	 // inner.exit().remove();
//           	
          // });
        // ;
//         
        // li.exit().remove();
        
    };
    
    Ullist.prototype.appendArray = function(element, arr) {
    	//var context = element;
    //	var innerUl = liE.append("ul");
   // 	li.text(function(d) {return d[0];
    //    	}).each (function (d) {
          	//var liE = element;
          	var innerUl = element.append("tr");
          	var inner = innerUl.selectAll("ul#parent > .dataRow").data(arr);
          	inner.enter().append("td")
          	.attr("class", "dataRow");
          	var context = this;
          	inner
          	  .text(function (d2) {
          	  	return d2[0];
          	  }).
          	  each(function(d) {
          	  	if(d[1] instanceof Array){
          	  		context.appendArray(d3.select(this), d[1]);
          	  	}
          	  }
          	  );
          	 inner.exit().remove();
          	
         // });
        ;
    };

    Ullist.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };
    
    

    return Ullist;
}));