class Date{
    constructor(year,month,day){
        this.year = year;
        this.month = this.ValidateMonth(month);
        this.day = day;

    }
    Print() {
        return`${this.year}/${this.month}/${this.day}`;
    }
    ValidateMonth(m){
        if(m < 1 || m > 12){
            throw new Error('Estas loco');
        }
        return m
}
}
module.exports = {Date};
