package com.xm;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import  com.xm.pojo.Account;
import  com.xm.mapper.AccountMapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author chnewei
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class AccountMapperTest {
    @Autowired
    private AccountMapper accountMapper;
    
    @Test
    public void testSelectAccountByDate(){
        Map<String, String> maps = new HashMap();
        maps.put("date1","2019-01-01");
        maps.put("date2","2019-12-31");
        
        //调用方法
        List<Account> accounts  = accountMapper.selectAccountByDate(maps);
        System.out.println(accounts.toString());
    }

    @Test
    public void testSelectAccountByDay(){
        Map<String, String> maps = new HashMap();
        maps.put("date1","2019-01-01");
        maps.put("date2","2019-12-31");

        //调用方法
        List<Map> map  = accountMapper.selectAccountByDay(maps);
        System.out.println(map.toString());
    }
    
    @Test
    public void testSelectAccountByMonth(){
        //调用方法
        List<Map> map  = accountMapper.selectAccountByMonth();
        System.out.println(map.toString());
    }
    
    @Test
    public void testSelectAccountByYear(){
        //调用方法
        List<Map> map  = accountMapper.selectAccountByYear();
        System.out.println(map.toString());
    }
        
    @Test
    public void testSaveAccount(){
       // 创建Account对象
	Account account= new Account("2019-09-09", (float) 23.09,"餐饮");
	// 插入数据
        Integer rows  = accountMapper.saveAccount(account);
        System.out.println(rows.toString());
    }    
    
    @Test
    public void testModifyAccount(){
        // Account对象
	Account account= new Account("2019-09-01", (float) 33.80,"日用品");
        account.setId(19);
	// 修改数据
        Integer rows  = accountMapper.modifyAccount(account);
        System.out.println(rows.toString());
    }    
    
    @Test
    public void testRemoveAccount(){
	// 删除数据
        Integer rows  = accountMapper.removeAccount(19);
        System.out.println(rows.toString());
    }        

}
