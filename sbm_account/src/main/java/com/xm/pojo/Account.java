
package com.xm.pojo;

public class Account {
	
    private Integer id;
    private String cdate;
    private float money;
    private String note;

    public Account() {
    }

    public Account(String cdate, float money, String note) {
        this.cdate = cdate;
        this.money = money;
        this.note = note;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCdate() {
        return cdate;
    }

    public void setCdate(String cdate) {
        this.cdate = cdate;
    }

    public float getMoney() {
        return money;
    }

    public void setMoney(float money) {
        this.money = money;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public String toString() {
        return "Account{" + "id=" + id + ", cdate=" + cdate + ", money=" + money + ", note=" + note + '}';
    }

  
}
