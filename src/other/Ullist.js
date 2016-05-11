"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["d3", "../common/HTMLWidget", "css!./Ullist"], factory);
    } else {
        root.template_Ullist = factory(root.d3, root.common_HTMLWidget);
    }
}(this, function (d3, HTMLWidget) {
    function Ullist(target) {
        HTMLWidget.call(this);

        this._tag = "div";
    }
    Ullist.prototype = Object.create(HTMLWidget.prototype);
    Ullist.prototype.constructor = Ullist;
    Ullist.prototype._class += " other_Ullist";

    Ullist.prototype.publish("stringProp", "defaultValue", "string", "Sample Property");

    Ullist.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
    };

    Ullist.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        d3.select(domNode.parentNode).style("overflow", "auto");
        this.updateArray(element, this.data(), 0);
    };

    Ullist.prototype.updateArray = function (element, _, depth) {
        var ul = element.selectAll("container#parent > ul").data(_ instanceof Array ? [_] : []);
        ul.enter().append("ul")
            .attr("data-depth", depth)
        ;

        var li = ul.selectAll("ul#parent > .dataRow").data(_);
        li.enter().append("li")
            .attr("class", "dataRow")
        ;
        var context = this;
        li
            .text(function (row) {
                return row[0] + " - " + depth;
            })
            .each(function (row) {
                context.updateArray(d3.select(this), row[1], depth + 1);
            })
        ;
        li.exit().remove();

        ul.exit().remove()
    }

    Ullist.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    return Ullist;
}));