({
    selectAccount : function(component, event, helper) {
        var acc = component.get("v.account");
        var updateEvent = component.getEvent("eventAccount");
        updateEvent.setParams({ "account": acc });
        updateEvent.fire();
        console.log(JSON.stringify(acc));
    },

   
})
