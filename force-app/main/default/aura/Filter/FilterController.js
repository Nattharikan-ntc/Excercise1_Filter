({
    doInit :  function(component, event, helper){
        var action = component.get("c.getAccountRecord");

        action.setCallback(this,function(response){
            var state = response.getState(); 
            if (component.isValid() && state === "SUCCESS"){
                console.log(JSON.stringify(response.getReturnValue()));
                component.set("v.acctList", response.getReturnValue());  // Adding values in Aura attribute variable.   
            }               
        });

        $A.enqueueAction(action);
    },

    handleEventAccount :function(component, event, helper) {
        var updatedExp = event.getParam("account");
        component.set("v.modalAcct",updatedExp);
        component.set("v.isOpen",true);
        console.log("Select Account in Top level",JSON.stringify(updatedExp));
    }
})