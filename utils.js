module.exports = {
    age: function(timestamp){
        let today = new Date();
        const birthdate = new Date(timestamp);

        let age = today.getFullYear() - birthdate.getFullYear();

        let month = today.getMonth() - birthdate.getMonth();

        if(month <= 0 || today.getDate() - birthdate.getDate()){
            age--;
        }

        return age;
    },
    data_format: function(timestamp) {
        let data = new Date(timestamp);

        let day     = `0${data.getDate()}`.slice(-2);
        let month   = `0${data.getMonth() + 1}`.slice(-2);
        let year    = data.getFullYear();
        
        return `${year}-${month}-${day}`
    }
}