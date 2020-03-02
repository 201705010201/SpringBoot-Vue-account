package com.xm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;


import com.xm.mapper.AccountMapper;
import com.xm.pojo.Account;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin
@RestController
public class AccountController {
    @Autowired
    private AccountMapper accountMapper;

    /**
        * 明细查询
        * @param date1
        * @param date2
        * @return
     */
    @GetMapping("/details/{date1}/{date2}")
    public List<Account> details(@PathVariable("date1") String date1,@PathVariable("date2") String date2)  {
            Map map = new HashMap();
            map.put("date1", date1);
            map.put("date2", date2);
            List<Account> accounts  = accountMapper.selectAccountByDate(map);
            return accounts;
    }
        
    /**
        * 日统计
        * @return
    */
    @GetMapping("/daylist/{date1}/{date2}")
    public List<Map> daylist(@PathVariable("date1") String date1, @PathVariable("date2") String date2) {
            Map map = new HashMap();
            map.put("date1",date1);
            map.put("date2",date2);
            List<Map> maps  =  accountMapper.selectAccountByDay(map);
            return maps;
    }

    /**
        * 月统计
        * @return
    */
    @GetMapping("/monthlist")
    public List<Map> monthlist(){
    	List<Map> maps  =  accountMapper.selectAccountByMonth();
    	return maps;
    }

    /**
        * 年统计
        * @return
    */
    @GetMapping("/yearlist")
    public List<Map> yearlist(){
    	List<Map> maps  =  accountMapper.selectAccountByYear();
    	return maps;
    }
        
    /**
        * 插入
        * @param account
        * @return
    */
    @PostMapping("/add")
    public String add(@RequestBody Account account) {
    	Integer rows  = accountMapper.saveAccount(account);
    	return "{\"rows\":\""+rows+"\"}" ;
    }

    /**
        * 根据id删除
        * @param id
        * @return
    */
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Integer id) {
    	Integer rows  = accountMapper.removeAccount(id);
    	return "{\"rows\":\""+rows+"\"}" ;
    }

}
