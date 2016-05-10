"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["../common/HTMLWidget", "css!./Ullist"], factory);
    } else {
        root.template_Ullist = factory(root.common_HTMLWidget);
    }
}(this, function (HTMLWidget) {
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
        var li = this._ul.selectAll("dataRow").data(this.data());
        li.enter().append("li")
            .attr("class", "dataRow")
        ;
        li.text(function(d) {return d[0];});
        li.exit().remove();
        
    };

    Ullist.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    return Ullist;
}));