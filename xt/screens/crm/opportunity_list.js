/*jshint bitwise:true, indent:2, curly:true eqeqeq:true, immed:true, latedef:true, newcap:true, noarg:true,
regexp:true, undef:true, strict:true, trailing:true white:true */

/*global XT:true, enyo:true, Globalize:true,*/

(function () {
  "use strict";

  enyo.kind({
    name: "XT.OpportunityInfoList",
    kind: "XT.InfoList",
    rowClass: "XT.OpportunityInfoCollectionRow"
  });

  enyo.kind({
    name: "XT.OpportunityInfoCollectionRow",
    kind: "XT.InfoListRow",
    leftColumn: [
      [
        { width: 200 },
        { name: "number", classes: "cell-key opportunity-number" },
        { name: "name", classes: "opportunity-description" }
      ],
      [
        { width: 120 },
        { name: "targetClose", classes: "cell-align-right", formatter: "formatTargetClose" }
      ]
    ],
    rightColumn: [
      [
        { width: 120 },
        { name: "account.name", classes: "cell-italic opportunity-account-name" },
        { name: "contact.getName", classes: "opportunity-contact-name" }
      ],
      [
        { width: 70 },
        { name: "opportunityStage.name", classes: "opportunity-opportunityStage-name" },
        { name: "owner.username", classes: "opportunity-owner-username" }
      ]
    ],
    formatTargetClose: function (content, model, view) {
      var today = new Date();
      if (model.get('isActive') &&
          content && XT.date.compareDate(content, today) < 1) {
        view.addClass("error");
      } else {
        view.removeClass("error");
      }
      return content;
    }
  });

}());