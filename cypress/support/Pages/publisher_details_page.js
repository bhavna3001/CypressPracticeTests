module.exports ={

    id_field: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(2) > div > span');
    },
    status_field: function(){
        return('//*[@id="wrap"]/div/div[2]/div/div/div/form/fieldset/div[2]/div/select');
    },
    Update_basic_Details: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(20) > div > button');
    },
    company_name: function(){
        return('input[name="company"]');
    },
    primary_contact: function(){
        return('input[name="contact"]');
        
    }

}