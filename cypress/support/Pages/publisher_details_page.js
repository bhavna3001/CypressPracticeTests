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
    successful_message: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div.alert.alert-success.alert-dismissable')
    },
    company_name: function(){
        return('input[name="company"]');
    },
    primary_contact: function(){
        return('input[name="contact"]');
        
    },
    account_manager: function(){
        return('[rel="account_manager"] > .col-sm-10 > .form-user-input');
    },
    sales_manager: function(){
        return('[rel="sales_manager"] > .col-sm-10 > .form-user-input');
    },
    contact_email_address: function(){
        return('input[name="email"]');
    },
    phone_number: function(){
        return('input[name="phone"]');

    },
    country: function(){
        return('//*[@id="wrap"]/div/div[2]/div/div/div/form/fieldset/div[9]/div/select');
    },
    state: function(){
        return('//*[@id="wrap"]/div/div[2]/div/div/div/form/fieldset/div[10]/div/select');
    },
    city: function(){
        return('input[name="city"]');
    },
    Address_Line_1: function(){
        return('input[name="address1"]');

    },
    Address_Line_2: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(14) > div > input');
    },
    Post_code: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(15) > div > input');
    },
    currency: function(){
        return('//*[@id="wrap"]/div/div[2]/div/div/div/form/fieldset/div[15]/div/select');
    },
    referrer: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(17) > div > input');
    },
    hub_version: function(){
        return('//*[@id="wrap"]/div/div[2]/div/div/div/form/fieldset/div[17]/div/select');
    },
    note: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(19) > div > textarea');
    },
    currency_error: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div.form-user-input-group.form-group.has-error > div > small');

    },
    status_error: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(3) > div > small');
    },
    companyname_error: function(){
         return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(4) > div > small');
    },
    contact_error: function(){
        return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(5) > div > small');
    },
    email_error: function(){
          return('#wrap > div > div:nth-child(2) > div > div > div > form > fieldset > div:nth-child(8) > div > small');
    }
}