public with sharing class accountRecord {
    // List<String> acct = new List<String>; 
    public static List<Account> acct{get;set;}

    @AuraEnabled
    public static List<Account> getAccountRecord(){
        acct = [SELECT Name,Phone,Email__c,Picture__c FROM Account];
        return acct;
    }

}
