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
        this._tag = "ul";
    }
    
    Ullist.prototype = Object.create(HTMLWidget.prototype);
    Ullist.prototype.constructor = Ullist;
    Ullist.prototype._class += " template_Ullist";

  //  Ullist.prototype.publish("stringProp", "defaultValue", "string", "Sample Property");

    Ullist.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
    };

    Ullist.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
    };

    Ullist.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    return Ullist;
}));